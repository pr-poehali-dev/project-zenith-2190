import * as React from "react"
import { motion } from "framer-motion"
import CatLayout from "./CatLayout"
import Icon from "@/components/ui/icon"

const CAT_IMG_1 = "https://cdn.poehali.dev/projects/210fe88b-2b04-4b8a-9d52-08ca92aaa200/files/2728fbd8-3f80-48a7-b916-d117dd232dbf.jpg"
const CAT_IMG_2 = "https://cdn.poehali.dev/projects/210fe88b-2b04-4b8a-9d52-08ca92aaa200/files/669c6344-e02e-4c43-bd0c-945fe7e96cde.jpg"
const CAT_IMG_3 = "https://cdn.poehali.dev/projects/210fe88b-2b04-4b8a-9d52-08ca92aaa200/files/ad2c9aa4-5c22-4489-99e1-11c014b90720.jpg"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

// ---- HOME SECTION ----
function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-12 py-24">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/8 rounded-full blur-[100px]" />
      </div>

      <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-amber-300 text-sm font-medium">Шотландская порода</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              Золотая
            </span>
            <br />
            <span className="text-white">Шиншилла</span>
            <br />
            <span className="text-white/60 text-3xl md:text-4xl">Scottish Straight</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/60 text-lg leading-relaxed mb-8">
            Одна из самых редких и изысканных окрасов шотландских кошек. Золотистый мех с тёмными кончиками
            и изумрудные глаза создают неповторимый облик этой грациозной породы.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("breed")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Узнать больше <Icon name="ArrowRight" size={18} />
            </button>
            <button
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 border border-white/20 hover:border-amber-400/50 hover:text-amber-300 text-white px-6 py-3 rounded-xl transition-colors"
            >
              Галерея <Icon name="Image" size={18} />
            </button>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-yellow-600/10 rounded-3xl blur-2xl" />
          <img
            src={CAT_IMG_1}
            alt="Золотая шиншилла скоттиш-страйт"
            className="relative rounded-3xl w-full object-cover shadow-2xl shadow-amber-500/20 border border-white/10"
            style={{ aspectRatio: "1/1" }}
          />
          <div className="absolute -bottom-4 -right-4 bg-[#0d0d18] border border-white/10 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <div>
                <p className="text-xs text-white/40">Редкость окраса</p>
                <p className="text-sm font-bold text-amber-300">Исключительная</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 relative z-10">
        {[
          { label: "Вес взрослой кошки", value: "3–6 кг" },
          { label: "Продолжительность жизни", value: "12–15 лет" },
          { label: "Тип шерсти", value: "Полудлинная" },
          { label: "Характер", value: "Спокойный" },
        ].map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-amber-500/30 transition-colors">
            <p className="text-xl font-bold text-amber-300">{stat.value}</p>
            <p className="text-xs text-white/40 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

// ---- BREED SECTION ----
function BreedSection() {
  return (
    <section id="breed" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">О породе</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Золотая шиншилла: история и особенности</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <motion.div variants={fadeUp} className="space-y-5 text-white/70 text-base leading-relaxed">
              <p>
                <strong className="text-amber-300">Золотая шиншилла</strong> — это редкий вариант окраса шотландских кошек,
                при котором подшёрсток имеет насыщенный абрикосовый или золотисто-кремовый оттенок, а кончики остевых волос
                окрашены в тёмно-коричневый или чёрный цвет.
              </p>
              <p>
                <strong className="text-white">Scottish Straight</strong> (скоттиш-страйт) — прямоухая разновидность шотландской
                породы. В отличие от Fold (вислоухих), страйты имеют обычные прямые уши и отличаются крепким здоровьем,
                отсутствием проблем с суставами.
              </p>
              <p>
                Глаза у золотых шиншилл особенные — они могут быть изумрудно-зелёными или голубовато-зелёными,
                что создаёт невероятный контраст с золотистым мехом. Именно этот признак является одним из главных
                на выставках.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <img
                src={CAT_IMG_3}
                alt="Золотая шиншилла крупным планом"
                className="rounded-2xl w-full object-cover border border-white/10 shadow-xl"
                style={{ aspectRatio: "4/3" }}
              />
            </motion.div>
          </div>

          {/* Characteristics table */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Icon name="TableProperties" size={20} className="text-amber-400" />
              Характеристики породы
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-amber-500/10 border-b border-white/10">
                    <th className="text-left px-5 py-3 text-amber-300 font-semibold">Параметр</th>
                    <th className="text-left px-5 py-3 text-amber-300 font-semibold">Значение</th>
                    <th className="text-left px-5 py-3 text-amber-300 font-semibold">Примечание</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Тип ушей", "Прямые (Straight)", "Отличие от Scottish Fold"],
                    ["Окрас шерсти", "Золотисто-шиншилловый", "Редкий, ценится на выставках"],
                    ["Цвет глаз", "Изумрудно-зелёный", "Обязательное требование стандарта"],
                    ["Телосложение", "Среднее, округлое", "Мускулистое, плотное"],
                    ["Вес (кот)", "4–6 кг", "Взрослый самец"],
                    ["Вес (кошка)", "3–4.5 кг", "Взрослая самка"],
                    ["Продолжительность жизни", "12–15 лет", "При правильном уходе до 18"],
                    ["Линька", "Умеренная", "Требует регулярного расчёсывания"],
                    ["Активность", "Средняя", "Спокойные, любят покой"],
                    ["Социальность", "Высокая", "Привязаны к семье"],
                  ].map(([param, value, note], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/3" : "bg-transparent"}>
                      <td className="px-5 py-3 text-white/80 font-medium">{param}</td>
                      <td className="px-5 py-3 text-amber-200">{value}</td>
                      <td className="px-5 py-3 text-white/40 text-xs">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ---- CARE SECTION ----
function CareSection() {
  const tips = [
    {
      icon: "Scissors",
      title: "Уход за шерстью",
      desc: "Расчёсывайте кошку 2–3 раза в неделю мягкой щёткой. В период линьки (весна/осень) — ежедневно. Купайте раз в 1–2 месяца с шампунем для длинношёрстных кошек.",
    },
    {
      icon: "Eye",
      title: "Уход за глазами",
      desc: "Из-за приплюснутой морды возможно небольшое слезотечение. Протирайте уголки глаз ватным диском, смоченным в физрастворе или специальном лосьоне.",
    },
    {
      icon: "Stethoscope",
      title: "Ветеринарный контроль",
      desc: "Ежегодные прививки и обработка от паразитов обязательны. Золотые шиншиллы предрасположены к HCM (гипертрофическая кардиомиопатия) — ЭхоКГ раз в год.",
    },
    {
      icon: "Dumbbell",
      title: "Физическая активность",
      desc: "Несмотря на спокойный характер, кошкам нужны игры. 15–20 минут активной игры с удочкой или мышью в день — оптимальная нагрузка.",
    },
    {
      icon: "Thermometer",
      title: "Температурный режим",
      desc: "Избегайте сквозняков и резких перепадов температур. Оптимальная температура в доме — 20–24°C. Не оставляйте под прямыми солнечными лучами.",
    },
    {
      icon: "Baby",
      title: "Воспитание котят",
      desc: "Социализация с 2 до 7 недель жизни критически важна. Котята золотой шиншиллы отличаются игривостью — обеспечьте разнообразие игрушек и когтеточки.",
    },
  ]

  return (
    <section id="care" className="py-24 px-6 md:px-12 bg-white/2">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Уход</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Как заботиться о питомце</h2>
            <p className="text-white/50 mt-3 max-w-2xl">Золотая шиншилла требует внимательного ухода за шерстью и здоровьем. Следуйте этим рекомендациям для долгой и счастливой жизни вашей кошки.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {tips.map((tip, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-500/30 transition-all hover:bg-amber-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 flex items-center justify-center">
                    <Icon name={tip.icon} size={18} className="text-amber-400" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{tip.title}</h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Nutrition subsection */}
          <motion.div variants={fadeUp} id="nutrition" className="mt-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Icon name="UtensilsCrossed" size={20} className="text-amber-400" />
              Питание золотой шиншиллы
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-amber-300 font-semibold mb-3 text-sm uppercase tracking-wide">Рекомендуется</h4>
                <ul className="space-y-2">
                  {[
                    "Премиум и супер-премиум сухой корм для кошек",
                    "Влажный корм с высоким содержанием мяса (70%+)",
                    "Куриная, индюшачья грудка (варёная)",
                    "Нежирная рыба 1–2 раза в неделю",
                    "Специальные корма для длинношёрстных пород",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/65 text-sm">
                      <Icon name="CheckCircle" size={15} className="text-green-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-red-400 font-semibold mb-3 text-sm uppercase tracking-wide">Запрещено</h4>
                <ul className="space-y-2">
                  {[
                    "Молоко и молочные продукты (лактоза)",
                    "Лук, чеснок, виноград, изюм",
                    "Шоколад и сладости",
                    "Сырая рыба (риск паразитов)",
                    "Еда «со стола» с солью и специями",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/65 text-sm">
                      <Icon name="XCircle" size={15} className="text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ---- GALLERY SECTION ----
function GallerySection() {
  const photos = [
    { src: CAT_IMG_1, title: "Портрет взрослой кошки", desc: "Классический золотисто-шиншилловый окрас" },
    { src: CAT_IMG_2, title: "Котёнок золотой шиншиллы", desc: "Игривый котёнок в возрасте 3 месяцев" },
    { src: CAT_IMG_3, title: "Золотая шиншилла отдыхает", desc: "Грациозная поза и пышный хвост" },
  ]

  return (
    <section id="gallery" className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Галерея</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Фотографии породы</h2>
            <p className="text-white/50 mt-3">Красота золотой шиншиллы в каждом кадре</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {photos.map((photo, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300">
                <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm">{photo.title}</p>
                    <p className="text-white/60 text-xs mt-1">{photo.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video placeholder */}
          <motion.div variants={fadeUp} className="mt-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-amber-900/20 to-yellow-900/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center backdrop-blur-sm">
                    <Icon name="Play" size={32} className="text-amber-300 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <p className="text-white/50 text-sm">Видео о породе — золотая шиншилла скоттиш-страйт</p>
                  <p className="text-white/30 text-xs mt-1">Добавьте ссылку на видео, чтобы активировать плеер</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interesting facts list */}
          <motion.div variants={fadeUp} className="mt-10">
            <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
              <Icon name="Sparkles" size={20} className="text-amber-400" />
              Интересные факты
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Ген золотого окраса рецессивный — оба родителя должны быть носителями",
                "Котята рождаются практически белыми — цвет проявляется к 3–4 месяцам",
                "Золотая шиншилла — не самостоятельная порода, а окрас шотландской кошки",
                "Кончики волос (типпинг) не должны превышать 1/8 длины волоса",
                "Зелёный цвет глаз является обязательным стандартом для данного окраса",
                "Порода была признана официально в Великобритании в 1882 году",
                "Первые шотландские кошки появились в 1961 году в Шотландии",
                "Скоттиш-страйты генетически здоровее фолдов из-за отсутствия мутации хряща",
              ].map((fact, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/3 border border-white/8 rounded-xl p-4">
                  <span className="text-amber-400 font-bold text-sm mt-0.5 shrink-0">#{i + 1}</span>
                  <p className="text-white/65 text-sm">{fact}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ---- SECURITY SECTION ----
function SecuritySection() {
  const threats = [
    {
      icon: "Wifi",
      title: "Безопасность при покупке онлайн",
      level: "high",
      desc: "При покупке котёнка через интернет проверяйте продавца. Мошенники часто используют поддельные сайты питомников с чужими фотографиями.",
      tips: [
        "Проверяйте домен сайта питомника (возраст, отзывы)",
        "Никогда не переводите 100% предоплату незнакомым продавцам",
        "Используйте защищённые способы оплаты (карта, а не перевод)",
        "Ищите реальные отзывы покупателей на независимых площадках",
      ],
    },
    {
      icon: "CreditCard",
      title: "Финансовая безопасность",
      level: "high",
      desc: "Приобретение редких пород — дорогостоящая сделка. Защитите свои финансы от мошеннических схем.",
      tips: [
        "Заключайте официальный договор купли-продажи с питомником",
        "Требуйте ветеринарный паспорт и родословную",
        "Проверяйте реквизиты получателя перед оплатой",
        "Не покупайте 'срочно по низкой цене' — классическая схема обмана",
      ],
    },
    {
      icon: "Shield",
      title: "Персональные данные",
      level: "medium",
      desc: "При регистрации на форумах и сайтах заводчиков соблюдайте осторожность с личными данными.",
      tips: [
        "Используйте уникальные пароли для каждого сайта",
        "Не указывайте точный адрес в публичных объявлениях",
        "Включите двухфакторную аутентификацию там, где возможно",
        "Не публикуйте фото документов в открытом доступе",
      ],
    },
    {
      icon: "Camera",
      title: "Защита медиаконтента",
      level: "low",
      desc: "Фотографии ваших питомцев могут быть использованы мошенниками. Защитите свой контент.",
      tips: [
        "Добавляйте водяные знаки на публикуемые фото котят",
        "Не выкладывайте документы и сертификаты без маскирования данных",
        "Проверяйте, не используются ли ваши фото на чужих сайтах (Google Images)",
        "Ограничивайте скачивание фото в социальных сетях",
      ],
    },
  ]

  const levelColor: Record<string, string> = {
    high: "text-red-400 bg-red-400/10 border-red-400/20",
    medium: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    low: "text-green-400 bg-green-400/10 border-green-400/20",
  }

  const levelLabel: Record<string, string> = {
    high: "Высокий риск",
    medium: "Средний риск",
    low: "Низкий риск",
  }

  return (
    <section id="security" className="py-24 px-6 md:px-12 bg-white/2">
      <div className="max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-12">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Информационная безопасность</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Справка по безопасности</h2>
            <p className="text-white/50 mt-3 max-w-2xl">
              При поиске и покупке редких пород кошек необходимо соблюдать правила цифровой безопасности.
              Этот раздел поможет защитить вас от мошенничества.
            </p>
          </motion.div>

          {/* Alert banner */}
          <motion.div variants={fadeUp} className="bg-red-500/10 border border-red-500/30 rounded-2xl p-5 mb-10 flex items-start gap-4">
            <Icon name="AlertTriangle" size={24} className="text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-red-300 font-semibold">Внимание: мошенничество с редкими породами</p>
              <p className="text-white/60 text-sm mt-1">
                Золотая шиншилла — одна из самых дорогих и редких пород. Злоумышленники активно используют её популярность.
                По данным зоозащитных организаций, более 30% объявлений о продаже редких пород содержат признаки мошенничества.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {threats.map((threat, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/20 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Icon name={threat.icon} size={20} className="text-amber-400" />
                    </div>
                    <h3 className="font-semibold text-white text-sm">{threat.title}</h3>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${levelColor[threat.level]}`}>
                    {levelLabel[threat.level]}
                  </span>
                </div>
                <p className="text-white/55 text-sm mb-4 leading-relaxed">{threat.desc}</p>
                <ul className="space-y-2">
                  {threat.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/65 text-sm">
                      <Icon name="ChevronRight" size={14} className="text-amber-400 mt-0.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick checklist */}
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-2">
              <Icon name="ClipboardCheck" size={20} />
              Чеклист безопасной покупки котёнка
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                ["Проверил репутацию питомника/заводчика", true],
                ["Запросил видеозвонок с котёнком", true],
                ["Получил копию родословной (до оплаты)", true],
                ["Заключил письменный договор", true],
                ["Проверил ветеринарный паспорт с прививками", true],
                ["Оплатил через безопасный сервис", true],
                ["Убедился в наличии клейма/чипа у котёнка", false],
                ["Проверил адрес и данные продавца", false],
              ].map(([item, done], i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 ${done ? "bg-green-500/20 border-green-400/50" : "bg-white/5 border-white/20"}`}>
                    {done && <Icon name="Check" size={12} className="text-green-400" />}
                  </div>
                  <span className="text-sm text-white/65">{item as string}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ---- FOOTER ----
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🐱</span>
          <div>
            <p className="font-bold text-white text-sm">Золотая Шиншилла</p>
            <p className="text-xs text-white/40">Scottish Straight — энциклопедия породы</p>
          </div>
        </div>
        <p className="text-white/30 text-xs text-center">
          Информационный сайт о породе кошек. Все материалы носят ознакомительный характер.
        </p>
        <div className="flex items-center gap-4 text-xs text-white/30">
          <button onClick={() => document.getElementById("breed")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-amber-300 transition-colors">О породе</button>
          <button onClick={() => document.getElementById("care")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-amber-300 transition-colors">Уход</button>
          <button onClick={() => document.getElementById("security")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-amber-300 transition-colors">Справка ИБ</button>
        </div>
      </div>
    </footer>
  )
}

// ---- MAIN COMPONENT ----
export default function CatSite() {
  return (
    <CatLayout>
      <HomeSection />
      <BreedSection />
      <CareSection />
      <GallerySection />
      <SecuritySection />
      <Footer />
    </CatLayout>
  )
}
