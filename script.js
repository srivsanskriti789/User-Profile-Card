const followBtn = document.getElementById("followBtn");

const messageBtn = document.getElementById("messageBtn");


let following = false;


followBtn.addEventListener("click", function () {

    if (following === false) {

        followBtn.textContent = "Following";

        followBtn.style.background =
            "#22c55e";

        following = true;

    } else {

        followBtn.textContent = "Follow";

        followBtn.style.background =
            "linear-gradient(135deg, #667eea, #764ba2)";

        following = false;

    }

});


messageBtn.addEventListener("click", function () {

    alert("Message feature coming soon! 💬");

});