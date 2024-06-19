'use strict';

const timer = (selector, deadline) => {
    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date);

        const days = Math.floor(total / (1000*60*60*24)),
              hours = Math.floor((total / (1000*60*60)) % 24),
              minutes = Math.floor((total / (1000*60)) % 60),
              seconds = Math.floor((total / 1000) % 60);

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        }
    }

    const addZero = (num) => {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();
        
        function updateClock() {
            const time = getTimeRemaining(endtime);

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        } 
    }

    setClock(selector, deadline);
}

export default timer;