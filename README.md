# "Window" webpage

RU:
Frontend разработка проекта сайта Window.
В проекте используется: библиотека JQUERY для реализации slick слайдера, animate.css

В этом проекте на JS реализованы:
 - модальные окна
 - форма отправки данных
 - табы для просмотра контента
 - таймер
 - показ изображений (увеличение изображения при клике на него)
 - форма-калькулятор 

Проект построен на модульной структуре в императивном стиле. Для сборки модулей используется Webpack. В качестве планировщика задач используется gulp.
Работа таймера реализована до оперделенной даты по истечении которой в секции таймера будут показаны 00:00:00:00
Появление модального окна реализовано 2 способами: после 60 сек и при клике на соответствующие кнопки. Разные кнопки вызывают разные модальные окна.
Закрытие модальных окон возможно путем клика на подложку, нажатия клавиши "ESC", клике на "Х".
Данные с формы отправляются посредством AJAX (fetch) без перезагрузки страницы. После отправки идет соответствующее оповещение о статусе отправки POST запроса и отчиска формы.
Добавлена валидация в инпуте номера телефона - возможно ввести только цифры. 
Форма-калькулятор реализована путем последовательного переключения модальных окон с выбором опций заказа. Все выбранные опции заказа добавляются в POST запрос.
Добавление опций реализовано с помощью добавления свойств в объект FormData.
Добавлена валидация инпутов формы-калькулятора.
На странице реализованы табы с добавлением animate.css
Убран баг "прыжка" страницы при открытии и закрытии модальных окон с помощью расчета scroll.

EN:
Frontend development of the Window website project.
The project uses: JQUERY library to implement the slick slider, animate.css

This project uses JS to implement:
 - modal windows
 - data submission form
 - tabs for viewing content
 - timer
 - display of images (enlarge the image when you click on it)
 - calculator form

The project is built on a modular structure in an imperative style. Webpack is used to build modules. Gulp is used as a task scheduler.
The timer operates until a certain date, after which the timer section will show 00:00:00:00
The appearance of the modal window is implemented in 2 ways: after 60 seconds and when you click on the corresponding buttons. Different buttons bring up different modal windows.
Closing modal windows is possible by clicking on the background, pressing the "ESC" key, and clicking on the "X".
Form data is sent via AJAX (fetch) without reloading the page. After sending, there is a corresponding notification about the status of sending the POST request and deleting the form.
Validation has been added to the phone number input - it is possible to enter only numbers.
The calculator form is implemented by sequentially switching modal windows with a selection of order options. All selected order options are added to the POST request.
Adding options is implemented by adding properties to the FormData object.
Added validation of calculator form inputs.
The page implements tabs with the addition of animate.css
The bug of page "jumping" when opening and closing modal windows using scroll calculation has been removed.
