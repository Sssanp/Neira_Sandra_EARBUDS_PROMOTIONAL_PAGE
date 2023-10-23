
(() => {
    //console.log("IIFE Fired");
    //variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");

    const infoBoxes = [
        {
            title: "Super Bass",
            text: "The bass is deep and punchy, yet tightly controlled and precise. Enjoy a full, natural sound balanced across the frequency range.",
            image: "images/copperinsulation.jpg",

            title: "Invisible Touch Controls",
            text: "The touch-sensitive controls on the earphones allow you to control the volume, skip tracks, take calls and activate Siri or Google Assistant.",

            title: "Hands-Free Mic",
            text: "The built-in microphone allows you to make and receive calls on the go, without having to touch your phone.",

            title: "Noise Canceling Technology",
            text: "The noise canceling technology reduces ambient noise and distractions, so you can focus on your music.",

            title: "Comfortable Fit",
            text: "The ergonomic design of the earphones ensures a comfortable fit, so you can wear them for hours on end without any discomfort.",

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
            //document.createElement('h2');
            //.textContent = infoBox.title
            //document.createElement('p');
            //.textContent = infoBox.text;
            console.log(selected);
            console.log(infoBox.title);
            console.log(infoBox.text);

            //selected.appendChild();
            //selected.appendChild();

        })
    }
    loadInfo();

    function showInfo() {
        //console.log(this.slot);
        //console.log(`#${this.slot}`);
        //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
        let selected = document.querySelector(`#${this.slot}`);
        gsap.to(selected, 1, { autoAlpha: 1 });
    }

    function hideInfo() {
        //console.log(this.slot);
        //console.log(`#${this.slot}`);
        let selected = document.querySelector(`#${this.slot}`);
        gsap.to(selected, 1, { autoAlpha: 0 });
    }

    //Event Listener
    model.addEventListener("load", modelLoaded);

    hotspots.forEach(function (hotspot) {
        hotspot.addEventListener("mouseover", showInfo);
        hotspot.addEventListener("mouseout", hideInfo);
    });
})();


