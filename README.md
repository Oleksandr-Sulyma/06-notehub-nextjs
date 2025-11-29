# 📝 NoteHub (Next.js версія)

Застосунок для створення, перегляду, редагування та видалення нотаток.  
Побудовано на **Next.js 15**, з використанням **App Router**, **React Query**, **TypeScript** та власного API.

---

## 🚀 Демо

🔗 **Live Demo:** https://06-notehub-nextjs-pt6tdtv61-3280673s-projects.vercel.app  
🔗 **GitHub Репозиторій:** https://github.com/Oleksandr-Sulyma/06-notehub-nextjs

---

## 🧩 Технології

- ⚛️ **Next.js 15 (App Router)**
- 🧠 **TypeScript**
- 🗄️ **@tanstack/react-query**
- 🛠️ **Zustand** (для глобального стану теми)
- 🎨 **CSS Modules**
- 🔥 **Custom API routes**
- 📦 **ESLint + Prettier**
- ☁️ **Vercel Deployment**

---

## 📂 Структура Проєкту

```bash
app/
├── error.tsx
├── global.css
├── layout.tsx
├── loading.tsx
├── pagpageerror.tsx
├── notes/
│   ├── Notes.client.tsx
│   ├── NotesPage.modules.css
│   ├── page.tsx
│   └── [id]/
│       ├── page.tsx
│       └── NoteDetails.module.css
├── components/
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── NoteItem/
│   │   ├── NoteItem.tsx
│   │   └── NoteItem.module.css
│   └── Loader/
│       ├── Loader.tsx
│       └── Loader.module.css
│       ....
├── hooks/
│   ├── useModalControl.tsx
├── lib/
│   └── api.ts
├── types/
│   └── global.d.ts
│   └── note.ts
public/
└── favicon.ico
