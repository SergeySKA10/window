'use strict';

const tabs = (tabsSelector, contentsSelector, parentSelector, activeClass, display = 'block') => {

    
    const tabs = document.querySelectorAll(tabsSelector);
    const contents = document.querySelectorAll(contentsSelector);
    const parentTabs = document.querySelector(parentSelector);

    function hideTabsContent() {
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });

        contents.forEach(item => {
            item.style.display = 'none';
        })
    }

    function showTabs(i = 0) {
        contents[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabsContent();
    showTabs();

    parentTabs.addEventListener('click', (e) => {

        if (e.target &&
            e.target.classList.contains(tabsSelector.replace(/\./, '')) ||
            e.target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))
        ) {
            tabs.forEach((item, i) => {
                if (e.target === item || e.target.parentNode === item) {
                    hideTabsContent();
                    showTabs(i);
                }
            });
        }
    }); 
}



export default tabs;