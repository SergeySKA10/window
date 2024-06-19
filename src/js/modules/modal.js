'use strict';
function closeModal() {
    const windows = document.querySelectorAll('[data-modal]');
    
    windows.forEach(item => {
        item.style.display = 'none';
    });
    document.body.style.overflow = '';
}

function openModal(selector, timerID) {
    const modal = document.querySelector(selector);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    if (timerID) {
        clearInterval(timerID);
    }
}

const modal = (timerID) => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);

        trigger.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (triggerSelector == '.popup_calc_button') {
                    const inputs = document.querySelectorAll('.popup_calc input');
                    let countInputValue = 0;
                    for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].value) {
                            countInputValue++;
                            inputs[i].style.border = '';
                        } else inputs[i].style.border = '1px solid red';
                    }
                    if (countInputValue === inputs.length)  {
                            inputs.forEach(item => item.style.border = '');
                            closeModal();
                            openModal(modalSelector);
                    }     

                } else if (triggerSelector == '.popup_calc_profile_button') {
                    const inputs = document.querySelectorAll('.checkbox');
                    let countInputValue = 0;
                    for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].checked) {
                            countInputValue++;
                            inputs[i].parentNode.style.border = '';
                        } else inputs[i].parentNode.style.border = '1px solid red';
                    }
                    if (countInputValue > 0)  {
                        inputs.forEach(item => {
                            item.parentNode.style.border = '';
                            item.checked = false;
                        });
                        closeModal();
                        openModal(modalSelector);
                    }
                } else {
                    closeModal();
                    openModal(modalSelector, timerID);
                }
            });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape') {
                closeModal();
            }
        });

        close.addEventListener('click', () => {
            closeModal();
        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close'); 
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modal;
export {closeModal, openModal};