window.onload = function () {

    let intro = document.getElementById("introScreen");
    let main = document.getElementById("mainScreen");
    let result = document.getElementById("resultScreen");

    let startBtn = document.getElementById("startLove");
    let music = document.getElementById("bgMusic");

    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");
    let caption = document.getElementById("caption");

    let captions = [
        "Nice try, aur bol ke dekho mujhe NO",
        "Abhi bhi trying to click NO? Aw",
        "Sharam nahi aa rahi ab bhi?",
        "This NO button is just for decoration 😂",
	"Say YES!!",
	"Please😢 bol de na YES",
	"Ab mujhe aur gussa aata ja raha hai😡😡",
	"Kar le YES ko jitna bada karna hai",
	"Like this YES, my love also just keeps increasing for you every day..."
    ];

    let index = 0;
    let yesSize = 1;

    // Start Love
    startBtn.onclick = function () {

        music.play();

        intro.classList.add("hidden");
        main.classList.remove("hidden");
    };

    // Move NO button


let lastX = window.innerWidth / 2;
let lastY = window.innerHeight / 2;

noBtn.onmouseover = function () {

    let x, y;
    let minDistance = 200; // distance from last position

    do {
        let marginTop = 120;        // avoid heading
let marginBottom = 120;     // avoid caption
let marginSide = 50;

x = Math.random() * (window.innerWidth - 150 - marginSide);
y = Math.random() * (window.innerHeight - marginTop - marginBottom) + marginTop;


    } while (Math.hypot(x - lastX, y - lastY) < minDistance);

    lastX = x;
    lastY = y;

    document.body.appendChild(noBtn);
noBtn.style.position = "absolute";

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    caption.textContent = captions[index];
    index = (index + 1) % captions.length;

    yesSize += 0.2;
    yesBtn.style.transform = "scale(" + yesSize + ")";
};


    // YES clicked
yesBtn.onclick = function () {

    noBtn.style.display = "none";   // hides NO button

    main.classList.add("hidden");
    result.classList.remove("hidden");
};
    

};
