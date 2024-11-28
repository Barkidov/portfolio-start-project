import projFirst from "../assets/images/proj-1.webp";
import projSecond from "../assets/images/proj-2.webp";
import { AppState } from "../types/appState";

export const initialState: AppState = {
  menubar: [
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: "Мои скиллы",
      href: "#skills",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: "Мои проекты",
      href: "#works",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: "Контакты",
      href: "#contacts",
    },
  ],
  skills: [
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      iconId: "html",
      title: "HTML5",
      text: "Создаю семантически правильную структуру страниц, что улучшает SEO и доступность. Уверенно использую современные теги HTML5 и атрибуты для создания понятного и чистого кода.",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      iconId: "css",
      title: "CSS3",
      text: "Разрабатываю адаптивные и отзывчивые дизайны с помощью Flexbox и Grid Layout. Владею CSS-анимациями и трансформациями для улучшенияпользовательского опыта, а также применяю методологию BEM для организации стилей.",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      iconId: "js",
      title: "JavaScript",
      text: "Владею современным JavaScript (ES6+), использую асинхронные запросы (fetch, async/await), работаю с API и умею реализовывать сложную логику на клиенте. Пишу чистый и поддерживаемый код, следуя принципам DRY и KISS.",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,

      iconId: "react",
      title: "React",
      text: "Разрабатываю динамичные и интерактивные пользовательские интерфейсы с помощью React, применяя функциональные компоненты, хуки и управление состоянием (useState, useEffect, useContext). Оптимизирую рендеринг для повышения производительности.",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      iconId: "typeScript",
      title: "TypeScript",
      text: "Использую TypeScript для написания надежного и типизированного кода, что позволяет уменьшить количество ошибок на этапе разработки. Владею продвинутыми возможностями типизации, такими как интерфейсы, дженерики и union types, что помогает создавать более масштабируемые и понятные приложения.",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      iconId: "redux",
      title: "Redux",
      text: "Применяю Redux для управления состоянием в масштабных приложениях, обеспечивая предсказуемость и согласованность данных. Владею инструментами, такими как Redux Toolkit и Redux Thunk, для упрощения разработки и оптимизации производительности. Умею работать с Redux DevTools для отладки.",
    },
  ],
  works: [
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: "Мой проект 1",
      src: projFirst,
      text: "CSS-градиенты представлены типом данных , специальным типом , состоящим из последовательного перехода между двумя и более цветами.",
      href: "#",
      type: "react",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: "Мой проект 2",
      src: projSecond,
      text: "CSS-градиенты представлены типом данных , специальным типом , состоящим из последовательного перехода между двумя и более цветами.",
      href: "#",
      type: "react",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: "Мой проект 3",
      src: projFirst,
      text: "CSS-градиенты представлены типом данных , специальным типом , состоящим из последовательного перехода между двумя и более цветами.",
      href: "#",
      type: "spa",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      title: "Мой проект 4",
      src: projSecond,
      text: "CSS-градиенты представлены типом данных , специальным типом , состоящим из последовательного перехода между двумя и более цветами.",
      href: "#",
      type: "landing",
    },
  ],
  socials: [
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      href: "https://github.com/Barkidov",
      iconId: "github",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      href: "https://web.telegram.org",
      iconId: "telegram",
    },
    {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      href: "https://web.whatsapp.com",
      iconId: "whatsapp",
    },
  ],
  tabsItems: [
    {
      title: "All",
      type: "all",
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    },
    {
      title: "React",
      type: "react",
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    },
    {
      title: "Landing page",
      type: "landing",
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    },
    {
      title: "SPA",
      type: "spa",
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    },
  ],
  reviews: [
    {
      name: 'Иван Иванов',
      review: 'Достоинства: оригинальный дизайн; безупречное обслуживание; авторская кухня; эксклюзивные блюда; спокойное место; чистота и порядок; удобное расположение.'
    },
    {
      name: 'Петр Петров',
      review: 'Достоинства: оригинальный дизайн; безупречное обслуживание; авторская кухня; эксклюзивные блюда; спокойное место.'
    },
    {
      name: 'Семен Семенов',
      review: 'Оригинальный дизайн; безупречное обслуживание.'
    }
  ]
};
