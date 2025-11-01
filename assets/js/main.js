/*===== DATA STORAGE =====*/
const menuData = [
    { id: 1, name: "Barbecue salad", detail: "Delicious dish", price: 22.00, image: "assets/img/plate1.png", category: "salad" },
    { id: 2, name: "Salad with fish", detail: "Delicious dish", price: 12.00, image: "assets/img/plate2.png", category: "salad" },
    { id: 3, name: "Spinach salad", detail: "Delicious dish", price: 9.50, image: "assets/img/plate3.png", category: "salad" },
    { id: 4, name: "Grilled Chicken", detail: "Tender and juicy", price: 18.00, image: "assets/img/plate1.png", category: "main" },
    { id: 5, name: "Beef Steak", detail: "Premium cut", price: 25.00, image: "assets/img/plate2.png", category: "main" },
    { id: 6, name: "Vegetarian Pasta", detail: "Fresh ingredients", price: 14.00, image: "assets/img/plate3.png", category: "main" },
    { id: 7, name: "Chocolate Cake", detail: "Homemade dessert", price: 8.00, image: "assets/img/plate1.png", category: "dessert" },
    { id: 8, name: "Ice Cream", detail: "Various flavors", price: 6.50, image: "assets/img/plate2.png", category: "dessert" }
];

const servicesData = [
    {
        title: "Excellent food",
        description: "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
        icon: "bx-food-menu",
        type: "icon"
    },
    {
        title: "Fast food",
        description: "Quick service without compromising quality. Get your favorite meals ready in minutes.",
        icon: "bx-time-five",
        type: "icon"
    },
    {
        title: "Delivery",
        description: "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
        svg: `<svg class="services__img" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M19.1978 49.6016C17.4308 49.6016 15.9981 51.0342 15.9981 52.8012C15.9981 54.5682 17.4308 56.0008 19.1978 56.0008C20.9648 56.0008 22.3974 54.5682 22.3974 52.8012C22.3974 51.0342 20.9648 49.6016 19.1978 49.6016ZM19.1978 53.8677C18.6088 53.8677 18.1312 53.3902 18.1312 52.8012C18.1312 52.2122 18.6088 51.7347 19.1978 51.7347C19.7868 51.7347 20.2643 52.2122 20.2643 52.8012C20.2643 53.3902 19.7868 53.8677 19.1978 53.8677Z"/>
            <path d="M50.1275 49.6016C48.3605 49.6016 46.9279 51.0342 46.9279 52.8012C46.9279 54.5682 48.3605 56.0008 50.1275 56.0008C51.8945 56.0008 53.3271 54.5682 53.3271 52.8012C53.3271 51.0342 51.8945 49.6016 50.1275 49.6016ZM50.1275 53.8677C49.5385 53.8677 49.0609 53.3902 49.0609 52.8012C49.0609 52.2122 49.5385 51.7347 50.1275 51.7347C50.7165 51.7347 51.194 52.2122 51.194 52.8012C51.194 53.3902 50.7165 53.8677 50.1275 53.8677Z"/>
            <path d="M3.19962 21.8715H5.3327V24.0045H3.19962V21.8715Z"/>
            <path d="M0 26.1377H2.13308V28.2708H0V26.1377Z"/>
            <path d="M52.2606 11.2061H58.6598V13.3391H52.2606V11.2061Z"/>
            <path d="M47.9944 11.2061H50.1275V13.3391H47.9944V11.2061Z"/>
            <path d="M34.1294 4.80676H44.7948V6.93985H34.1294V4.80676Z"/>
            <path d="M29.8632 4.80676H31.9963V6.93985H29.8632V4.80676Z"/>
            <path d="M63.9925 59.2005V57.0674H54.8842C55.7935 56.0607 56.3575 54.7906 56.495 53.4412L63.4593 49.461C63.5087 49.4266 63.5556 49.3886 63.5988 49.3469C63.6363 49.3214 63.6723 49.2928 63.7056 49.2626C63.7858 49.1777 63.8514 49.0798 63.8998 48.9735C63.905 48.9636 63.9123 48.9574 63.917 48.948C63.9655 48.8272 63.9915 48.6986 63.9936 48.5684C63.9936 48.5564 63.9998 48.547 63.9998 48.535V38.9362C63.9951 38.9049 63.9889 38.8742 63.9806 38.8435C63.9821 38.8159 63.9821 38.7877 63.9806 38.7601L61.8475 25.9616C61.8428 25.946 61.8371 25.9299 61.8308 25.9148C61.8308 25.9033 61.8308 25.8903 61.8308 25.8788L60.7643 21.6127C60.645 21.1367 60.2169 20.8034 59.7264 20.8049H46.7893C46.6446 20.2852 46.3696 19.8103 45.9905 19.4259L38.708 12.1435C38.1096 11.5414 37.2951 11.204 36.4457 11.2061H10.6654C10.0764 11.2061 9.59888 11.6836 9.59888 12.2726V16.5388H0V18.6719H9.59888V21.8715H7.4658V24.0046H9.59888V26.1377H4.26617V28.2707H9.59888V37.8696C9.00989 37.8696 8.53234 38.3472 8.53234 38.9362V48.535C8.53234 48.5574 8.54432 48.5767 8.54536 48.6001C8.55161 48.6965 8.57088 48.7918 8.60264 48.8829C8.61254 48.9168 8.62451 48.9501 8.63805 48.9829C8.68805 49.0949 8.75679 49.1969 8.84168 49.285L12.8178 53.2611C12.9198 54.6749 13.4911 56.0149 14.441 57.0674H0V59.2005H63.9925ZM44.1016 50.6681H25.2236C25.0929 50.2984 24.9278 49.9411 24.731 49.6016H44.5943C44.3974 49.9411 44.2323 50.2984 44.1016 50.6681ZM25.597 52.8012H43.7282C43.7288 54.3776 44.3141 55.8977 45.3708 57.0674H23.9545C25.0111 55.8977 25.5965 54.3776 25.597 52.8012ZM45.8613 52.8012C45.8613 50.4452 47.7715 48.535 50.1275 48.535C52.4835 48.535 54.3937 50.4452 54.3937 52.8012C54.3937 55.1572 52.4835 57.0674 50.1275 57.0674C47.7715 57.0674 45.8613 55.1572 45.8613 52.8012ZM56.2898 51.0946C56.145 50.5723 55.9336 50.0703 55.6607 49.6016H58.9093L56.2898 51.0946ZM61.6662 37.8696H51.194V27.2042H59.8894L61.6662 37.8696ZM59.4269 25.0711H50.1275C49.5385 25.0711 49.0609 25.5487 49.0609 26.1377V38.9362C49.0609 39.5252 49.5385 40.0027 50.1275 40.0027H61.8595V42.1358H58.6598V44.2689H61.8595V47.4685H53.6578C51.519 46.0463 48.736 46.0463 46.5972 47.4685H22.7281C20.5893 46.0463 17.8063 46.0463 15.6674 47.4685H10.6654V43.2023H14.9316V41.0692H10.6654V40.0027H45.8613C46.4503 40.0027 46.9279 39.5252 46.9279 38.9362V22.938H58.8937L59.4269 25.0711ZM11.732 28.2707H20.2643V26.1377H11.732V24.0046H21.3308V21.8715H11.732V18.6719H17.0647V16.5388H11.732V13.3391H36.4457C36.7285 13.3402 36.9993 13.4527 37.1998 13.6516L44.4823 20.9341C44.6828 21.1341 44.7948 21.4059 44.7948 21.6892V37.8696H11.732V28.2707ZM13.6646 49.6016C13.4766 49.9255 13.3177 50.2661 13.1901 50.6181L12.1736 49.6016H13.6646ZM14.9316 52.8012C14.9316 50.4452 16.8418 48.535 19.1978 48.535C21.5537 48.535 23.4639 50.4452 23.4639 52.8012C23.4639 55.1572 21.5537 57.0674 19.1978 57.0674C16.8418 57.0674 14.9316 55.1572 14.9316 52.8012Z"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="64" height="64" fill="white"/>
            </clipPath>
            </defs>
        </svg>`,
        type: "svg"
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentMenuFilter = 'all';

/*===== UTILITY FUNCTIONS =====*/
const formatPrice = (price) => `$${price.toFixed(2)}`;
const updateCartCount = () => {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
};

/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            if(activeLink) {
                document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active-link'))
                activeLink.classList.add('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*===== DARK LIGHT THEME =====*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

if(themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}

/*===== DYNAMIC MENU GENERATION =====*/
function generateMenuItems(filter = 'all') {
    const menuContainer = document.querySelector('.menu__container')
    if (!menuContainer) return;

    const filteredMenu = filter === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === filter);

    menuContainer.innerHTML = filteredMenu.map(item => `
        <div class="menu__content" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="menu__img" onerror="this.src='assets/img/plate1.png'">
            <h3 class="menu__name">${item.name}</h3>
            <span class="menu__detail">${item.detail}</span>
            <span class="menu__preci">${formatPrice(item.price)}</span>
            <a href="#" class="button menu__button" data-item-id="${item.id}" aria-label="Add ${item.name} to cart">
                <i class='bx bx-cart-alt'></i>
            </a>
        </div>
    `).join('');

    // Add event listeners to cart buttons
    document.querySelectorAll('.menu__button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const itemId = parseInt(button.getAttribute('data-item-id'));
            addToCart(itemId);
        });
    });

    // Re-initialize scroll reveal for new items
    if (typeof ScrollReveal !== 'undefined') {
        sr.reveal('.menu__content', {interval: 100});
    }
}

/*===== ADD TO CART =====*/
function addToCart(itemId) {
    const item = menuData.find(menuItem => menuItem.id === itemId);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${item.name} added to cart!`);
}

/*===== REMOVE FROM CART =====*/
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (typeof updateCartUI === 'function') updateCartUI();
}

/*===== UPDATE CART QUANTITY =====*/
function updateCartQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            if (typeof updateCartUI === 'function') updateCartUI();
        }
    }
}

/*===== SHOW NOTIFICATION =====*/
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--first-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/*===== DYNAMIC SERVICES GENERATION =====*/
function generateServices() {
    const servicesContainer = document.querySelector('.services__container');
    if (!servicesContainer) return;

    servicesContainer.innerHTML = servicesData.map(service => {
        let iconHtml = '';
        if (service.type === 'svg' && service.svg) {
            iconHtml = service.svg;
        } else {
            iconHtml = `<i class='bx ${service.icon} services__img' style="font-size: 64px; color: var(--first-color);"></i>`;
        }
        return `
        <div class="services__content">
            ${iconHtml}
            <h3 class="services__title">${service.title}</h3>
            <p class="services__description">${service.description}</p>
        </div>
    `;
    }).join('');

    // Re-initialize scroll reveal
    if (typeof ScrollReveal !== 'undefined') {
        sr.reveal('.services__content', {interval: 100});
    }
}

/*===== MENU FILTER =====*/
function initMenuFilters() {
    const filterButtons = document.querySelectorAll('.menu-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            currentMenuFilter = filter;
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            generateMenuItems(filter);
        });
    });
}

/*===== SEARCH FUNCTIONALITY =====*/
function initSearch() {
    const searchInput = document.getElementById('menu-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const menuItems = document.querySelectorAll('.menu__content');
        
        menuItems.forEach(item => {
            const name = item.querySelector('.menu__name').textContent.toLowerCase();
            const detail = item.querySelector('.menu__detail').textContent.toLowerCase();
            
            if (name.includes(searchTerm) || detail.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

/*===== CART FUNCTIONALITY =====*/
function initCartButton() {
    const cartButton = document.getElementById('cart-button');
    if (cartButton) {
        cartButton.addEventListener('click', () => {
            showCartModal();
        });
    }
}

function showCartModal() {
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    modal.innerHTML = `
        <div style="background: var(--container-color); padding: 2rem; border-radius: 1rem; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="color: var(--title-color);">Shopping Cart</h2>
                <button id="close-cart" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-color);">&times;</button>
            </div>
            <div id="cart-items">
                ${cart.length === 0 
                    ? '<p style="text-align: center; color: var(--text-color);">Your cart is empty</p>'
                    : cart.map(item => `
                        <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid var(--text-color-light);">
                            <div>
                                <h4 style="color: var(--title-color); margin: 0 0 0.5rem 0;">${item.name}</h4>
                                <p style="color: var(--text-color); margin: 0;">${formatPrice(item.price)} x ${item.quantity}</p>
                            </div>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <button onclick="updateCartQuantity(${item.id}, -1)" style="background: var(--first-color); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">-</button>
                                <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                                <button onclick="updateCartQuantity(${item.id}, 1)" style="background: var(--first-color); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer;">+</button>
                                <button onclick="removeFromCart(${item.id})" style="background: #e74c3c; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer; margin-left: 1rem;">Remove</button>
                            </div>
                        </div>
                    `).join('')
                }
            </div>
            ${cart.length > 0 ? `
                <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid var(--first-color);">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                        <strong style="color: var(--title-color);">Total:</strong>
                        <strong style="color: var(--first-color);">${formatPrice(total)}</strong>
                    </div>
                    <button onclick="checkout()" style="width: 100%; padding: 1rem; background: var(--first-color); color: white; border: none; border-radius: 0.5rem; cursor: pointer; font-size: 1rem; font-weight: bold;">Checkout</button>
                </div>
            ` : ''}
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('close-cart').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function checkout() {
    if (cart.length === 0) return;
    alert(`Thank you for your order! Total: ${formatPrice(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0))}`);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    document.querySelector('.cart-modal')?.remove();
}

// Make functions globally available
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.checkout = checkout;

/*===== CONTACT FORM HANDLING =====*/
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        showNotification('Thank you! We will contact you soon.');
        contactForm.reset();
    });
}

/*===== ANIMATE NUMBERS =====*/
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = Math.round(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.round(start);
        }
    }, 16);
}

function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        });
        observer.observe(counter);
    });
}

/*===== SCROLL REVEAL ANIMATION =====*/
let sr;
if (typeof ScrollReveal !== 'undefined') {
    sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    });

    sr.reveal('.home__data, .about__img, .section__subtitle',{});
    sr.reveal('.home__img',{delay: 400}); 
    sr.reveal('.home__social',{delay: 600}); 
    sr.reveal('.about__data, .contact__button',{interval: 200}); 
    sr.reveal('.about__img',{delay: 200}); 
    sr.reveal('.services__content, .menu__content',{interval: 100}); 
    sr.reveal('.app__data',{interval: 100});
}

/*===== INITIALIZE ON DOM LOAD =====*/
document.addEventListener('DOMContentLoaded', () => {
    // Generate dynamic content
    generateMenuItems(currentMenuFilter);
    generateServices();
    
    // Initialize features
    updateCartCount();
    initMenuFilters();
    initSearch();
    initCartButton();
    initContactForm();
    initCounters();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
