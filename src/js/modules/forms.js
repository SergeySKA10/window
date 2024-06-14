'use strict';

import { closeModal } from "./modal";

const form = () => {
    const forms = document.querySelectorAll('form'),
          message = {
            loading: 'Загрузка',
            fail: 'Произошла ошибка',
            complite: 'Спасибо! Скоро с Вами свяжется наш специалист'
          },
          inputs = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    })
    
    const postData = async (url, form) => {
        document.querySelector('.status').textContent = message.loading;

        const formData = new FormData(form),
              response = await fetch(url, {
            method: "POST",
            body: formData
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

            postData('assets/server.php', form)
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
                    setTimeout(() => status.remove(), 3000);
                })
        });

            
    });
    

    
}

export default form;