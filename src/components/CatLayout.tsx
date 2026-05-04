import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Icon from "@/components/ui/icon"

interface NavItem {
  name: string
  href: string
  icon: string
}

const navItems: NavItem[] = [
  { name: "Главная", href: "#home", icon: "Home" },
  { name: "О породе", href: "#breed", icon: "Info" },
  { name: "Уход", href: "#care", icon: "Heart" },
  { name: "Питание", href: "#nutrition", icon: "UtensilsCrossed" },
  { name: "Галерея", href: "#gallery", icon: "Image" },
  { name: "Справка ИБ", href: "#security", icon: "ShieldCheck" },
]

export function CatLayout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = React.useState("home")
  const [sidebarOpen, setSidebarOpen] = React.useState(true)
  const [menuOpen, setMenuOpen] = React.useState(false)

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "")
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )
    navItems.forEach(({ href }) => {
      const el = document.getElementById(href.replace("#", ""))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 md:px-8 h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={20} />
            </button>
            <button
              className="hidden md:flex p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Icon name="PanelLeft" size={20} />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐱</span>
              <div>
                <div className="font-bold text-base leading-tight bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  Золотая Шиншилла
                </div>
                <div className="text-xs text-white/50">Scottish Straight</div>
              </div>
            </div>
          </div>

          {/* Top nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  activeSection === item.href.replace("#", "")
                    ? "bg-amber-500/20 text-amber-300"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 bg-amber-500/20 border border-amber-500/30 rounded-full px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-xs text-amber-300">Энциклопедия</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" onClick={() => setMenuOpen(false)}>
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            className="absolute left-0 top-0 bottom-0 w-64 bg-[#0f0f1a] border-r border-white/10 pt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="p-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    activeSection === item.href.replace("#", "")
                      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon name={item.icon} size={18} />
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        </div>
      )}

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <motion.aside
          animate={{ width: sidebarOpen ? 220 : 0, opacity: sidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block fixed left-0 top-16 bottom-0 z-30 overflow-hidden border-r border-white/10 bg-[#0d0d18]"
        >
          <div className="w-[220px] h-full flex flex-col py-6">
            <div className="px-4 mb-4">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest">Разделы</p>
            </div>
            <nav className="flex-1 px-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                    activeSection === item.href.replace("#", "")
                      ? "bg-gradient-to-r from-amber-500/20 to-yellow-500/10 text-amber-300 border border-amber-500/20"
                      : "text-white/50 hover:text-white hover:bg-white/8"
                  )}
                >
                  <Icon name={item.icon} size={17} />
                  <span>{item.name}</span>
                  {activeSection === item.href.replace("#", "") && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  )}
                </button>
              ))}
            </nav>

            <div className="px-4 mt-4">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3">
                <p className="text-xs text-amber-300/80 font-medium mb-1">Интересный факт</p>
                <p className="text-xs text-white/50">Золотая шиншилла — одна из редчайших окрасов у шотландских кошек</p>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* Main content */}
        <main
          className={cn(
            "flex-1 transition-all duration-300",
            sidebarOpen ? "md:ml-[220px]" : "md:ml-0"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

export default CatLayout
