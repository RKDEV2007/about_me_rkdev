const projectsData = [
  // Галерея BounceCards: замените пять путей в gallery у нужного проекта
  // на разные скриншоты. Первый кадр всегда показан как обложка.
  {
    id: 0,
    title: "Многостраничный сайт для репетитора английского",
    tag: "Education Website",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Структурированный сайт с программой занятий, преимуществами, анимацией и понятным путем к записи.",
    gallery: [
      "/images/english/eng1.png",
      "/images/english/eng2.png",
      "/images/english/eng3.png",
      "/images/english/eng4.png",
      "/images/english/eng5.png"
    ],
    demo: "https://rkdev2007.github.io/english-tutor/",
    github: "https://github.com/RKDEV2007/english-tutor"
  },
  {
    id: 1,
    title: "Сайт кофейни",
    tag: "Business Website",
    tags: ["Frontend", "UI", "Adaptive"],
    description: "Адаптивная презентация кофейни с меню, галереей, атмосферными карточками и контактным блоком.",
    gallery: [
      "/images/cofshop/kofee.jpg",
      "/images/cofshop/kofee2.png",
      "/images/cofshop/kofee3.png",
      "/images/cofshop/kofee4.png",
      "/images/cofshop/kofee5.png"
    ],
    demo: "https://rkdev2007.github.io/coffee-shop/",
    github: "https://github.com/RKDEV2007/coffee-shop.git"
  },
  {
    id: 2,
    title: "Лендинг сервиса ремонта телефонов",
    tag: "Service Landing",
    tags: ["Landing", "CSS Grid", "Conversion"],
    description: "Посадочная страница для услуги с акцентом на доверие, список работ, преимущества и быстрый контакт.",
    gallery: [
      "/images/repair/phone.jpg",
      "/images/repair/phone2.png",
      "/images/repair/phone3.png",
      "/images/repair/phone4.png",
      "/images/repair/phone5.png"
    ],
    demo: "https://rkdev2007.github.io/phone-repair/",
    github: "https://github.com/RKDEV2007/phone-repair.git"
  },
  {
    id: 3,
    title: "WeekPlanner",
    tag: "Productivity App",
    tags: ["React", "State", "Planning"],
    description: "Планировщик недели с задачами, удалением, генерацией расписания и индикатором ресурса.",
    gallery: [
      "/images/weekplan/weekplan.png",
      "/images//weekplan/weekplan1.png",
      "/images/weekplan/weekplan2.png",
      "/images/weekplan/weekplan3.png",
      "/images/weekplan/weekplan4.png"

    ],
    demo: "https://week-plan-gamma.vercel.app",
    github: "https://github.com/RKDEV2007/WeekPlan"
  },
  {
    id: 4,
    title: "Финансовый трекер",
    tag: "Finance App",
    tags: ["React", "CRUD", "Dashboard"],
    description: "Приложение для учета транзакций с добавлением, редактированием, удалением и визуальной структурой расходов.",
    gallery: [
      "/images/finance/finance.jpg",
      "/images/finance/finance2.png",
      "/images/finance/finance3.png",
      "/images/finance/finance4.png",
      "/images/finance/finance5.png"
    ],
    demo: "https://money-s-steel.vercel.app",
    github: "https://github.com/RKDEV2007/Money-s"
  },
  {
    id: 5,
    title: "Сайт магазина компьютерной техники",
    tag: "Business Website",
    tags: ["Landing", "UI", "Adaptive"],
    description: "Лендинг с витриной категорий, продающей структурой и визуальным акцентом на технологичный продукт.",
    gallery: [
      "/images/neonshop/neon.jpg",
      "/images/neonshop/neon2.png",
      "/images/neonshop/neon3.png",
      "/images/neonshop/neon4.png",
      "/images/neonshop/neon5.png"
    ],
    demo: "https://rkdev2007.github.io/neon-shop/",
    github: "https://github.com/RKDEV2007/neon-shop"
  },
  {
    id: 6,
    title: "Многостраничный сайт частной клиники",
    tag: "Medical Website",
    tags: ["Multipage", "Frontend", "Services"],
    description: "Сайт клиники с несколькими страницами, описанием услуг, навигацией и аккуратной информационной подачей.",
    gallery: [
      "/images/medical/clinik.png",
      "/images/medical/clinik2.png",
      "/images/medical/clinik3.png",
      "/images/medical/clinik4.png",
      "/images/medical/clinik5.png"
    ],
    demo: "https://rkdev2007.github.io/meridian-clinik/",
    github: "https://github.com/RKDEV2007/meridian-clinik"
  },
  {
    id: 7,
    title: "Лендинг фотографа",
    tag: "Portfolio Landing",
    tags: ["Portfolio", "Landing", "Frontend"],
    description: "Страница для специалиста с услугами, портфолио, отзывами и понятной формой заявки.",
    gallery: [
      "/images/photo/photo.jpg",
      "/images/photo/photo2.png",
      "/images/photo/photo3.png",
      "/images/photo/photo4.png",
      "/images/photo/photo5.png"
    ],
    demo: "https://rkdev2007.github.io/photo-man/",
    github: "https://github.com/RKDEV2007/photo-man.git"
  },
  {
    id: 8,
    title: "Сайт репетитора",
    tag: "Personal Website",
    tags: ["Education", "Landing", "Frontend"],
    description: "Лендинг с описанием занятий, преимуществами, отзывами и быстрым переходом к записи.",
    gallery: [
      "/images/tutor/tutor.jpg",
      "/images/tutor/tutor2.png",
      "/images/tutor/tutor3.png",
      "/images/tutor/tutor4.png",
      "/images/tutor/tutor5.png"
    ],
    demo: "https://rkdev2007.github.io/tutor-school/",
    github: "https://github.com/RKDEV2007/tutor-school.git"
  },
  {
    id: 9,
    title: "Сайт магазина одежды",
    tag: "Business Website",
    tags: ["Landing", "Frontend"],
    description: "Лендинг модного магазина одежды с простым интерфейсом.",
    gallery: [
      "/images/clothes/atelier.jpg",
      "/images/clothes/atelier2.png",
      "/images/clothes/atelier3.png",
      "/images/clothes/atelier4.png",
      "/images/clothes/atelier5.png"
    ],
    demo: "https://rkdev2007.github.io/clothes_shop/",
    github: "https://github.com/RKDEV2007/clothes_shop"
  },
{
    id: 10,
    title: "Сайт премиальной техники",
    tag: "Business Website",
    tags: ["Landing", "Frontend", "UI"],
    description: "Лендинг премиального магазина техники с простым интерфейсом и анимацией.",
    gallery: [
      "/images/lux/luxteck.jpg",
      "/images/lux/luxteck2.png",
      "/images/lux/luxteck3.png",
      "/images/lux/luxteck4.png",
      "/images/lux/luxteck5.png"
    ],
    demo: "https://rkdev2007.github.io/premium_sel_tech/index.html",
    github: "https://github.com/RKDEV2007/premium_sel_tech"
  }
];

export default projectsData;
