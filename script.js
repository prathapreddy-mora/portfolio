
/* =========================
   TYPING EFFECT
========================= */

const text =
"Full Stack Developer | AI & ML Enthusiast | Backend Developer";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 70);
    }
}

window.onload = () => {
    typeWriter();
};

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");

        } else {

            section.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", revealSections);

revealSections();

/* =========================
   ACTIVE NAVBAR LINK
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href").includes(current)
        ) {

            link.classList.add("active-link");
        }
    });
});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior: "smooth"
        });
    });
});

/* =========================
   HERO IMAGE FLOATING EFFECT
========================= */

const heroImage = document.querySelector(".hero-img");

let floatDirection = 1;

setInterval(() => {

    if(heroImage){

        heroImage.style.transform =
        `translateY(${floatDirection * 10}px)`;

        floatDirection *= -1;
    }

}, 1500);

/* =========================
   PROJECT CARD 3D EFFECT
========================= */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;

        const rotateY = (centerX - x) / 20;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";
    });
});

/* =========================
   CONTACT FORM DEMO
========================= */

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you for contacting me! I will get back to you soon."
        );

        form.reset();
    });
}

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#00d4ff;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 15px rgba(0,212,255,.5);
`;

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"
    });
});

