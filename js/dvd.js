let speed = 10;
let scale = 0.17;
let canvas;
let ctx;
let logoColor;
let paused;

let dvd = {
    x: 5,
    y: 5,
    xspeed: 2,
    yspeed: 2,
    size: 400,
    img: new Image()
};

(function main() {
    canvas = document.getElementById("tv-screen");
    ctx = canvas.getContext("2d");
    paused = false
    newImage()

    //Draw the "tv screen"
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    update();
})();

function pause() {
    if (paused == true) {
        paused = false
        console.warn('unpaused')
        document.getElementById('pause').innerText = "Pause"
        update()
    } else if (paused == false) {
        paused = true
        console.warn('paused')
        document.getElementById('pause').innerText = "Play"
    }
}

function reset() {
    dvd.x = 5;
    dvd.y = 5;
}

function update() {
    setTimeout(() => {
        if (paused == true) {
            return
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight / 1.5
        ctx.fillStyle = '#000';
        //Draw DVD Logo and his background
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.size * scale, dvd.size * scale);
        //Move the logo
        dvd.x += dvd.xspeed;
        dvd.y += dvd.yspeed;
        //Check for collision 
        checkHitBox();
        update();
    }, speed)
}

//Check for border collision
function checkHitBox() {
    if (dvd.x + dvd.size * scale >= canvas.width || dvd.x <= 0) {
        dvd.xspeed *= -1;
        newImage()
    }

    if (dvd.y + dvd.size * scale >= canvas.height || dvd.y <= 0) {
        dvd.yspeed *= -1;
        newImage()
    }
}

// keyboard shortcuts for new image
document.addEventListener('keyup', function (event) {
    if (event.key == "n") {
        newImage()
    }
    if (event.key == "p") {
        pause()
    }
    if (event.key == "r") {
        reset()
    }
    if (event.key == "h") {
        brandHelp()
    }
});

function brandHelp() {
    alert(`
    Press "n" for a new image
    Press "p" to play/pause
    Press "r" to reset location
    Press "h" for help/info`)
}

function newImage() {
    var imgarray = ["arc.png", "mcd.png", "spbob.jpg", "bsq.png", "ytb.png", "cc.png", "mic.png", "vvv.png", "voa.jpg", "kmn.jpg", "wls.jpg", "iso.png", "n.png", "pop.png", "fedex.png", "acr.jpg", "ps4.jpg", "tave.png", "twt.png", "spr.jpg", "ntf.jpg", "pep.png", "vzn.png", "wlm.jpg", "nnt.jpg", "sms.jpg", "chc.png", "ideo.jpg"]
    const img = imgarray[Math.floor(Math.random() * imgarray.length)]
    console.log(img)
    dvd.img.src = `/img/logo_bouncing/${img}`
}