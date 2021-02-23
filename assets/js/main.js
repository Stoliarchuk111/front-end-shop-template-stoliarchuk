const buttonsContainer = document.querySelector('#content-container');
const cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;



const btnClickHandler = (e) => {

    const target = e.target;

    if (target && target.matches('.item-actions__cart')) {
        cartCounterLabel.innerHTML = `${++cartCounter}`;

        if (cartCounter === 1) cartCounterLabel.style.display = 'block';

        
    const mockData = +target
            .parentElement
            .previousElementSibling
            .innerHTML
            .replace(/^\$(\d+)\s\D+(\d+).*$/gm, '$1.$2');


    const restoreHTML = target.innerHTML;

            cartPrice = Math.round(cartPrice * 100 + mockData * 100) / 100;
            target.innerHTML = `Added $${cartPrice.toFixed(2)}`;

        buttonsContainer.removeEventListener('click', btnClickHandler);
        target.disabled = true;

        setTimeout(() => {
            target.disabled = false;
            buttonsContainer.addEventListener('click', btnClickHandler);
            target.innerHTML = restoreHTML;
        }, 2000);
    }
};

buttonsContainer.addEventListener('click', btnClickHandler);