/* ==========================================
   WALK WITH GOD
   JAVASCRIPT
========================================== */


/* ==========================================
   BIBLE VERSES
========================================== */

const verses = [

    /* ======================
       HOPE
    ====================== */

    {
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
        reference: "Jeremiah 29:11",
        category: "hope"
    },

    {
        text: "May the God of hope fill you with all joy and peace as you trust in him.",
        reference: "Romans 15:13",
        category: "hope"
    },

    {
        text: "The Lord is my shepherd; I lack nothing.",
        reference: "Psalm 23:1",
        category: "hope"
    },

    {
        text: "The Lord is my light and my salvation—whom shall I fear?",
        reference: "Psalm 27:1",
        category: "hope"
    },

    {
        text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
        reference: "Psalm 34:18",
        category: "hope"
    },

    {
        text: "Those who hope in the Lord will renew their strength.",
        reference: "Isaiah 40:31",
        category: "hope"
    },

    {
        text: "Rejoice in hope, be patient in tribulation, be constant in prayer.",
        reference: "Romans 12:12",
        category: "hope"
    },


    /* ======================
       FAITH
    ====================== */

    {
        text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
        reference: "Hebrews 11:1",
        category: "faith"
    },

    {
        text: "Trust in the Lord with all your heart and lean not on your own understanding.",
        reference: "Proverbs 3:5",
        category: "faith"
    },

    {
        text: "For we live by faith, not by sight.",
        reference: "2 Corinthians 5:7",
        category: "faith"
    },

    {
        text: "With God all things are possible.",
        reference: "Matthew 19:26",
        category: "faith"
    },

    {
        text: "Commit to the Lord whatever you do, and he will establish your plans.",
        reference: "Proverbs 16:3",
        category: "faith"
    },

    {
        text: "Every good and perfect gift is from above.",
        reference: "James 1:17",
        category: "faith"
    },


    /* ======================
       PEACE
    ====================== */

    {
        text: "Peace I leave with you; my peace I give you. I do not give you as the world gives.",
        reference: "John 14:27",
        category: "peace"
    },

    {
        text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
        reference: "Isaiah 26:3",
        category: "peace"
    },

    {
        text: "Be still, and know that I am God.",
        reference: "Psalm 46:10",
        category: "peace"
    },

    {
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7",
        category: "peace"
    },

    {
        text: "Let the peace of Christ rule in your hearts.",
        reference: "Colossians 3:15",
        category: "peace"
    },

    {
        text: "Do not let your hearts be troubled. You believe in God; believe also in me.",
        reference: "John 14:1",
        category: "peace"
    },


    /* ======================
       STRENGTH
    ====================== */

    {
        text: "I can do all this through him who gives me strength.",
        reference: "Philippians 4:13",
        category: "strength"
    },

    {
        text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
        reference: "Psalm 28:7",
        category: "strength"
    },

    {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reference: "Joshua 1:9",
        category: "strength"
    },

    {
        text: "God is our refuge and strength, an ever-present help in trouble.",
        reference: "Psalm 46:1",
        category: "strength"
    },

    {
        text: "The Lord will fight for you; you need only to be still.",
        reference: "Exodus 14:14",
        category: "strength"
    },

    {
        text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.",
        reference: "Proverbs 18:10",
        category: "strength"
    },


    /* ======================
       LOVE
    ====================== */

    {
        text: "Above all, love each other deeply, because love covers over a multitude of sins.",
        reference: "1 Peter 4:8",
        category: "love"
    },

    {
        text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
        reference: "1 Corinthians 13:13",
        category: "love"
    },

    {
        text: "We love because he first loved us.",
        reference: "1 John 4:19",
        category: "love"
    },

    {
        text: "My command is this: Love each other as I have loved you.",
        reference: "John 15:12",
        category: "love"
    },

    {
        text: "Give thanks to the Lord, for he is good; his love endures forever.",
        reference: "Psalm 107:1",
        category: "love"
    },

    {
        text: "Let everything you do be done in love.",
        reference: "1 Corinthians 16:14",
        category: "love"
    },

    {
        text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.",
        reference: "Numbers 6:24-25",
        category: "love"
    },


    /* ======================
       MORE
    ====================== */

    {
        text: "This is the day the Lord has made; let us rejoice and be glad in it.",
        reference: "Psalm 118:24",
        category: "hope"
    },

    {
        text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.",
        reference: "Nahum 1:7",
        category: "faith"
    },

    {
        text: "The Lord gives strength to his people; the Lord blesses his people with peace.",
        reference: "Psalm 29:11",
        category: "peace"
    },

    {
        text: "I sought the Lord, and he answered me; he delivered me from all my fears.",
        reference: "Psalm 34:4",
        category: "strength"
    },

    {
        text: "The Lord is gracious and compassionate, slow to anger and rich in love.",
        reference: "Psalm 145:8",
        category: "love"
    },

    {
        text: "Come to me, all you who are weary and burdened, and I will give you rest.",
        reference: "Matthew 11:28",
        category: "peace"
    },

    {
        text: "Do everything without grumbling or arguing.",
        reference: "Philippians 2:14",
        category: "faith"
    },

    {
        text: "The Lord directs the steps of the godly. He delights in every detail of their lives.",
        reference: "Psalm 37:23",
        category: "faith"
    },

    {
        text: "The Lord is faithful to all his promises and loving toward all he has made.",
        reference: "Psalm 145:13",
        category: "hope"
    },

    {
        text: "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
        reference: "Hebrews 10:23",
        category: "hope"
    }

];


/* ==========================================
   VARIABLES
========================================== */

let currentCategory = "all";

let currentVerse = null;

let favorites =
    JSON.parse(
        localStorage.getItem("godFavorites")
    ) || [];


/* ==========================================
   RANDOM VERSE
========================================== */

function getRandomVerse() {

    const jar =
        document.querySelector(".jar");

    const button =
        document.getElementById("jarButton");


    /* Shake jar */

    jar.classList.remove("jar-shake");

    void jar.offsetWidth;

    jar.classList.add("jar-shake");


    /* Filter */

    let available;


    if (currentCategory === "all") {

        available = verses;

    } else {

        available =
            verses.filter(
                verse =>
                    verse.category === currentCategory
            );

    }


    /* Random */

    const randomIndex =
        Math.floor(
            Math.random() *
            available.length
        );


    currentVerse =
        available[randomIndex];


    /* Wait for shake */

    setTimeout(() => {

        displayVerse(currentVerse);

    }, 500);

}


/* ==========================================
   DISPLAY VERSE
========================================== */

function displayVerse(verse) {

    const text =
        document.getElementById(
            "verseText"
        );

    const reference =
        document.getElementById(
            "verseReference"
        );


    text.style.opacity = "0";

    reference.style.opacity = "0";


    setTimeout(() => {

        text.textContent =
            `"${verse.text}"`;

        reference.textContent =
            `— ${verse.reference}`;


        text.style.transition =
            "opacity 0.6s ease";

        reference.style.transition =
            "opacity 0.6s ease";


        text.style.opacity = "1";

        reference.style.opacity = "1";

    }, 150);

}


/* ==========================================
   CATEGORY
========================================== */

function chooseCategory(category) {

    currentCategory =
        category;


    getRandomVerse();

}


/* ==========================================
   FAVORITE
========================================== */

function favoriteVerse() {

    if (!currentVerse) {

        alert(
            "Open the jar and receive a verse first. 📖"
        );

        return;
    }


    const exists =
        favorites.some(
            verse =>
                verse.reference ===
                currentVerse.reference
        );


    if (exists) {

        alert(
            "This verse is already saved. ♡"
        );

        return;
    }


    favorites.push(
        currentVerse
    );


    localStorage.setItem(
        "godFavorites",
        JSON.stringify(favorites)
    );


    renderFavorites();


    document
        .getElementById("popup")
        .classList.add("show");

}


/* ==========================================
   REMOVE FAVORITE
========================================== */

function removeFavorite(index) {

    favorites.splice(
        index,
        1
    );


    localStorage.setItem(
        "godFavorites",
        JSON.stringify(favorites)
    );


    renderFavorites();

}


/* ==========================================
   RENDER FAVORITES
========================================== */

function renderFavorites() {

    const list =
        document.getElementById(
            "favoriteList"
        );

    const count =
        document.getElementById(
            "favoriteCount"
        );


    count.textContent =
        favorites.length;


    if (
        favorites.length === 0
    ) {

        list.innerHTML = `

            <div class="empty-favorites">

                <div>
                    📖
                </div>

                <p>
                    Your favorite Bible verses
                    will appear here.
                </p>

            </div>

        `;

        return;
    }


    list.innerHTML = "";


    favorites.forEach(
        (verse, index) => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "favorite-item";


            item.innerHTML = `

                <button
                    class="remove-favorite"
                    onclick="
                        removeFavorite(${index})
                    "
                    aria-label="Remove verse"
                >
                    ×
                </button>

                <p>
                    "${verse.text}"
                </p>

                <small>
                    — ${verse.reference}
                </small>

            `;


            list.appendChild(
                item
            );

        }
    );

}


/* ==========================================
   COPY
========================================== */

function copyVerse() {

    if (!currentVerse) {

        alert(
            "Open the jar first. 📖"
        );

        return;
    }


    const text =
        `"${currentVerse.text}" — ${currentVerse.reference}`;


    navigator.clipboard
        .writeText(text)
        .then(() => {

            alert(
                "God's Word copied! 📖✨"
            );

        })
        .catch(() => {

            alert(
                "Unable to copy the verse."
            );

        });

}


/* ==========================================
   SHARE
========================================== */

function shareVerse() {

    if (!currentVerse) {

        alert(
            "Open the jar first. 📖"
        );

        return;
    }


    const text =
        `"${currentVerse.text}" — ${currentVerse.reference}`;


    if (
        navigator.share
    ) {

        navigator.share({

            title:
                "A Word From God",

            text:
                text

        });

    } else {

        navigator.clipboard
            .writeText(text);

        alert(
            "The verse was copied so you can share it. 📋"
        );

    }

}


/* ==========================================
   PRAYER
========================================== */

function savePrayer() {

    const prayer =
        document.getElementById(
            "prayerText"
        ).value.trim();


    const message =
        document.getElementById(
            "prayerSaved"
        );


    if (!prayer) {

        message.textContent =
            "Write something to God first. 🙏";

        return;
    }


    localStorage.setItem(
        "myPrayer",
        prayer
    );


    message.textContent =
        "Your prayer has been saved here. 🙏♡";

}


/* ==========================================
   LOAD PRAYER
========================================== */

function loadPrayer() {

    const savedPrayer =
        localStorage.getItem(
            "myPrayer"
        );


    if (savedPrayer) {

        document.getElementById(
            "prayerText"
        ).value =
            savedPrayer;

    }

}


/* ==========================================
   POPUP
========================================== */

function closePopup() {

    document
        .getElementById("popup")
        .classList.remove("show");

}


/* ==========================================
   CLICK OUTSIDE POPUP
========================================== */

document
    .getElementById("popup")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closePopup();

            }

        }
    );


/* ==========================================
   KEYBOARD SUPPORT
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        /*
           Space bar or Enter
           opens the jar
        */

        if (
            event.code === "Space" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {

            event.preventDefault();

            getRandomVerse();

        }

    }
);


/* ==========================================
   INITIALIZE
========================================== */

renderFavorites();

loadPrayer();