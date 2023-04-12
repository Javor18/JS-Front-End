window.addEventListener('load', solve);

function solve() {

    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');

    let addSongBtn = document.getElementById('add-btn');
    addSongBtn.addEventListener('click', addSong);

    function addSong(e) {

        if (genre.value !== '' || name.value !== '' || author.value !== '' || date.value !== '') {
            e.preventDefault();

            let allHitsContainer = document.querySelector('.all-hits-container');
            let hitsInfo = document.createElement('div');

            hitsInfo.classList.add('hits-info');
            allHitsContainer.appendChild(hitsInfo);

            let songImage = document.createElement('img');
            songImage.classList.add('song-image');
            songImage.src = './static/img/img.png';
            hitsInfo.appendChild(songImage);

            let genreH2 = document.createElement('h2');
            genreH2.textContent = genre.value;
            hitsInfo.appendChild(genreH2);

            let nameH2 = document.createElement('h2');
            nameH2.textContent = name.value;
            hitsInfo.appendChild(nameH2);

            let authorH2 = document.createElement('h2');
            authorH2.textContent = author.value;
            hitsInfo.appendChild(authorH2);

            let dateH3 = document.createElement('h3');
            dateH3.textContent = date.value;
            hitsInfo.appendChild(dateH3);

            let saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';
            hitsInfo.appendChild(saveBtn);

            saveBtn.addEventListener('click', saveSong);

            let likeBtn = document.createElement('button');
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';
            hitsInfo.appendChild(likeBtn);

            likeBtn.addEventListener('click', likeSong);

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';
            hitsInfo.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', deleteSong);

            genre.value = '';
            name.value = '';
            author.value = '';
            date.value = '';
        }else {
            e.preventDefault();
        }
    }


    function likeSong(e) {
        let currentSong = e.target.parentElement;
        let likeBtn = currentSong.getElementsByClassName('like-btn');
        let totalLikes = document.getElementById('total-likes');
        let totalLikesP = totalLikes.getElementsByTagName('p');
        let totalLikesValue = totalLikesP[0].textContent.split(' ')[2];
        totalLikesValue++;
        totalLikesP[0].textContent = `Total likes: ${totalLikesValue}`;
        likeBtn[0].disabled = true;
        likeBtn[0].style.backgroundColor = 'gray';
    }

    function saveSong(e) {
        let currentSong = e.target.parentElement;
        let savedContainer = document.querySelector('.saved-container');
        savedContainer.appendChild(currentSong);
        e.target.remove();
        let likeBtn = currentSong.getElementsByClassName('like-btn');
        likeBtn[0].remove();

    }

    function deleteSong(e) {
        let currentSong = e.target.parentElement;
        currentSong.remove();
    }



    //TODO
}