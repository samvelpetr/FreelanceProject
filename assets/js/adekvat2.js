const faq = document.querySelector('#faq');
const shop = document.querySelector('#shop');


shop.onmousemove = (e) =>{
    let x = e.clientX;
    let y = e.clientY;
    shop.style.backgroundSize = 'unset';
    shop.style.backgroundPosition = `${x/10}% ${y/4}%`
}

shop.onmouseleave = (e) =>{
    shop.style.backgroundSize = '100%';
}

faq.onmousemove = (e) =>{
    let x = e.clientX;
    let y = e.clientY;
    faq.style.backgroundSize = 'unset';
    faq.style.backgroundPosition = `${x/10}% ${y/4}%`
}

faq.onmouseleave = (e) =>{
    faq.style.backgroundSize = '100%';
}