/* =========================
   HEADER SCROLL EFFECT
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Close menu after clicking link */

const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================
   SCROLL ANIMATIONS
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone || !message) {

            formMessage.textContent =
                "Please fill in all required fields.";

            return;

        }


        /*
            YOUR WHATSAPP NUMBER

            Replace this number with your
            actual WhatsApp number.

            Example:
            919876543210
        */

        const whatsappNumber =
            "917086868244";


        const whatsappMessage =
            `Hello SRS Marketing!

Name: ${name}

Phone: ${phone}

Email: ${email || "Not provided"}

Project:
${message}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        formMessage.textContent =
            "Opening WhatsApp...";


        window.open(
            whatsappURL,
            "_blank"
        );


        contactForm.reset();

    }
);


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();




    

/* =========================
   SERVICE MODAL
========================= */

const serviceModal =
    document.getElementById("serviceModal");

const serviceModalClose =
    document.getElementById("serviceModalClose");

const serviceModalOverlay =
    document.querySelector(".service-modal-overlay");

const modalIcon =
    document.getElementById("modalIcon");

const modalNumber =
    document.getElementById("modalNumber");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalFeatures =
    document.getElementById("modalFeatures");


/* =========================
   SERVICE DATA
========================= */

const services = {

    "social-media": {

        number: "01",

        icon: "◌",

        title: "Social Media Management",

        description:
            "We manage your social media presence from strategy to execution, helping your brand stay consistent, active and engaging.",

        features: [
            "Social media strategy",
            "Content  creation",
            "Post scheduling",
            "Community management",
            "Audience engagement",
            "Monthly performance tracking"
        ]

    },


    "content": {

        number: "02",

        icon: "✦",

        title: "Designing",

        description:
            "We create high-quality and engaging content that communicates your brand message and gets your audience's attention.",

        features: [
            "Creative post designs",
            "Carousel content",
            "Marketing graphics",
            "Brand-focused content",
            "Content calendars",
            "Campaign creatives"
        ]

    },


    "website": {

        number: "03",

        icon: "⌁",

        title: "Website Development",

        description:
            "We build modern, responsive and user-friendly websites designed to represent your brand professionally and convert visitors into customers.",

        features: [
            "Responsive website design",
            "Modern UI/UX",
            "Landing pages",
            "Business websites",
            "Mobile optimization",
            "Performance-focused development"
        ]

    },


    "branding": {

        number: "04",

        icon: "◇",

        title: "Branding",

        description:
            "We create a strong visual identity that helps your business stand out and remain memorable across every platform.",

        features: [
            "Logo design",
            "Brand identity",
            "Color & typography",
            "Social media branding",
            "Marketing materials",
            "Visual guidelines"
        ]

    },


    "seo": {

        number: "05",

        icon: "⌕",

        title: "Search Engine Optimization",

        description:
            "We improve your website's visibility in search engines so potential customers can discover your business more easily.",

        features: [
            "Keyword research",
            "On-page SEO",
            "Technical SEO",
            "Content optimization",
            "Local SEO",
            "SEO performance tracking"
        ]

    },


    "advertising": {

        number: "06",

        icon: "↗",

        title: "Digital Advertisement",

        description:
            "We create targeted digital advertising campaigns designed to reach the right audience and generate meaningful business enquiries.",

        features: [
            "Campaign strategy",
            "Audience targeting",
            "Ad creative development",
            "Campaign optimization",
            "Conversion tracking",
            "Performance analysis"
        ]

    },


    "reels": {

        number: "07",

        icon: "▶",

        title: "Reels & Short Videos",

        description:
            "We create engaging short-form videos designed for platforms like Instagram, Facebook and YouTube Shorts.",

        features: [
            "Reels concepts",
            "Short-form editing",
            "Trend-based content",
            "Captions & subtitles",
            "Hook development",
            "Platform optimization"
        ]

    },


    "online-presence": {

        number: "08",

        icon: "◎",

        title: "Online Presence Management",

        description:
            "We help keep your business information, branding and digital presence consistent across important online platforms.",

        features: [
            "Business profile management",
            "Online brand consistency",
            "Profile optimization",
            "Review management",
            "Digital presence audit",
            "Platform optimization"
        ]

    }

};


/* =========================
   OPEN MODAL
========================= */

const serviceCards =
    document.querySelectorAll(".service-card");


serviceCards.forEach(card => {

    card.addEventListener("click", () => {

        const serviceName =
            card.dataset.service;

        const service =
            services[serviceName];


        if (!service) return;


        /* Update modal */

        modalIcon.textContent =
            service.icon;

        modalNumber.textContent =
            service.number;

        modalTitle.textContent =
            service.title;

        modalDescription.textContent =
            service.description;


        /* Clear old features */

        modalFeatures.innerHTML = "";


        /* Add new features */

        service.features.forEach(feature => {

            const li =
                document.createElement("li");

            li.textContent =
                feature;

            modalFeatures.appendChild(li);

        });


        /* Show modal */

        serviceModal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


/* =========================
   CLOSE MODAL
========================= */

function closeServiceModal() {

    serviceModal.classList.remove("active");

    document.body.style.overflow = "";

}


serviceModalClose.addEventListener(
    "click",
    closeServiceModal
);


serviceModalOverlay.addEventListener(
    "click",
    closeServiceModal
);


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            serviceModal.classList.contains("active")
        ) {

            closeServiceModal();

        }

    }
);