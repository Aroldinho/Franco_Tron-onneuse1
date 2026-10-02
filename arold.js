document.addEventListener('DOMContentLoaded', function () {

    // ====== Dictionnaire des traductions ======
    const translations = {
        fr: {
            brand: "Franco Tronçonneuse",
            nav_home: "Accueil",
            nav_about: "À Propos",
            nav_services: "Services",
            nav_products: "Produits",
            nav_location: "Localisation",
            nav_contact: "Contact",
            hero_title: "Franco Tronçonneuse",
            hero_subtitle: "Votre partenaire de confiance pour les machines agricoles",
            hero_tagline: "Vente • Entretien • Réparation",
            hero_btn: "Nous Contacter",
            about_title: "À Propos de Franco Tronçonneuse",
            about_who: "Qui sommes-nous ?",
            about_desc: "Franco Tronçonneuse est une entreprise établie à Yaoundé, basée à Etoudi (face à Afriland First Bank), spécialisée dans la vente, l'entretien et la réparation de machines agricoles de qualité.",
            about_advantages: "Nos Avantages",
            about_li1: "Service professionnel et de qualité",
            about_li2: "Équipe d'experts expérimentés",
            about_li3: "Machines agricoles fiables et durables",
            about_li4: "Maintenance et support technique complets",
            about_li5: "Tarifs compétitifs et transparents",
            about_li6: "Disponibilité et réactivité",
            services_title: "Nos Services",
            service1_title: "Vente de Machines",
            service1_desc: "Nous proposons une large gamme de machines agricoles de qualité supérieure, sélectionnées pour leur fiabilité et leur performance.",
            service2_title: "Maintenance",
            service2_desc: "Entretien régulier et préventif de vos machines pour garantir une durabilité maximale et une performance optimale.",
            service3_title: "Réparation",
            service3_desc: "Service de réparation rapide et efficace avec des pièces de rechange authentiques et une garantie sur les travaux.",
            products_title: "Nos Produits",
            search_placeholder: "Rechercher un produit...",
            search_hint: "🔍 Tapez le nom du produit que vous voulez avoir",
            no_results: "Aucun produit ne correspond à votre recherche.",
            location_title: "Notre Localisation",
            location_coords: "Coordonnées",
            address_label: "Adresse:",
            address_text: "Etoudi, Yaoundé\nFace à Afriland First Bank\nCameroun",
            phone_label: "Téléphone:",
            email_label: "Email:",
            hours_label: "Horaires:",
            hours_text: "Lun-Ven: 8h00 - 18h00\nSam: 9h00 - 17h00",
            contact_title: "Formulaire de Contact",
            form_name: "Nom Complet",
            form_email: "Adresse Email",
            form_phone: "Numéro de Téléphone",
            form_subject: "Sujet",
            form_subject_placeholder: "-- Sélectionnez un sujet --",
            form_subject_sale: "Vente de machines",
            form_subject_maintenance: "Demande de maintenance",
            form_subject_repair: "Service de réparation",
            form_subject_other: "Autre demande",
            form_message: "Message",
            form_submit: "Envoyer le Message",
            footer_brand: "Franco Tronçonneuse",
            footer_tagline: "Votre partenaire de confiance pour l'agriculture au Cameroun",
            footer_services: "Services",
            footer_sale: "Vente de Machines",
            footer_maintenance: "Maintenance",
            footer_repair: "Réparation",
            footer_support: "Support",
            footer_info: "Informations",
            footer_about: "À Propos",
            footer_location: "Localisation",
            footer_contact: "Contact",
            footer_privacy: "Politique de Confidentialité",
            footer_copyright: "© 2026 Franco Tronçonneuse. Tous droits réservés. | Développé par NGUEKAM AROLD étudiant de l'IUT de Ngaoundéré"
        },
        en: {
            brand: "Franco Chainsaw",
            nav_home: "Home",
            nav_about: "About",
            nav_services: "Services",
            nav_products: "Products",
            nav_location: "Location",
            nav_contact: "Contact",
            hero_title: "Franco Chainsaw",
            hero_subtitle: "Your trusted partner for agricultural machinery",
            hero_tagline: "Sales • Maintenance • Repair",
            hero_btn: "Contact Us",
            about_title: "About Franco Chainsaw",
            about_who: "Who are we?",
            about_desc: "Franco Chainsaw is a company based in Yaoundé, located in Etoudi (opposite Afriland First Bank), specializing in the sale, maintenance and repair of quality agricultural machinery.",
            about_advantages: "Our Advantages",
            about_li1: "Professional and quality service",
            about_li2: "Team of experienced experts",
            about_li3: "Reliable and durable agricultural machines",
            about_li4: "Complete maintenance and technical support",
            about_li5: "Competitive and transparent prices",
            about_li6: "Availability and responsiveness",
            services_title: "Our Services",
            service1_title: "Machine Sales",
            service1_desc: "We offer a wide range of high-quality agricultural machines, selected for their reliability and performance.",
            service2_title: "Maintenance",
            service2_desc: "Regular and preventive maintenance of your machines to guarantee maximum durability and optimal performance.",
            service3_title: "Repair",
            service3_desc: "Fast and efficient repair service with authentic spare parts and a warranty on work.",
            products_title: "Our Products",
            search_placeholder: "Search for a product...",
            search_hint: "🔍 Type the name of the product you want to have",
            no_results: "No products match your search.",
            location_title: "Our Location",
            location_coords: "Coordinates",
            address_label: "Address:",
            address_text: "Etoudi, Yaoundé\nOpposite Afriland First Bank\nCameroon",
            phone_label: "Phone:",
            email_label: "Email:",
            hours_label: "Hours:",
            hours_text: "Mon-Fri: 8:00am - 6:00pm\nSat: 9:00am - 5:00pm",
            contact_title: "Contact Form",
            form_name: "Full Name",
            form_email: "Email Address",
            form_phone: "Phone Number",
            form_subject: "Subject",
            form_subject_placeholder: "-- Select a subject --",
            form_subject_sale: "Machine sales",
            form_subject_maintenance: "Maintenance request",
            form_subject_repair: "Repair service",
            form_subject_other: "Other request",
            form_message: "Message",
            form_submit: "Send Message",
            footer_brand: "Franco Chainsaw",
            footer_tagline: "Your trusted partner for agriculture in Cameroon",
            footer_services: "Services",
            footer_sale: "Machine Sales",
            footer_maintenance: "Maintenance",
            footer_repair: "Repair",
            footer_support: "Support",
            footer_info: "Information",
            footer_about: "About",
            footer_location: "Location",
            footer_contact: "Contact",
            footer_privacy: "Privacy Policy",
            footer_copyright: "© 2026 Franco Chainsaw. All rights reserved. | Developed  by NGUEKAM AROLD student at IUT of Ngaoundéré"
        }
    };

    // ====== État courant ======
    let currentLang = 'fr';

    // ====== Fonction de mise à jour de la langue ======
    function setLanguage(lang) {
        currentLang = lang;
        const dict = translations[lang];

        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (dict[key] !== undefined) {
                if (dict[key].includes('<') || dict[key].includes('\n')) {
                    el.innerHTML = dict[key].replace(/\n/g, '<br>');
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        document.querySelectorAll('select [data-key]').forEach(opt => {
            const key = opt.getAttribute('data-key');
            if (dict[key] !== undefined) {
                opt.textContent = dict[key];
            }
        });

        document.getElementById('langFr').classList.toggle('active', lang === 'fr');
        document.getElementById('langEn').classList.toggle('active', lang === 'en');

        // Mettre à jour le message d'aide si affiché
        if (searchHint) {
            searchHint.textContent = dict.search_hint;
        }
        if (noResults && noResults.style.display !== 'none') {
            noResults.querySelector('p').textContent = dict.no_results;
        }
    }

    // ====== Événements des boutons de langue ======
    document.getElementById('langFr').addEventListener('click', function () {
        setLanguage('fr');
    });
    document.getElementById('langEn').addEventListener('click', function () {
        setLanguage('en');
    });

    // ====== Fermer le menu mobile ======
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menu = document.getElementById('navbarNav');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                const bsCollapse = bootstrap.Collapse.getInstance(menu);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // ====== Formulaire de contact (envoi via FormSubmit) ======
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        // Message de chargement
        formMessage.style.display = 'block';
        formMessage.style.background = '#fff3cd';
        formMessage.style.color = '#856404';
        formMessage.style.border = '1px solid #ffeeba';
        formMessage.innerHTML = currentLang === 'fr'
            ? '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...'
            : '<i class="fas fa-spinner fa-spin"></i> Sending...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                const name = formData.get('name');
                const email = formData.get('email');

                const msg = currentLang === 'fr'
                    ? `Merci ${name} ! Votre message a bien été envoyé à nguekamaroldyan1029@gmail.com. Nous vous répondrons à ${email}.`
                    : `Thank you ${name}! Your message has been sent to nguekamaroldyan1029@gmail.com. We will reply to ${email}.`;

                formMessage.style.background = '#d4edda';
                formMessage.style.color = '#155724';
                formMessage.style.border = '1px solid #c3e6cb';
                formMessage.innerHTML = `<i class="fas fa-check-circle"></i> <strong>${msg}</strong>`;

                contactForm.reset();
            } else {
                throw new Error('Erreur serveur');
            }
        } catch (error) {
            formMessage.style.background = '#f8d7da';
            formMessage.style.color = '#721c24';
            formMessage.style.border = '1px solid #f5c6cb';
            formMessage.innerHTML = currentLang === 'fr'
                ? '<i class="fas fa-exclamation-triangle"></i> Une erreur est survenue. Veuillez réessayer.'
                : '<i class="fas fa-exclamation-triangle"></i> An error occurred. Please try again.';
            console.error('Erreur formulaire :', error);
        }

        // Masquer le message après 8 secondes
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 8000);
    });
}

    // ====== Smooth scroll ======
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ====== Animation au scroll ======
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ====== Année dynamique ======
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // ====== RECHERCHE DE PRODUITS (images masquées par défaut) ======
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');
    const noResults = document.getElementById('noResults');
    const clearBtn = document.getElementById('clearSearch');

    // Créer dynamiquement le message d'aide (s'il n'existe pas)
    let searchHint = document.getElementById('searchHint');
    if (!searchHint && searchInput) {
        searchHint = document.createElement('p');
        searchHint.id = 'searchHint';
        searchHint.textContent = translations[currentLang].search_hint;
        // Insérer après la grille des produits
        document.getElementById('productGrid').after(searchHint);
    }

    function filterProducts(query) {
        const q = query.toLowerCase().trim();

        // Cas 1 : champ vide → tout masquer + afficher l'aide
        if (q === '') {
            productCards.forEach(card => {
                card.style.display = 'none';
            });
            if (searchHint) searchHint.style.display = 'block';
            if (noResults) noResults.style.display = 'none';
            return;
        }

        // Cas 2 : il y a une recherche → filtrer
        let found = false;

        productCards.forEach(card => {
            const title = (card.dataset.title || '').toLowerCase();
            const keywords = (card.dataset.keywords || '').toLowerCase();
            const text = card.textContent.toLowerCase();

            const normalize = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const nq = normalize(q);
            const match = normalize(title).includes(nq) || normalize(keywords).includes(nq) || normalize(text).includes(nq);

            if (match) {
                card.style.display = 'block';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Masquer l'aide, afficher ou non le message "aucun résultat"
        if (searchHint) searchHint.style.display = 'none';
        if (noResults) noResults.style.display = found ? 'none' : 'block';
    }

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            filterProducts(this.value);
        });

        clearBtn.addEventListener('click', function () {
            searchInput.value = '';
            filterProducts('');
            searchInput.focus();
        });

        // État initial : rien d'affiché
        filterProducts('');
    }

    // ====== Initialisation de la langue par défaut ======
    setLanguage('fr');
});