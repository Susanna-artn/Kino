// Единственный файл для правки текстов сайта.
// Структура: content.ru.<секция> и content.en.<секция> зеркально.
// Правило: в текстах используем короткое тире «–», длинное «—» не пишем.

export type Lang = 'ru' | 'en';

// ---------- Общие типы (строгая параллельность RU и EN) ---------- //

export type Nav = {
  about: string;
  projects: string;
  skills: string;
  stack: string;
  cv: string;
  education: string;
  telegramCta: string;
};

export type Meta = {
  title: string;
  description: string;
};

export type StatBox = { value: string; label: string };
export type ContactPill = { kind: 'telegram' | 'email' | 'github' | 'vk'; label: string; href: string; note?: string };

export type Hero = {
  statusBadge: string;
  firstName: string;
  lastName: string;
  role: string;
  intro: string;
  stats: StatBox[];
  ctaPrimary: string;
  ctaSecondary: string;
  contacts: ContactPill[];
  photoAlt: string;
};

export type About = {
  title: string;
  paragraphs: string[];
  quote: string;
  besidesTitle: string;
  besidesItems: string[];
};

export type ProjectStatus = 'in_progress'; // расширяемо: 'live' | 'archived' и т.д.
export type Project = {
  title: string;
  description: string;
  tech?: string;
  status: ProjectStatus;
  statusLabel: string;
  // на будущее — легко подставить ссылки
  liveUrl?: string;
  repoUrl?: string;
};

export type SkillLevel = 'confident' | 'learning';
export type Skill = {
  title: string;
  level: SkillLevel;
  levelLabel: string;
  bullets: string[];
};

export type StackCategory = {
  key: 'ai' | 'frontend' | 'backend' | 'databases' | 'marketing' | 'tools';
  label: string;
  // элемент со звёздочкой в конце — «изучаю» (звёздочку в UI не показываем)
  items: string[];
};

export type CvSubproject = {
  title: string;
  body: string;
  outcome: string; // «→ итог»
};

export type CvEntry = {
  id: string;
  company: string;
  duration: string;
  dates: string;
  role: string;
  description?: string;
  bullets?: string[];
  subproject?: CvSubproject;
  result?: string[]; // пункты зелёной плашки «Результат»
  compact?: boolean; // компактная карточка без вложенных блоков
};

export type EduDegree = { title: string; years: string };
export type EduExtra = { title: string };
export type EduLangRow = { name: string; level: string };

export type Education = {
  title: string;
  uniCardTitle: string;
  uniName: string;
  uniInstitute: string;
  degrees: EduDegree[];
  extraTitle: string;
  extraItems: EduExtra[];
  languagesTitle: string;
  languages: EduLangRow[];
  aboutMeTitle: string;
  aboutMeText: string;
  interestsTitle: string;
  interestsCategory: string;
  interests: string[];
};

export type Footer = {
  telegram: string;
  email: string;
  github: string;
  vk: string;
};

export type SiteContent = {
  meta: Meta;
  nav: Nav;
  hero: Hero;
  about: About;
  projectsTitle: string;
  projects: Project[];
  skillsTitle: string;
  skills: Skill[];
  stackTitle: string;
  stackSubtitle: string;
  stack: StackCategory[];
  cvTitle: string;
  cv: CvEntry[];
  resultLabel: string;
  parallelTitle: string; // «Параллельно с учёбой»
  parallelItems: string[]; // строки для компактной карточки
  education: Education;
  footer: Footer;
  langSwitch: { ru: string; en: string };
};

// ---------- Контакты (общие ссылки, не переводятся) ---------- //

const links = {
  telegram: 'https://t.me/Susanna_artn',
  email: 'mailto:susanna06092001@mail.ru',
  emailAddr: 'susanna06092001@mail.ru',
  github: '#',
  vk: '#',
};

// ---------- RU ---------- //

const ru: SiteContent = {
  meta: {
    title: 'Сусанна Абрашина – AI-разработчик',
    description:
      'Начинающий AI-разработчик. Автоматизирую бизнес-процессы: CRM, боты, AI-агенты. Инженер по образованию, преподаватель программирования.',
  },
  nav: {
    about: 'О себе',
    projects: 'Проекты',
    skills: 'Навыки',
    stack: 'Технологии',
    cv: 'CV',
    education: 'Образование',
    telegramCta: 'Telegram',
  },
  hero: {
    statusBadge: 'Открыта к предложениям',
    firstName: 'Сусанна',
    lastName: 'Абрашина',
    role: 'Начинающий AI-разработчик · Автоматизация бизнес-процессов',
    intro:
      'Автоматизирую бизнес-процессы с помощью ИИ: CRM, боты, AI-агенты. Инженер по образованию, преподавала программирование, развиваю собственную оконную компанию и внедряю в неё ИИ.',
    stats: [
      { value: '2', label: 'высших образования' },
      { value: '10+', label: 'лет академической практики' },
      { value: '2,5', label: 'года преподавания программирования' },
      { value: '8', label: 'проектов в разработке' },
    ],
    ctaPrimary: 'Смотреть опыт',
    ctaSecondary: 'Написать мне',
    contacts: [
      { kind: 'telegram', label: 'Telegram', href: links.telegram },
      { kind: 'email', label: 'Email', href: links.email },
      {
        kind: 'github',
        label: 'GitHub',
        href: links.github,
        note: '(проекты загружаю – скоро здесь появятся)',
      },
    ],
    photoAlt: 'Фото Сусанны Абрашиной',
  },
  about: {
    title: 'О себе',
    paragraphs: [
      'Инженер по образованию: прикладная механика и системный инжиниринг. Опыт в робототехнике.',
      'Второй год развиваю собственную оконную компанию «Окнись» и отвечаю в ней за всю цифровую часть: сайт, CRM, бот заявок, рекламу, контент.',
      'Сейчас моя главная задача – автоматизировать бизнес с помощью ИИ: AI-агенты для обработки заявок, связка CRM с ботами, минимум ручной работы.',
      'Разрабатываю вместе с Claude (Claude Code) и Cursor – это мой основной инструмент.',
    ],
    quote:
      'Провалившуюся рекламную кампанию я не залила бюджетом, а нашла причину, перезапустила тесты и настроила учёт заявок по источникам.',
    besidesTitle: 'Кроме разработки',
    besidesItems: [
      'Академическое сопровождение студентов и авторские статьи – более 10 лет',
      'Наставник школьника в научно-исследовательской работе (физика, Python)',
      'Соавтор библиотеки учебных материалов по математике для школьников и студентов',
    ],
  },
  projectsTitle: 'Собственные проекты',
  projects: [
    {
      title: 'Сайт «Окнись»',
      description: 'Сайт оконной компании: каталог, расчёт, заявки.',
      tech: 'Next.js / React',
      status: 'in_progress',
      statusLabel: 'На этапе реализации',
    },
    {
      title: 'CRM «Окнись»',
      description: 'Учёт заявок и клиентов, воронка лидов, источники.',
      tech: 'Supabase (PostgreSQL)',
      status: 'in_progress',
      statusLabel: 'На этапе реализации',
    },
    {
      title: 'Репетиторская онлайн-платформа',
      description:
        'Обучение по физике и математике, проверка решений и разбор ошибок с помощью ИИ.',
      status: 'in_progress',
      statusLabel: 'На этапе реализации',
    },
    {
      title: 'AI-парсер заявок',
      description:
        'Бот превращает заметки менеджера в свободной форме в структурированные записи CRM.',
      tech: 'LLM → JSON → Supabase',
      status: 'in_progress',
      statusLabel: 'На этапе реализации',
    },
    {
      title: 'Бот проверки решений по алгебре',
      description: 'Разбор ошибок ученика и недельная сводка преподавателю.',
      status: 'in_progress',
      statusLabel: 'На этапе реализации',
    },
    {
      title: 'Автоматизация поиска вакансий',
      description: 'Браузерная автоматизация с сохранением сессии.',
      tech: 'Python, Playwright',
      status: 'in_progress',
      statusLabel: 'На этапе реализации',
    },
    {
      title: 'Telegram-бот рекомендаций фильмов',
      description: 'Подбирает фильмы по запросу пользователя.',
      tech: 'Python',
      status: 'in_progress',
      statusLabel: 'На этапе реализации',
    },
    {
      title: 'Сайт для кафе',
      description: 'Веб-разработка для заказчика.',
      status: 'in_progress',
      statusLabel: 'На этапе реализации',
    },
  ],
  skillsTitle: 'Ключевые компетенции',
  skills: [
    {
      title: 'AI-разработка',
      level: 'confident',
      levelLabel: 'Уверенно',
      bullets: [
        'Разработка с Claude и Claude Code',
        'Работа в Cursor',
        'Промптинг и structured outputs',
        'Понимание RAG и AI-агентов',
      ],
    },
    {
      title: 'Бизнес-автоматизация',
      level: 'confident',
      levelLabel: 'Уверенно',
      bullets: [
        'CRM под реальные процессы компании',
        'Telegram-бот приёма заявок',
        'Превращение неструктурированных данных в структурированные',
      ],
    },
    {
      title: 'Маркетинг и аналитика',
      level: 'confident',
      levelLabel: 'Уверенно',
      bullets: [
        'VK Реклама – гипотезы, тесты, анализ аудитории',
        'Авито, 2ГИС, Яндекс Бизнес',
      ],
    },
    {
      title: 'Преподавание',
      level: 'confident',
      levelLabel: 'Уверенно',
      bullets: [
        '2,5 года преподавания программирования в школе',
        'Учебные планы и методические материалы',
        'Объясняю сложное простым языком',
      ],
    },
    {
      title: 'Академическое письмо',
      level: 'confident',
      levelLabel: 'Уверенно',
      bullets: [
        '10+ лет работы с ВКР, курсовыми и статьями',
        'Структура, методология, оформление, подготовка к защите',
      ],
    },
    {
      title: 'Разработка',
      level: 'learning',
      levelLabel: 'Изучаю',
      bullets: ['Python', 'HTML, CSS, JavaScript', 'React, Next.js', 'Node.js'],
    },
    {
      title: 'Инженерная база',
      level: 'confident',
      levelLabel: 'Уверенно',
      bullets: ['Системный подход', 'Прикладная механика', 'Робототехника', 'Mathcad'],
    },
    {
      title: 'Как я работаю',
      level: 'confident',
      levelLabel: 'Уверенно',
      bullets: [
        'Сначала разбираюсь, почему',
        'Вижу процесс целиком',
        'Понимаю бизнес изнутри',
        'В портфолио – только то, что можно открыть',
      ],
    },
  ],
  stackTitle: 'Технологический стек',
  stackSubtitle: 'Работаю и изучаю',
  stack: [
    { key: 'ai', label: 'AI', items: ['Claude', 'Claude Code', 'Cursor', 'Claude API'] },
    {
      key: 'frontend',
      label: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript*', 'React*', 'Next.js*', 'Tailwind*'],
    },
    { key: 'backend', label: 'Backend', items: ['Python', 'Node.js*'] },
    {
      key: 'databases',
      label: 'Databases',
      items: ['Supabase', 'PostgreSQL', 'SQL'],
    },
    {
      key: 'marketing',
      label: 'Marketing',
      items: ['VK Реклама', 'Авито', '2ГИС', 'Яндекс Бизнес'],
    },
    {
      key: 'tools',
      label: 'Tools',
      items: ['Git', 'GitHub', 'Telegram Bot API', 'Playwright*', '1С:Предприятие 8', 'Mathcad'],
    },
  ],
  cvTitle: 'CV',
  cv: [
    {
      id: 'oknis',
      company: 'ИП Абрашина С. Х. – компания «Окнись», Самара',
      duration: '',
      dates: '2025 – сейчас',
      role: 'Сооснователь · Цифровое направление и автоматизация',
      description:
        'Собственная оконная компания, дилер производителей ПВХ-окон.',
      bullets: [
        'Запустила и веду компанию второй год',
        'Создала и внедрила Telegram-бот для приёма и обработки заявок',
        'Построила CRM на Supabase с воронкой лидов и учётом источников',
        'Веду рекламу ВКонтакте и площадки: Авито, 2ГИС, Яндекс Бизнес',
        'Внедряю AI-автоматизацию процессов',
      ],
      subproject: {
        title: 'Реклама ВКонтакте',
        body:
          'Первая кампания – низкий CTR и ноль сообщений. Нашла причину (номер на креативе уводил из переписки), перезапустила две тестовые кампании с реальными фото монтажей, выявила самую отзывчивую аудиторию – 45–64 года.',
        outcome: 'Настроен учёт заявок по источникам',
      },
      result: [
        'Работающий бизнес',
        'CRM и бот заявок',
        'План довести долю заказов не с Авито до 35–40%',
      ],
    },
    {
      id: 'academic',
      company: 'Академическое сопровождение и авторские тексты – частная практика',
      duration: '',
      dates: '2016 – сейчас',
      role: 'Автор · Консультант',
      description: 'Помогаю студентам с выпускными и курсовыми работами, пишу статьи.',
      bullets: [
        'Консультации по структуре, методологии и оформлению ВКР и курсовых',
        'Редактирование работ и подготовка к защите',
        'Научные и экспертные статьи',
      ],
      result: ['Более 10 лет практики'],
    },
    {
      id: 'sport',
      company: 'МАУ «Спортивный комплекс «Красноармейский»',
      duration: '',
      dates: 'Декабрь 2022 – сейчас',
      role: 'Ведущий специалист',
      bullets: [
        'Организация и проведение спортивных мероприятий',
        'С 2024 года – в декретном отпуске',
      ],
    },
    {
      id: 'decret',
      company: 'Декретный отпуск: чем занималась',
      duration: '',
      dates: '2024 – 2026',
      role: 'Переход в AI-разработку',
      bullets: [
        'Запустила компанию «Окнись»',
        'Прошла курс программирования, изучила Claude API, RAG и AI-агентов',
        'Начала собственные проекты',
      ],
    },
    {
      id: 'school',
      company: 'ГБОУ СОШ с. Красноармейское',
      duration: '',
      dates: 'Ноябрь 2021 – Май 2024',
      role: 'Преподаватель программирования',
      bullets: [
        'Уроки, лекции и дистанционные занятия по программированию',
        'Индивидуальные учебные планы и планы развития учеников',
        'Методические материалы и учебные пособия',
        'Научные исследования и проекты с учениками',
        'Работа с родителями, консультации учеников',
      ],
    },
  ],
  resultLabel: 'Результат',
  parallelTitle: 'Параллельно с учёбой',
  parallelItems: [
    'ООО «Альфа и Омега», менеджер по работе с клиентами, апрель – июнь 2023: клиентская база, деловая переписка, презентации продуктов',
    'ООО «Финансовед+», помощник бухгалтера, ноябрь 2021 – март 2023: первичные документы, учёт в 1С:Предприятие 8',
  ],
  education: {
    title: 'Образование',
    uniCardTitle: '🎓',
    uniName:
      'Самарский национальный исследовательский университет имени академика С. П. Королёва',
    uniInstitute: 'Институт авиационной и ракетно-космической техники',
    degrees: [
      {
        title: 'Магистратура: Металлургия, профиль «Системный инжиниринг»',
        years: '2023 – 2025',
      },
      {
        title: 'Бакалавриат: Прикладная механика, диплом с отличием',
        years: '2019 – 2023',
      },
    ],
    extraTitle: 'Дополнительное образование',
    extraItems: [
      { title: '«Профессия Программист с нуля до работы», С. Дмитриевский (в процессе)' },
      { title: 'Самостоятельное изучение: Claude API, RAG, AI-агенты' },
    ],
    languagesTitle: 'Языки',
    languages: [
      { name: 'Русский', level: 'Родной' },
      { name: 'Армянский', level: 'Разговорный' },
      { name: 'Английский', level: 'A1 (начала изучать)' },
    ],
    aboutMeTitle: 'О себе',
    aboutMeText: '25 лет, замужем, мама, г. Самара',
    interestsTitle: 'Интересы',
    interestsCategory: 'Спорт',
    interests: ['Волейбол', 'Баскетбол', 'Футбол', 'Настольный теннис', 'Лыжи', 'Плавание'],
  },
  footer: {
    telegram: 'Telegram',
    email: 'Email',
    github: 'GitHub',
    vk: 'VK',
  },
  langSwitch: { ru: 'RU', en: 'EN' },
};

// ---------- EN ---------- //

const en: SiteContent = {
  meta: {
    title: 'Susanna Abrashina – AI developer',
    description:
      'Early-career AI developer. I automate business processes with AI: CRM, bots, AI agents. Engineer by training, taught programming.',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    stack: 'Stack',
    cv: 'CV',
    education: 'Education',
    telegramCta: 'Telegram',
  },
  hero: {
    statusBadge: 'Open to opportunities',
    firstName: 'Susanna',
    lastName: 'Abrashina',
    role: 'AI developer (early career) · Business process automation',
    intro:
      'I automate business processes with AI: CRM, bots, AI agents. Engineer by training, I used to teach programming and now run my own window company, bringing AI into it.',
    stats: [
      { value: '2', label: 'university degrees' },
      { value: '10+', label: 'years of academic writing practice' },
      { value: '2.5', label: 'years teaching programming' },
      { value: '8', label: 'projects in progress' },
    ],
    ctaPrimary: 'See experience',
    ctaSecondary: 'Message me',
    contacts: [
      { kind: 'telegram', label: 'Telegram', href: links.telegram },
      { kind: 'email', label: 'Email', href: links.email },
      {
        kind: 'github',
        label: 'GitHub',
        href: links.github,
        note: '(uploading projects – repos coming soon)',
      },
    ],
    photoAlt: 'Photo of Susanna Abrashina',
  },
  about: {
    title: 'About me',
    paragraphs: [
      'Engineer by training: applied mechanics and systems engineering. Background in robotics.',
      'For the second year I run my own window company, Oknis, and lead everything digital there: the website, CRM, order bot, ads and content.',
      'My main focus right now is automating the business with AI: AI agents that handle incoming requests, CRM connected to bots, and as little manual work as possible.',
      'I build side by side with Claude (Claude Code) and Cursor – that is my main toolset.',
    ],
    quote:
      'When an ad campaign flopped, I did not just throw more budget at it – I found the reason, restarted the tests, and set up request tracking by source.',
    besidesTitle: 'Beyond development',
    besidesItems: [
      'Guiding students through their theses and writing my own articles – for more than 10 years',
      'Mentored a school student through research work (physics, Python)',
      'Co-author of a library of math study materials for pupils and university students',
    ],
  },
  projectsTitle: 'My projects',
  projects: [
    {
      title: 'Oknis website',
      description: 'Window company site: catalogue, quote calculator, requests.',
      tech: 'Next.js / React',
      status: 'in_progress',
      statusLabel: 'In progress',
    },
    {
      title: 'Oknis CRM',
      description: 'Request and client tracking, lead funnel, sources.',
      tech: 'Supabase (PostgreSQL)',
      status: 'in_progress',
      statusLabel: 'In progress',
    },
    {
      title: 'Online tutoring platform',
      description:
        'Physics and math tutoring, with AI checking solutions and reviewing mistakes.',
      status: 'in_progress',
      statusLabel: 'In progress',
    },
    {
      title: 'AI request parser',
      description:
        'A bot that turns a manager’s free-form notes into structured CRM records.',
      tech: 'LLM → JSON → Supabase',
      status: 'in_progress',
      statusLabel: 'In progress',
    },
    {
      title: 'Algebra solution checker bot',
      description: 'Reviews a student’s mistakes and sends a weekly summary to the teacher.',
      status: 'in_progress',
      statusLabel: 'In progress',
    },
    {
      title: 'Job search automation',
      description: 'Browser automation with session persistence.',
      tech: 'Python, Playwright',
      status: 'in_progress',
      statusLabel: 'In progress',
    },
    {
      title: 'Movie recommendation Telegram bot',
      description: 'Suggests films based on user requests.',
      tech: 'Python',
      status: 'in_progress',
      statusLabel: 'In progress',
    },
    {
      title: 'Cafe website',
      description: 'Web development for a client.',
      status: 'in_progress',
      statusLabel: 'In progress',
    },
  ],
  skillsTitle: 'Key competencies',
  skills: [
    {
      title: 'AI development',
      level: 'confident',
      levelLabel: 'Confident',
      bullets: [
        'Building with Claude and Claude Code',
        'Working in Cursor',
        'Prompting and structured outputs',
        'Working knowledge of RAG and AI agents',
      ],
    },
    {
      title: 'Business automation',
      level: 'confident',
      levelLabel: 'Confident',
      bullets: [
        'CRM tailored to a real company’s processes',
        'Telegram bot for request intake',
        'Turning unstructured data into structured data',
      ],
    },
    {
      title: 'Marketing and analytics',
      level: 'confident',
      levelLabel: 'Confident',
      bullets: [
        'VK Ads – hypotheses, tests, audience analysis',
        'Avito, 2GIS, Yandex Business',
      ],
    },
    {
      title: 'Teaching',
      level: 'confident',
      levelLabel: 'Confident',
      bullets: [
        '2.5 years teaching programming in school',
        'Curricula and teaching materials',
        'I explain complex things in simple words',
      ],
    },
    {
      title: 'Academic writing',
      level: 'confident',
      levelLabel: 'Confident',
      bullets: [
        '10+ years working on theses, coursework and articles',
        'Structure, methodology, formatting, defense prep',
      ],
    },
    {
      title: 'Development',
      level: 'learning',
      levelLabel: 'Learning',
      bullets: ['Python', 'HTML, CSS, JavaScript', 'React, Next.js', 'Node.js'],
    },
    {
      title: 'Engineering foundation',
      level: 'confident',
      levelLabel: 'Confident',
      bullets: ['Systems thinking', 'Applied mechanics', 'Robotics', 'Mathcad'],
    },
    {
      title: 'How I work',
      level: 'confident',
      levelLabel: 'Confident',
      bullets: [
        'I start with why',
        'I see the process as a whole',
        'I understand the business from the inside',
        'Only things I can show go into my portfolio',
      ],
    },
  ],
  stackTitle: 'Tech stack',
  stackSubtitle: 'Using and learning',
  stack: [
    { key: 'ai', label: 'AI', items: ['Claude', 'Claude Code', 'Cursor', 'Claude API'] },
    {
      key: 'frontend',
      label: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript*', 'React*', 'Next.js*', 'Tailwind*'],
    },
    { key: 'backend', label: 'Backend', items: ['Python', 'Node.js*'] },
    {
      key: 'databases',
      label: 'Databases',
      items: ['Supabase', 'PostgreSQL', 'SQL'],
    },
    {
      key: 'marketing',
      label: 'Marketing',
      items: ['VK Ads', 'Avito', '2GIS', 'Yandex Business'],
    },
    {
      key: 'tools',
      label: 'Tools',
      items: ['Git', 'GitHub', 'Telegram Bot API', 'Playwright*', '1C:Enterprise 8', 'Mathcad'],
    },
  ],
  cvTitle: 'CV',
  cv: [
    {
      id: 'oknis',
      company: 'Sole proprietor Abrashina S. Kh. – Oknis company, Samara',
      duration: '',
      dates: '2025 – now',
      role: 'Co-founder · Digital and automation',
      description: 'My own window company, dealer of PVC window manufacturers.',
      bullets: [
        'Launched and running the company for the second year',
        'Built and deployed a Telegram bot for request intake and processing',
        'Built a CRM on Supabase with a lead funnel and source tracking',
        'Run VK ads and listings: Avito, 2GIS, Yandex Business',
        'Rolling out AI-driven process automation',
      ],
      subproject: {
        title: 'VK Ads',
        body:
          'The first campaign had a low CTR and zero messages. I found the reason (the phone number on the creative pulled people out of the chat), relaunched two test campaigns with real installation photos, and identified the most responsive audience – 45–64 years old.',
        outcome: 'Request tracking by source is now in place',
      },
      result: [
        'A working business',
        'CRM and a request bot',
        'Plan to grow non-Avito orders to 35–40%',
      ],
    },
    {
      id: 'academic',
      company: 'Academic support and authored texts – private practice',
      duration: '',
      dates: '2016 – now',
      role: 'Author · Consultant',
      description: 'I help students with theses and coursework and write articles.',
      bullets: [
        'Consulting on structure, methodology and formatting of theses and coursework',
        'Editing works and preparing students for defense',
        'Research and expert articles',
      ],
      result: ['More than 10 years of practice'],
    },
    {
      id: 'sport',
      company: 'Krasnoarmeysky Sports Complex (municipal)',
      duration: '',
      dates: 'December 2022 – now',
      role: 'Senior specialist',
      bullets: [
        'Organising and running sports events',
        'On maternity leave since 2024',
      ],
    },
    {
      id: 'decret',
      company: 'Maternity leave: what I was doing',
      duration: '',
      dates: '2024 – 2026',
      role: 'Transitioning into AI development',
      bullets: [
        'Launched the Oknis company',
        'Took a programming course, studied Claude API, RAG and AI agents',
        'Started my own projects',
      ],
    },
    {
      id: 'school',
      company: 'Krasnoarmeyskoye village secondary school',
      duration: '',
      dates: 'November 2021 – May 2024',
      role: 'Programming teacher',
      bullets: [
        'Classes, lectures and remote sessions on programming',
        'Individual study plans and development plans for pupils',
        'Teaching materials and study guides',
        'Research work and projects with pupils',
        'Working with parents, one-to-one consultations',
      ],
    },
  ],
  resultLabel: 'Outcome',
  parallelTitle: 'Alongside my studies',
  parallelItems: [
    'Alfa i Omega LLC, client relations manager, April – June 2023: client database, business correspondence, product presentations',
    'Finansoved+ LLC, assistant accountant, November 2021 – March 2023: primary documents, bookkeeping in 1C:Enterprise 8',
  ],
  education: {
    title: 'Education',
    uniCardTitle: '🎓',
    uniName:
      'Samara National Research University named after academician S. P. Korolev',
    uniInstitute: 'Institute of Aerospace Engineering',
    degrees: [
      {
        title: 'Master’s: Metallurgy, specialisation «Systems engineering»',
        years: '2023 – 2025',
      },
      {
        title: 'Bachelor’s: Applied mechanics, degree with honours',
        years: '2019 – 2023',
      },
    ],
    extraTitle: 'Additional education',
    extraItems: [
      { title: '«Programmer from scratch to a job», S. Dmitrievsky (in progress)' },
      { title: 'Self-study: Claude API, RAG, AI agents' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Russian', level: 'Native' },
      { name: 'Armenian', level: 'Conversational' },
      { name: 'English', level: 'A1 (started learning)' },
    ],
    aboutMeTitle: 'A bit about me',
    aboutMeText: '25, married, mom, Samara',
    interestsTitle: 'Interests',
    interestsCategory: 'Sport',
    interests: [
      'Volleyball',
      'Basketball',
      'Football',
      'Table tennis',
      'Skiing',
      'Swimming',
    ],
  },
  footer: {
    telegram: 'Telegram',
    email: 'Email',
    github: 'GitHub',
    vk: 'VK',
  },
  langSwitch: { ru: 'RU', en: 'EN' },
};

// ---------- Экспорты ---------- //

export const contactLinks = links;

export const content: Record<Lang, SiteContent> = { ru, en };

export const otherLang = (l: Lang): Lang => (l === 'ru' ? 'en' : 'ru');

// Пути роутов
export const langPath = (l: Lang): string => (l === 'ru' ? '/' : '/en/');
