AOS.init();
 const presente = document.querySelector('.presente')
 presente.addEventListener('mouseover',  function(){
    presente.classList.toggle('presente--active')
 });


    const birthday = new Date("April 01, 2024 19:00:00 ");
    const timestampBirthday = birthday.getTime();

    const timeCounter = setInterval(function(){
      
        const now = new Date();
       const timestampNow = now.getTime();
       
       const day = 24 * 60 * 60 * 1000;
       const hour = 60 * 60 * 1000;
       const min = 60 * 1000;
       const time = timestampBirthday - timestampNow;

       const dayUpTo = Math.floor(time / day);
       const hourUpTo = Math.floor((time % day) / hour);
       const minUpTo = Math.floor((time % hour) / min);
       const segUpTo =  Math.floor((time % min) / 1000);

       let counter = document.querySelector('.hero__counter__item');
        counter.innerText =  `${dayUpTo}d : ${hourUpTo}h : ${minUpTo}min : ${segUpTo}seg`;
       

        if(time < 0){
            clearInterval(timeCounter)
            counter.innerText = `Evento Terminado!` 
        }
    }, 1000)

