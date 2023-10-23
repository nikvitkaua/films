/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// #1
document.querySelector('.promo__adv').remove();

// #2
document.querySelector('.promo__genre').innerHTML = "драма";

// #3
document.querySelector('.promo__bg').style.background = "url(./img/bg.jpg) 0% 0% / cover no-repeat";

// #4
const moviesArr = movieDB.movies.sort();
const filmList = document.querySelector('.promo__interactive-list');
filmList.innerHTML = '';

for (let i = 0; i < moviesArr.length; i++) {
    let listItem = document.createElement('li');
    listItem.classList.add('promo__interactive-item');

    listItem.innerHTML = `
    ${i + 1}. ${moviesArr[i]}
    <div class="delete"></div>
    `

    filmList.append(listItem);
}