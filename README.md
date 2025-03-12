# Задание 1

Тут находится проект который мы с вами рассматривали на паре.

Необходимо сделать следующее:

1. Создать новую ветку, можете назвать ее своим именем.
2. Убрать лишние файлы и лишний код.
3. Создать отдельный компонент, карточку, в которой вы отобразите данные приходящие с сервера. Стилизовать карточку можете на свое усмотрение, главное чтоб она соотвествовала хоть каким то правилам эстетики. Для стилизации используйте css модули.
4. Необходимо создать еще одну ветку, которую нужно назвать `name-tutorial` где вместо name будет ваше имя.
5. На этой ветке вы должны выполнить туториал по реакту.
6. Необходимо прочесть теорию в разделе теория.

## Ссылки на ресурсы

react tutorial: https://react.dev/learn/tutorial-tic-tac-toe
css modules(до 12 минуты): https://www.youtube.com/watch?v=oYnyQ47BUSo&t=107s
шпаргалка по git: https://abatickaya.medium.com/%D1%88%D0%BF%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-%D0%BF%D0%BE-git-55eeea487676

# Задание 2

Новые задания:

1. Перед тем как приступить ко второму заданию, проверьте выполнили ли вы все пункты из задания 1.
2. Создать правильную структуру проекта. 
3. Реализовать переключение тем 🌙☀ используя контекст. (нужно будет создать светлую и темную тему)
4. Переиспользуя компонент карточки, отобразите список категорий (нужно посмотреть какой запрос отображает категории в документации api которую я закреплю в ресурсах)
5. Можете использовать роутинг и создать отдельную страницу для категорий, либо не париться и отобразить два списка на одной странице.
6. Для стилей использовать scss, создать хотя бы один миксин для переиспользования стилей.
7. Почитать теорию о хуках useEffect, useState, useContext и useRef.
8. Доп задание на ваше усмотрение. Создать компонент Button, который имеет пропсы:
view = primary, outlined, link;
size = m, l, xl;
disabled = boolean;
loading = boolean

## Ресурсы
1. Пример реализации тем: https://github.com/TakhirovBizhan/e-commerse-kts/tree/main/src/hooks/useThemes
2. Пример реализации кнопки: https://github.com/qalqaDevSpace/qalqa-ui/tree/main/src/components-lib/components/Button
3. context: https://react.dev/learn/scaling-up-with-reducer-and-context


# Теория

1. Fetch: https://doka.guide/js/fetch
2. Асинхронность в JavaScript: https://doka.guide/js/async-in-js/
3. typescript: https://doka.guide/tools/static-types/
4. Что такое API: https://doka.guide/tools/api/
5. ООП: https://doka.guide/tools/oop/
6. Реактивность: https://doka.guide/tools/reactivity/

# Установка и запуск

1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/TakhirovBizhan/Kittens-lessons.git
   ```
2. Перейдите в папку проекта:
   ```sh
   cd Kittens-lessons
   ```
3. Установите зависимости:
   ```sh
   npm install
   ```
4. Запустите проект:
   ```sh
   npm run dev
   ```

## API и запросы

основной запрос: https://api.escuelajs.co/api/v1/products

Mock api: https://fakeapi.platzi.com/
