document.addEventListener("DOMContentLoaded", function() {
    var articleTitle = document.getElementById("articleTitle");
    var articleContent = document.getElementById("articleContent");
    var readingTime = document.getElementById("readingTime");

    var wordsCount = articleContent.textContent.split(/\s+/).length;

    var averageReadingSpeed = 200;
    var estimatedReadingTime = Math.ceil(wordsCount / averageReadingSpeed);

    readingTime.textContent += estimatedReadingTime + " دقائق قراءة";
});

function toggleCommentForm() {
    var commentForm = document.getElementById('threaded-comment-form');
    commentForm.classList.toggle('d-none');
}

document.addEventListener("DOMContentLoaded", function() {
    countWordsOnLoad();
});

function countWordsOnLoad() {
    var articleContent = document.getElementById("articleContent").textContent;
    var words = articleContent.split(/\s+/);
    var wordCount = words.length;
    document.getElementById("count").textContent = wordCount;
}

setTimeout(function() {
    var s = document.createElement("script");
    s.src = "https://www.gstatic.com/firebasejs/4.9.0/firebase.js";
    s.onload = function() {
        firebase.initializeApp({
            apiKey: "AIzaSyD_MvMvRLs8CqwZ2k4c-Seic5ZBr2D1Zw8",
            databaseURL: "https://bloggerku-com.firebaseio.com",
            projectId: "bloggerku-com"
        });
        var buttons = document.getElementsByClassName("lovebutton-bloggerku");
        for (var i = 0; i < buttons.length; i++) {
            (function() {
                var button = buttons[i];
                var postId = button.getAttribute("data-id");
                var likedPosts = JSON.parse(localStorage.getItem("liked")) || [];
                var count = 0;
                firebase.database().ref("like/" + postId + "/total").on("value", function(snapshot) {
                    if (likedPosts.indexOf(postId) !== -1) {
                        button.querySelector(".icon").classList.add("active");
                    }
                    count = snapshot.val() || 0;
                    button.querySelector(".total").innerText = count;
                });
                button.querySelector("a").addEventListener("click", function() {
                    button.querySelector(".icon").classList.toggle("active");
                    if (button.querySelector(".icon").classList.contains("active")) {
                        likedPosts.push(postId);
                        localStorage.setItem("liked", JSON.stringify(likedPosts));
                        count++;
                    } else {
                        likedPosts.remove(postId);
                        localStorage.setItem("liked", JSON.stringify(likedPosts));
                        count--;
                    }
                    firebase.database().ref("like/" + postId + "/total").set(count);
                });
            })();
        }
    };
    document.body.appendChild(s);
}, 3000);

function changeFontSize(delta) {
    var element = document.getElementById('post-body');
    var currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize);
    var newFontSize = currentFontSizeNum + delta;
    element.style.fontSize = newFontSize + "px";
}

document.addEventListener('DOMContentLoaded', function() {
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
        var container = document.createElement('div');
        container.classList.add('responsive-iframe-container');
        iframe.parentNode.insertBefore(container, iframe);
        container.appendChild(iframe);
    });
});
