/* =========================================================
   TRISHA — A DECADE & EIGHT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const mailOpening =
    document.getElementById("home");

const claimButton =
    document.getElementById("claimButton");

const openInvitation =
    document.getElementById("openInvitation");

const music =
    document.getElementById("music");

const musicButton =
    document.getElementById("musicButton");


/* =========================================================
   MUSIC
========================================================= */

let musicStarted = false;

function startMusic() {

    if (!music) return;

    music.play()
        .then(() => {

            musicStarted = true;

            musicButton.textContent = "♫";

        })
        .catch(() => {

            console.log(
                "Music requires user interaction."
            );

        });

}


musicButton.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play();

            musicButton.textContent = "♫";

        } else {

            music.pause();

            musicButton.textContent = "Ⅱ";

        }

    }
);


/* =========================================================
   CLAIM MAIL
========================================================= */

claimButton.addEventListener(
    "click",
    () => {

        mailOpening.classList.add("claimed");

        createSparkles();

        startMusic();

        claimButton.style.opacity = "0";

        claimButton.style.pointerEvents = "none";

        setTimeout(() => {

            claimButton.style.display = "none";

        }, 500);

    }
);


/* =========================================================
   OPEN INVITATION
========================================================= */

openInvitation.addEventListener(
    "click",
    () => {

        startMusic();

        document
            .getElementById("welcome")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================================
   SCROLL FUNCTION
========================================================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================================
   COUNTDOWN
========================================================= */

const eventDate =
    new Date(
        "December 20, 2026 18:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        eventDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent =
            "00";

        document.getElementById("hours").textContent =
            "00";

        document.getElementById("minutes").textContent =
            "00";

        document.getElementById("seconds").textContent =
            "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   SPARKLE EFFECT
========================================================= */

function createSparkles() {

    const container =
        document.querySelector(
            ".mail-opening"
        );

    if (!container) return;


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const sparkle =
            document.createElement(
                "span"
            );

        sparkle.textContent =
            Math.random() > .5
                ? "✦"
                : "✧";


        sparkle.style.position =
            "absolute";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.color =
            i % 2 === 0
                ? "#C87D87"
                : "#6B7556";

        sparkle.style.fontSize =
            Math.random() * 15 + 8 + "px";

        sparkle.style.pointerEvents =
            "none";

        sparkle.style.zIndex =
            "50";

        sparkle.style.opacity =
            "0";

        sparkle.style.transform =
            "scale(0)";

        sparkle.style.transition =
            "all 1.2s ease";


        container.appendChild(
            sparkle
        );


        requestAnimationFrame(
            () => {

                sparkle.style.opacity =
                    "0.8";

                sparkle.style.transform =
                    `translate(
                        ${Math.random() * 80 - 40}px,
                        ${Math.random() * 80 - 40}px
                    ) scale(1)`;

            }
        );


        setTimeout(
            () => {

                sparkle.style.opacity =
                    "0";

            },
            900
        );


        setTimeout(
            () => {

                sparkle.remove();

            },
            1400
        );

    }

}


/* =========================================================
   REVEAL SECTIONS ON SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-inner"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   PREVENT BROKEN IMAGE FEEL
========================================================= */

document
    .querySelectorAll("img")
    .forEach(
        (image) => {

            image.addEventListener(
                "error",
                () => {

                    image.style.background =
                        "linear-gradient(135deg, #F0C4CB, #FBEAD6, #E5BCA9)";

                    image.style.objectFit =
                        "cover";

                }
            );

        }
    );