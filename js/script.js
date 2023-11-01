'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('.add'); 
    const addInput = addForm.querySelector('.adding__input');
    const addCheck = addForm.querySelector('input[type=checkbox]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = addCheck.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        e.target.reset();
    });

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

    function deleteAdv(arr) {
        arr.forEach(item => {
            item.remove();
        });
    }

    function makeChanges() {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url(./img/bg.jpg)';
    }

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1}. ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            })
        });
    }

    function sortArr(arr) {
        arr.sort();
    }
})