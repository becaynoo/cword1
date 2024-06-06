document.addEventListener('DOMContentLoaded', function () {
    var labelList = document.getElementById('labelList');
    var toggleLabelsButton = document.getElementById('toggleLabels');

    labelList.style.display = 'none';

    toggleLabelsButton.addEventListener('click', function () {
        if (labelList.style.display === 'none') {
            labelList.style.display = 'block';
            toggleLabelsButton.innerText = 'إخفاء أقسام الموقع';
        } else {
            labelList.style.display = 'none';
            toggleLabelsButton.innerText = 'عرض أقسام الموقع';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    var favoriteIcon = document.getElementById("favorite-icon");
    var favoritesPopup = document.getElementById("favorites-popup");

    function updateFavoriteCount() {
        var favoriteCount = favorites.length;
        favoriteIcon.textContent = "المفضلة " + favoriteCount;
    }

    document.getElementById("add-to-favorites").addEventListener("click", function() {
        var articleTitle = document.querySelector(".entry-title a").textContent.trim();
        var articleUrl = document.querySelector(".entry-title a").getAttribute("href");
        if (!favorites.find(article => article.title === articleTitle)) {
            favorites.push({ title: articleTitle, url: articleUrl });
            localStorage.setItem("favorites", JSON.stringify(favorites));
            favoriteIcon.style.display = "inline";
            updateFavoriteCount();
        }
    });

    favoriteIcon.addEventListener("click", function() {
        favoritesPopup.innerHTML = "";
        favorites.forEach(function(article) {
            var favoriteItem = document.createElement("div");
            favoriteItem.classList.add("favorite-item");

            var link = document.createElement("a");
            link.textContent = article.title;
            link.href = article.url;
            link.classList.add("favorite-link");
            favoriteItem.appendChild(link);

            var removeButton = document.createElement("button");
            removeButton.textContent = "x";
            removeButton.classList.add("remove-button");
            removeButton.addEventListener("click", function() {
                removeFromFavorites(article);
                updateFavoriteCount();
            });
            favoriteItem.appendChild(removeButton);

            favoritesPopup.appendChild(favoriteItem);
        });
        favoritesPopup.style.display = "block";
    });

    function removeFromFavorites(article) {
        favorites = favorites.filter(function(item) {
            return item.title !== article.title;
        });
        localStorage.setItem("favorites", JSON.stringify(favorites));
        favoriteIcon.click();
    }

    window.addEventListener("click", function(event) {
        if (event.target != favoriteIcon && event.target != favoritesPopup) {
            favoritesPopup.style.display = "none";
        }
    });

    updateFavoriteCount();
});
