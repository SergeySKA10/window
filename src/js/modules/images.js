'use strict';

const images = (scroll) => {
    const worksSpace = document.querySelector('.works'),
          imgPopup = document.createElement('div'),
          imgBig = document.createElement('img');

    imgPopup.classList.add('popup_images');
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgBig.style.cssText = `
        width: 500px;
        height: 500px;
    `;

    worksSpace.append(imgPopup);
    imgPopup.append(imgBig);

    worksSpace.addEventListener('click', (e) => {
        e.preventDefault();

        if(e.target && e.target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;

            let href = e.target.parentNode.getAttribute('href');
            imgBig.setAttribute('src', href);
        }

        if (e.target.matches('.popup_images')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
}

export default images;