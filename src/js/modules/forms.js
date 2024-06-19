'use strict';

import { closeModal } from "./modal";
import validateInput from "./validateInput";

const form = (state) => {
    const forms = document.querySelectorAll('form'),
          message = {
            loading: 'Загрузка',
            fail: 'Произошла ошибка',
            complite: 'Спасибо! Скоро с Вами свяжется наш специалист'
          },
          inputs = document.querySelectorAll('input');

    validateInput('input[name="user_phone"]');
    
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;

        const response = await fetch(url, {
            method: "POST",
            body: data
        });

        if (!response.ok) {
            throw new Error(`Could not fetch: ${url}, status: ${response.status}`);
        }

        return await response.text();
    }

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    }
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const status = document.createElement('div');
            status.classList.add('status');

            form.append(status);

            const formData = new FormData(form);

            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(data => {
                    status.textContent = message.complite;
                    console.log(data);
                })
                .catch(error => {
                    status.textContent = message.fail;
                    console.error(error);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        status.remove();
                        closeModal();
                        for (let key in state) {
                            delete state[key];
                        }
                        state.form = 0;
                        state.type = 'tree';
                    }, 3000);
                });
        });

            
    });
    

    
}

export default form;