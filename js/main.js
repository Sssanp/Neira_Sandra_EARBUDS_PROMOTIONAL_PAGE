(() => {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    //console.log("IIFE Fired");
    // ar moderl 

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");

    const infoBoxes = [
        {
            title: "Super Bass",
            text: "The bass is deep and punchy, yet tightly controlled and precise. Enjoy a full, natural sound balanced across the frequency range.",
            image: "images/earbudsbass.png"
        },
        {
            title: "Invisible Touch Controls",
            text: "The touch-sensitive controls on the earphones allow you to control the volume, skip tracks, take calls, and activate Siri or Google Assistant.",
            image: "images/earbudsinvisibletouch.png"
        },
        {
            title: "Hands-Free Mic",
            text: "The built-in microphone allows you to make and receive calls on the go, without having to touch your phone.",
            image: "images/earbudsmic.png"
        },
        {
            title: "Noise Canceling Technology",
            text: "The noise canceling technology reduces ambient noise and distractions, so you can focus on your music.",
            image: "images/earbudsnoisecan.png"
        },
        {
            title: "Comfortable Fit",
            text: "The ergonomic design of the earphones ensures a comfortable fit, so you can wear them for hours on end without any discomfort.",
            image: "images/earbudscom.png"
        }
    ];

    //Draggable Image

    var imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;


    //FUNCTIONS -------------------------------------------------
    function modelLoaded() {
        //console.log(hotspots);
        hotspots.forEach(hotspot => {
            hotspot.style.display = "block";
        });
    }

    function loadInfo() {
        infoBoxes.forEach((infoBox, index) => {
            let selected = document.querySelector(`#hotspot-${index + 1}`);
            // Create and set the elements as instructed
            let infotext = document.createElement('h2');
            infotext.textContent = infoBox.title;
            let infopara = document.createElement('p');
            infopara.textContent = infoBox.text;
            let infoimage = document.createElement('img');
            infoimage.src = infoBox.image;
            infoimage.classList.add("info-image");

            selected.appendChild(infotext);
            selected.appendChild(infopara);
            selected.appendChild(infoimage);
        });
    }
    loadInfo();

    function showInfo(e) {
        let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"]> div`);
        gsap.to(selected, 1, { autoAlpha: 1 });
    }

    function hideInfo(e) {
        let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"]> div`);
        gsap.to(selected, 1, { autoAlpha: 0 });
    }

    //DRAGABBLE IMAGE

    function onDown() {
        dragging = true;
    }

    function onUp() {
        dragging = false;
    }

    function onMove(event) {
        if (dragging === true) {
            var x = event.clientX - imageCon.getBoundingClientRect().left;
            console.log(event.clientX);
            console.log(imageCon.getBoundingClientRect().left);
            //need logic to keep slider in box
            if (x < min) {
                x = min;
            }
            else if (x > max) {
                x = max - 4;
            }
            drag.style.left = x + 'px';
            left.style.width = x + 'px';
        }
    }



    //EVENT LISTENERS 
    model.addEventListener("load", modelLoaded);

    hotspots.forEach(function (hotspot) {
        hotspot.addEventListener("mouseover", showInfo);
        hotspot.addEventListener("mouseout", hideInfo);
    });

    //Draggable Image

    drag.addEventListener('mousedown', onDown, false);
    document.body.addEventListener('mouseup', onUp, false);
    document.body.addEventListener('mousemove', onMove, false);



    // Scroll trigger animation using GSAP--------


    const canvas = document.querySelector("#stanimation");
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;
    const frameCount = 573;
    const images = [];
    const position = {
        frame: 1
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `image_sequence/earbuds${(i + 1).toString().padStart(3, '0')}.jpg`;
        images.push(img);
    }

    let loop = gsap.fromTo(
        position,
        {
            frame: 1
        },
        {
            frame: 573,
            duration: 13,
            repeat: -1,
            snap: "frame",
            ease: "none",
            onUpdate: render,
            paused: true
        }
    );

    gsap.to(position, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "Circ.easeInOut",
        scrollTrigger: {
            scrub: 0.1,
            trigger: ".animation",
            start: "top",
            pin: ".earbuds-wrap",

        },
        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[position.frame], 0, 0);
    }

    //Hamburger Menu


    // Variables
    const hamburgerOpenIcon = document.querySelector("#hamburger-open");
    const hamburgerCloseIcon = document.querySelector("#hamburger-close");
    const hamburgerMenu = document.querySelector("#hamburger-menu");

    // Open hamburger menu
    function openHamburgerMenu() {
        hamburgerMenu.classList.add("visible");
    }

    // Close hamburger menu
    function closeHamburgerMenu() {
        hamburgerMenu.classList.remove("visible");
    }

    // Scroll to section by ID
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            gsap.to(window, {
                scrollTo: { y: section, offsetY: 100 },
                ease: "slowMo(0.5, 0.5, false)",
                duration: 2,
            });
        }
    }

    // Event Listeners
    hamburgerOpenIcon.addEventListener("click", openHamburgerMenu);
    hamburgerCloseIcon.addEventListener("click", closeHamburgerMenu);

    // Assuming "Discover" is the ID of the section
    document.getElementById("discover").addEventListener("click", (e) => {
        e.preventDefault();
        closeHamburgerMenu();
        setTimeout(() => {
            scrollToSection("discover");
        }, 300);
    });

    //image timeline animation left to right


    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".imgearbuds",
            start: "left left",
            end: "right right",
            scrub: 2,
            pin: true,
        }
    });

    tl.to('.earbuds_1', { x: 100, y: 0, duration: 3 });



})();











