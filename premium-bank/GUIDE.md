# Udacha Capital - Руководство по проекту

## Описание

Премиальный сайт-визитка для бутикового инвестиционного банка **Udacha Capital**. Дизайн вдохновлён сайтами Goldman Sachs, Morgan Stanley и Lazard.

---

## Технологический стек

| Технология | Назначение |
|------------|------------|
| **React 19** | Фреймворк |
| **Vite** | Сборщик |
| **Tailwind CSS 4** | Стили |
| **Framer Motion** | Анимации |
| **React Router 7** | Маршрутизация |
| **React Hook Form** | Формы |
| **Lucide React** | Иконки |

---

## Установка и запуск

### Требования
- Node.js 18+ (скачать: https://nodejs.org)
- Git

### Команды (Windows CMD)

```cmd
cd C:\Users\PC\Desktop\Valentin
git clone https://github.com/Gringo999max/valentin.git .
git checkout claude/premium-bank-website-8QnA3
cd premium-bank
npm install
npm run dev
```

Сайт откроется на: **http://localhost:5173**

### Команды для сборки

```cmd
npm run build      # Собрать для продакшена
npm run preview    # Предпросмотр сборки
```

Готовые файлы появятся в папке `dist/`

---

## Структура проекта

```
premium-bank/
├── public/
│   └── favicon.svg          # Иконка сайта
├── src/
│   ├── components/
│   │   ├── layout/          # Шапка, подвал, обёртка
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── ui/              # UI компоненты
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── StatCard.jsx
│   │   └── sections/        # Секции страниц
│   │       ├── Hero.jsx
│   │       ├── ServiceCard.jsx
│   │       ├── TeamCard.jsx
│   │       ├── TransactionCard.jsx
│   │       └── ArticleCard.jsx
│   ├── pages/               # Страницы сайта
│   │   ├── Home.jsx         # Главная
│   │   ├── About.jsx        # О компании
│   │   ├── Services.jsx     # Услуги
│   │   ├── TrackRecord.jsx  # Сделки
│   │   ├── Team.jsx         # Команда
│   │   ├── Insights.jsx     # Аналитика/Блог
│   │   └── Contact.jsx      # Контакты
│   ├── data/                # ⭐ ДАННЫЕ (редактировать здесь)
│   │   ├── company.js       # Информация о компании
│   │   ├── services.js      # Услуги
│   │   ├── team.js          # Команда
│   │   ├── transactions.js  # Сделки
│   │   └── articles.js      # Статьи
│   ├── App.jsx              # Роутинг
│   ├── main.jsx             # Точка входа
│   └── index.css            # Стили + Tailwind
└── index.html               # SEO мета-теги
```

---

## Как редактировать контент

Все данные находятся в папке `src/data/`. Просто открой нужный файл и измени текст.

### 1. Информация о компании (`src/data/company.js`)

```javascript
export const company = {
  name: "Udacha Capital",           // Название компании
  tagline: "Advisory Excellence...", // Слоган

  stats: [                           // Статистика на главной
    { value: "$2.5B+", label: "Completed Transactions" },
    // ...
  ],

  contact: {                         // Контакты
    address: { ... },
    phone: "+7 (495) 123-4567",
    email: "info@udachacapital.com",
  },

  founder: {                         // Цитата основателя
    name: "Alexander Volkov",
    quote: "We founded Udacha Capital..."
  },
  // ...
};
```

### 2. Команда (`src/data/team.js`)

```javascript
export const teamMembers = [
  {
    id: 1,
    name: "Alexander Volkov",
    title: "Managing Partner",
    bio: "Over 20 years of investment banking experience...",
    education: [
      "MBA, INSEAD",
      "MSc Economics, London School of Economics"
    ],
    previousExperience: ["Goldman Sachs", "Morgan Stanley"],
    linkedin: "#"
  },
  // Добавить ещё людей...
];
```

### 3. Сделки (`src/data/transactions.js`)

```javascript
export const transactions = [
  {
    id: 1,
    type: "M&A",                    // M&A / Capital Raising / Restructuring
    description: "Advised a leading SaaS provider on its sale...",
    amount: "$180M",
    year: 2024,
    industry: "Technology",         // Technology / Healthcare / Industrial / Consumer / Energy
    role: "Sell-side Advisor"
  },
  // Добавить ещё сделки...
];
```

### 4. Услуги (`src/data/services.js`)

```javascript
export const servicesOverview = [
  {
    id: "ma",
    title: "M&A Advisory",
    shortDescription: "Strategic guidance for transformative transactions",
    icon: Handshake,
    link: "/services#ma"
  },
  // ...
];
```

### 5. Статьи/Блог (`src/data/articles.js`)

```javascript
export const articles = [
  {
    id: 1,
    title: "M&A Market Outlook 2024: Key Trends to Watch",
    category: "Market Commentary",  // Market Commentary / Deal Insights / Industry Focus
    date: "December 15, 2024",
    preview: "As we approach 2025...",
    slug: "ma-market-outlook-2024",
    readTime: "8 min read",
    featured: true                  // Показывать в featured секции
  },
  // ...
];
```

---

## Цветовая палитра

| Цвет | HEX | CSS переменная | Использование |
|------|-----|----------------|---------------|
| Navy (основной) | `#0a1628` | `bg-navy` | Фоны, заголовки |
| Navy Light | `#132038` | `bg-navy-light` | Hover состояния |
| Gold (акцент) | `#c9a962` | `bg-gold`, `text-gold` | Акценты, CTA |
| Cream | `#f8f6f3` | `bg-cream` | Светлые секции |
| White | `#ffffff` | `bg-white` | Карточки |

### Примеры использования в коде:

```jsx
<div className="bg-navy text-white">         // Тёмный фон
<div className="bg-gold text-navy">          // Золотая кнопка
<span className="text-gold">                 // Золотой текст
<div className="bg-cream">                   // Светлая секция
<div className="border-gold">                // Золотая рамка
```

---

## Шрифты

- **Заголовки**: Cormorant Garamond (serif) — `font-serif`
- **Текст**: Inter (sans-serif) — `font-sans`

```jsx
<h1 className="font-serif text-4xl">Заголовок</h1>
<p className="font-sans text-base">Обычный текст</p>
```

---

## Как добавить новую страницу

1. Создай файл в `src/pages/NewPage.jsx`:

```jsx
import { PageHero } from '../components/sections';
import { Container, SectionTitle } from '../components/ui';

export default function NewPage() {
  return (
    <>
      <PageHero
        title="Заголовок страницы"
        subtitle="Подзаголовок"
      />

      <section className="py-24 bg-white">
        <Container>
          <SectionTitle title="Секция" />
          {/* Контент */}
        </Container>
      </section>
    </>
  );
}
```

2. Добавь экспорт в `src/pages/index.js`:

```javascript
export { default as NewPage } from './NewPage';
```

3. Добавь роут в `src/App.jsx`:

```jsx
import { NewPage } from './pages';

// В Routes:
<Route path="/new-page" element={<NewPage />} />
```

4. Добавь в навигацию `src/data/company.js`:

```javascript
export const navigation = [
  // ...
  { name: "New Page", href: "/new-page" },
];
```

---

## Как изменить фоновые изображения

Фоновые изображения задаются в компонентах Hero. Найди нужную страницу и измени URL:

```jsx
// src/pages/Home.jsx
<Hero
  backgroundImage="https://images.unsplash.com/photo-XXXXX"  // Замени URL
/>

// src/pages/About.jsx
<PageHero
  backgroundImage="https://images.unsplash.com/photo-XXXXX"  // Замени URL
/>
```

### Рекомендуемые источники изображений:
- https://unsplash.com (бесплатно)
- Поиск: "financial district", "skyscrapers", "office interior", "cityscape"

---

## Деплой на Vercel (рекомендуется)

### Шаг 1: Подготовка
1. Залей код на GitHub (если ещё не там)
2. Зарегистрируйся на https://vercel.com

### Шаг 2: Деплой
1. Нажми "Add New Project"
2. Импортируй репозиторий с GitHub
3. Vercel автоматически определит Vite
4. Нажми "Deploy"

### Шаг 3: Свой домен
1. В Vercel: Settings → Domains
2. Добавь свой домен (например, `udachacapital.ru`)
3. Vercel покажет DNS записи
4. На REG.RU добавь эти записи в настройках домена

---

## Покупка домена на REG.RU

1. Зайди на https://reg.ru
2. В поиске введи `udachacapital`
3. Выбери зону `.ru` (~200 руб/год) или `.com` (~1000 руб/год)
4. Оформи заказ

### Рекомендуемые домены:
- `udachacapital.ru` ✓
- `udachacapital.com` ✓
- `udacha-capital.ru`

---

## SEO настройки

Мета-теги находятся в `index.html`:

```html
<title>Udacha Capital | Boutique Investment Bank</title>
<meta name="description" content="Independent advisory services..." />
<meta property="og:title" content="..." />
```

---

## Полезные команды

```cmd
npm run dev       # Запуск для разработки
npm run build     # Сборка для продакшена
npm run preview   # Предпросмотр сборки
npm run lint      # Проверка кода
```

---

## Контакты и поддержка

Если возникли вопросы по коду или нужны доработки — обращайся.

---

## Чеклист перед запуском

- [ ] Заменить название компании в `src/data/company.js`
- [ ] Обновить контактные данные (адрес, телефон, email)
- [ ] Добавить реальных членов команды в `src/data/team.js`
- [ ] Добавить реальные сделки в `src/data/transactions.js`
- [ ] Заменить placeholder-статьи в `src/data/articles.js`
- [ ] Обновить ссылки на соцсети
- [ ] Купить домен
- [ ] Задеплоить на Vercel
- [ ] Подключить домен к Vercel
- [ ] Проверить работу формы обратной связи

---

*Документация создана: Январь 2025*
