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

function startMusic() {

    if (!music) return;

    music.play()
        .then(() => {

            musicButton.textContent =
                "♫";

        })
        .catch(() => {

            console.log(
                "Music playback requires interaction."
            );

        });

}


musicButton.addEventListener(
    "click",
    () => {

        if (music.paused) {

            music.play();

            musicButton.textContent =
                "♫";

        } else {

            music.pause();

            musicButton.textContent =
                "Ⅱ";

        }

    }
);


/* =========================================================
   CLAIM MAIL
========================================================= */

claimButton.addEventListener(
    "click",
    () => {


        /*
         Prevent the animation from
         being triggered twice.
        */

        if (
            mailOpening.classList.contains(
                "claiming"
            )
        ) {

            return;

        }


        /*
         Add the main animation state.
        */

        mailOpening.classList.add(
            "claiming"
        );


        /*
         Start music because this
         action comes directly from
         the visitor's click.
        */

        startMusic();


        /*
         Button begins disappearing.
        */

        claimButton.style.pointerEvents =
            "none";


        setTimeout(
            () => {

                claimButton.style.opacity =
                    "0";

                claimButton.style.transform =
                    "translateY(15px)";

            },
            450
        );


        setTimeout(
            () => {

                claimButton.style.display =
                    "none";

            },
            1000
        );


        /*
         Wait until the envelope
         has physically emerged.
        */

        setTimeout(
            () => {

                mailOpening.classList.add(
                    "claimed"
                );


                createSparkleBurst();


            },
            1550
        );

    }
);


/* =========================================================
   OPEN INVITATION
========================================================= */

openInvitation.addEventListener(
    "click",
    () => {

        startMusic();


        const invitation =
            document.getElementById(
                "welcome"
            );


        invitation.scrollIntoView({
            behavior:
                "smooth"
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
        behavior:
            "smooth"
    });

}


/* =========================================================
   SPARKLE BURST
========================================================= */

function createSparkleBurst() {


    const container =
        document.querySelector(
            ".mail-opening"
        );


    if (!container) return;


    const symbols = [
        "✦",
        "✧",
        "❋",
        "✦",
        "✧"
    ];


    /*
       Create many particles
       around the envelope.
    */

    for (
        let i = 0;
        i < 48;
        i++
    ) {


        const sparkle =
            document.createElement(
                "span"
            );


        sparkle.className =
            "sparkle";


        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        sparkle.style.left =
            "50%";


        sparkle.style.top =
            "40%";


        sparkle.style.fontSize =
            (
                Math.random() * 18 + 8
            ) + "px";


        sparkle.style.color =
            i % 2 === 0
                ? "#C87D87"
                : "#6B7556";


        container.appendChild(
            sparkle
        );


        /*
         Random direction.
        */

        const angle =
            Math.random()
            * Math.PI
            * 2;


        const distance =
            Math.random()
            * 260 + 80;


        const x =
            Math.cos(angle)
            * distance;


        const y =
            Math.sin(angle)
            * distance;


        /*
         Trigger animation.
        */

        requestAnimationFrame(
            () => {

                sparkle.style.opacity =
                    ".85";


                sparkle.style.transform =
                    `
                    translate(
                        ${x}px,
                        ${y}px
                    )
                    scale(1)
                    rotate(180deg)
                    `;

                sparkle.style.transition =
                    `
                    transform 1.5s
                    cubic-bezier(.2,.8,.2,1),
                    opacity .5s ease
                    `;

            }
        );


        /*
         Fade away.
        */

        setTimeout(
            () => {

                sparkle.style.opacity =
                    "0";

            },
            750
        );


        /*
         Remove from DOM.
        */

        setTimeout(
            () => {

                sparkle.remove();

            },
            1700
        );

    }

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


    if (
        difference <= 0
    ) {

        document.getElementById(
            "days"
        ).textContent = "00";


        document.getElementById(
            "hours"
        ).textContent = "00";


        document.getElementById(
            "minutes"
        ).textContent = "00";


        document.getElementById(
            "seconds"
        ).textContent = "00";


        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(2, "0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   IMAGE FALLBACK
========================================================= */

document
    .querySelectorAll("img")
    .forEach(
        (image) => {

            image.addEventListener(
                "error",
                () => {

                    image.style.background =
                        `
                        linear-gradient(
                            135deg,
                            #F0C4CB,
                            #FBEAD6,
                            #E5BCA9
                        )
                        `;

                }
            );

        }
    );
