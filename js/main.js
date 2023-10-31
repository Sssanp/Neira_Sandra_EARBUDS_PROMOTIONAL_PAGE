
(() => {
    //console.log("IIFE Fired");
    //variables
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


    //functions
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

            // Append the elements to the selected hotspot
            selected.appendChild(infotext);
            selected.appendChild(infopara);
            selected.appendChild(infoimage);
        });
    }
    loadInfo();

    function showInfo(e) {
        //console.log(this.slot);
        //console.log(`#${this.slot}`);
        //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
        let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"]> div`);
        gsap.to(selected, 1, { autoAlpha: 1 });
    }

    function hideInfo(e) {
        //console.log(this.slot);
        //console.log(`#${this.slot}`);
        let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"]> div`);
        gsap.to(selected, 1, { autoAlpha: 0 });
    }

    //Event Listener
    model.addEventListener("load", modelLoaded);

    hotspots.forEach(function (hotspot) {
        hotspot.addEventListener("mouseover", showInfo);
        hotspot.addEventListener("mouseout", hideInfo);
    });

})();




