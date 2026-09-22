# Личный сайт-резюме

Одностраничный сайт-резюме на Next.js (App Router) + TypeScript + Tailwind CSS.
Статический экспорт, две локали (`/` – RU, `/en/` – EN), тёмная тема.

## Что где лежит

- `src/content.ts` – **все тексты** сайта. Правь только этот файл.
- `src/components/` – секции и UI-примитивы.
- `app/(ru)/page.tsx`, `app/(en)/en/page.tsx` – страницы двух локалей.
- `tailwind.config.ts` – цвета, шрифты, дизайн-токены.
- `public/photo.jpg` – твоё фото (сейчас там плейсхолдер, замени файлом с тем же именем).

## Локальный запуск

Нужен Node.js 18.17+ (лучше 20 или 22).

```bash
npm install
npm run dev
```

Открой http://localhost:3000

## Сборка (статический экспорт)

```bash
npm run build
```

Результат – папка `out/`. Её можно залить на любой статический хостинг.

## Быстрый деплой на Vercel (для новичка)

Vercel сам развернёт сайт из твоего GitHub-репозитория, бесплатно.

1. **Загрузи проект на GitHub.**
   Если ещё нет репозитория:
   - Создай пустой репозиторий на github.com (например, `susanna-site`).
   - В терминале, из папки проекта:
     ```bash
     git init
     git add .
     git commit -m "первый коммит"
     git branch -M main
     git remote add origin https://github.com/<твой-логин>/susanna-site.git
     git push -u origin main
     ```

2. **Зарегистрируйся на vercel.com** через GitHub (кнопка «Continue with GitHub»).

3. **Добавь проект.**
   - На Dashboard → **Add New… → Project**.
   - В списке репозиториев выбери свой и нажми **Import**.
   - Framework Preset должен определиться как **Next.js** автоматически.
   - **Environment Variables** (необязательно, но полезно для корректных OG-ссылок):
     ключ `NEXT_PUBLIC_SITE_URL`, значение – адрес твоего сайта, например `https://susanna.vercel.app`.
   - Нажми **Deploy**. Через минуту сайт будет по адресу вида `https://susanna-xxxx.vercel.app`.

4. **Поменять адрес на человеческий.**
   - На странице проекта → **Settings → Domains**.
   - Можно оставить `<что-угодно>.vercel.app` (бесплатно) или подключить свой домен.

5. **Как обновлять сайт.**
   Правишь код или тексты в `src/content.ts` → `git commit` → `git push`.
   Vercel автоматически пересобирает и выкатывает новую версию.

### Альтернатива: GitHub Pages

Проект уже настроен на статический экспорт (`out/`).

1. В настройках репозитория GitHub → **Pages** → Source: **GitHub Actions**.
2. Добавь workflow-файл `.github/workflows/pages.yml` со сборкой и публикацией папки `out/` через `actions/deploy-pages`.
3. Убедись, что `basePath` в `next.config.mjs` соответствует названию репозитория, если он не корневой (`https://<user>.github.io/<repo>/` требует `basePath: '/<repo>'`).

## Как править контент

Открой `src/content.ts`. В файле два зеркальных блока: `ru` и `en`. Ищи нужную секцию (`hero`, `about`, `projects` и т. д.) и правь строки. Тексты обёрнуты в обычные JS-строки, HTML-разметка внутри не нужна.

## Как заменить фото

Положи свой файл в `public/photo.jpg` (перезапиши существующий).
Формат JPG, соотношение сторон 1:1 – идеально. Лицо в верхней трети кадра
подойдёт (в коде стоит `object-position: center 30%`).

## Как добавить ссылки на проекты

В `src/content.ts` в объектах проектов заполни поля `liveUrl` и/или `repoUrl` –
и на карточке автоматически появятся пилюли **Open ↗** / **GitHub ↗**.
