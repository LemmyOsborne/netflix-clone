<h1 align="center">
  Клон Netflix
</h1>

<p><font size="3">
  Этот пет-проект представляет собой клон вебсайта Netflix, созданный с помощью <strong><em>React</em></strong> во фронтенде и <strong><em>Firebase</em></strong> в бэкенде. Это не асболютная копия и соответственно она не имеет всех возможностей оригинала. Это приложение содержит домашнюю страницу, страницы логина и регистрации, страницу с фильмами/сериалами и видео плеер. 
  <br><br> 
  <strong><em>Посмотреть на задеплоенное приложение можно здесь:</em></strong> https://netflix-clone-eec94.web.app/
</p>
  
  ## Содержание

- [Гайд по проекту](#project-walk-through)
  - [Домашняя страница](#home-page)
  - [Страница логина](#sign-in-page)
  - [Страница регистрации](#sign-up-page)
  - [Страница контента](#browse-page)
- [Демо](#live-demo)
- [Технологии](#technology-used)
- [Автор](#autor)
  
  # Гайд по проекту

 # Домашняя страница

<div align="center"><a name="menu"></a>

![Preview](/public/images/readme/preview-1.gif)
</div>

Домашняя страница состоит из 5 основных секций:

***1) Header, включающий в себя:***
- Лого: 
По клику оно перенаправляет пользователя на домашнюю страницу.

- Кнопку логина: 
 По клику перенаправляет пользователя на страницу логина.

- Доп информация:
Содержит в себе дополнительную информацию.

***2) CtaForm:***
Это call-to-action форма, состоящая из инпута и кнопки, по клику она перенаправляет пользователя на страницу регистрации. 

***3) Jumbotron:***
Эта секция содержит информацию и картинки, показывающие преимущества Netflix.

***4) Accordion:***
Это секция содержит FAQs в форме аккордиона, по клику на заголовок аккордиона снизу повляется ответ на вопрос в этом заголовке, при очередном клике ответ исчезает.

***5) Footer:***
Содержит полезные для пользователей ссылки. Ссылки не рабочие.

# Страница логина
 
 <div align="center"><a name="menu"></a>

![Preview](/public/images/readme/preview-2.gif)
</div>

Страница логина содержит 3 основные секции:

***1) Header, включающий в себя:***
- Лого: 
По клику оно перенаправляет пользователя на домашнюю страницу.

***2) Sign-in form, которая включает:***
- Поле ввода для емейла.

- Поле ввода для пароля.

- Кнопка логина: у нее есть валидация: если какое-либо поле в форме пусто, кнопка будет отключена. Данные из инпутов отправляются в базу данных firebase для аутентификации. Также в форме присутствует обработка ошибок.

- Кнопка логина с помощью facebook: залогинивает пользователя через аккаунт facebook. 

- Ссылка на страницу регистрации: она перенаправляет пользователя на страницу регистрации.

***3) Footer:***
Содержит полезные для пользователей ссылки. Ссылки не рабочие.

# Страница регистрации
 
<div align="center"><a name="menu"></a>

![Preview](/public/images/readme/preview-3.gif)
</div>

Страница регистрации состоит из 3 основных секций:

***1) Header, который включает:***
- Лого:
При клике перенаправляет пользователя на домашнюю страницу.

- Кнопку логина: 
 По клику перенаправляет пользователя на страницу логина.

***2) Регистрационная форма, которая включает:***
- Поле ввода имени.

- Поле ввода адреса электронной почты.

- Поле ввода пароля.

- Кнопка регистрации: у нее есть валидация: если какое-либо поле в форме пусто, кнопка будет отключена. Данные из инпутов отправляются в базу данных firebase для аутентификации. Также в форме присутствует обрабока ошибок.

- Кнопка логина с помощью facebook: залогинивает пользователя через аккаунт facebook. 

- Ссылка на страницу логина: она перенаправляет пользователя на страницу логина.


***3) Footer:***
Содержит полезные для пользователей ссылки. Ссылки не рабочие.

# Страница контента

<div align="center"><a name="menu"></a>

 ***Клик по карточке***
  
![Preview](/public/images/readme/preview-4.gif)
  
  ---
  
  ***Выбор категории***
  
![Preview](/public/images/readme/preview-5.gif)
  
  ---
  
  
  ***Поиск***
  
![Preview](/public/images/readme/preview-6.gif)
  
  ---
  
  
  ***Проигрывание видео***
  
![Preview](/public/images/readme/preview-7.gif)
  
  ---
</div>


Страница контента состоит из 5 основных секций:

***1) Header, который включает:***
- Лого:
Перенаправляет пользователя на домашнюю страницу всякий раз при нажатии.

- Ссылки на категории:
В зависимости от того какая ссылка активна будет показан разный контент на странице, например, если пользователь нажмет на ссылку фильмов, она будет активной, и на странице  будут отображаться только фильмы. И если пользователь нажмет на ссылку сериалов, она станет активной, и на странице просмотра будут отображаться только сериалы.

- Кнопка поиска: 
При нажанатии плавно появляется поле ввода, при вводе названия жанра или фильма или описания фильма, на странице будет выводиться соответствующий слайд.

- Всплывающее меню:
Предстваляет собой иконку залогининого пользователя. При наведении появляется небольшое меню с кнопкой логаута, при нажатии на которую пользователь вылогиниввается и переходит на домашнюю страницу.

- Доп информация:
Содержит название и описание рекомендуемого фильма/сериала.

- Кнопка воспроизведения:
При нажатии показывает видеоплеер.

***2) Слайды фильмов:***
Это слайды, показывающие фильмы в зависимости от их жанра. Жанры и вся информация о фильмах были получены из базы данных Firebase.

***3) Карточка фильма:***
Это изображение, представляющее фильм, если навести на него курсор, оно становится больше и показывает мета информацию о фильме.

***4) Доп инфа о фильме:***
Это еще одна секция, которая появляется под слайдом фильмов, если нажать на любой фильма. Она содержит дополнительную информацию о фильме, такую ​​как название, описание, специальный фон, представляющий фильм, и кнопку воспроизведения. Когда пользователь нажимает кнопку воспроизведения, показывается видеоплеер. При нажатии на значок закрытия в правом верхнем углу, секция исчезает.

***5) Видеоплеер:***
Это видеоплеер, который появляется в середине экрана и автоматически запускает видео, когда пользователь нажимает любую кнопку воспроизведения.
Когда появляется видеоплеер, все остальное пространство темнеет. Видеопроигрыватель должен показывать разные видео для разных фильмов, но для целей данного проекта он показывает только одно видео в качестве образца для всех фильмов.

Видеоплеер можно закрыть в любое время, кликнув в любом другом месте экрана.

***6) Footer:***
Содержит полезные для пользователей ссылки. Ссылки не рабочие.


# Демо

***Посмотреть на задеплоенное приложение можно здесь:*** https://netflix-clone-eec94.web.app/

# Технологии

Я создал этот проект, используя следующие технологии и паттерны:
- React.
- Typescript.
- Context API.
- Compound Components.
- Styled Components.
- Firebase.
- Jest.
- React Testing Library.
- React Router.
- React Hooks.
- Fuse.js.

# Автор

👤 **Родион Боженко**
- HeadHunter: https://krasnodar.hh.ru/resume/02a51d40ff09a7fb820039ed1f304e67647772
- Email: bozhenko.rodion@mail.ru
