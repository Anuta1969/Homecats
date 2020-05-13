
window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');
 
    showSlides(slideIndex);

  function showSlides(n) {

      if (n > 3) {
  
          slideIndex = 1;
      }

      if (n < 1) {
          slideIndex = 3;
      }

  slides.forEach((item) => item.style.display = 'none'); 

    slides[slideIndex - 1 ].style.display = 'block';
     slides[slideIndex + 2].style.display = 'block';
     slides[slideIndex + 5].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
      
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }



    prev.addEventListener('click', function() {
        plusSlides(-1);

    });

    

    next.addEventListener('click', function() {
        plusSlides(1);

    });


    



let slideIndex2 = 1,
slides2 = document.querySelectorAll('.slider-item2'),
prev2 = document.querySelector('.prev2'),
next2 = document.querySelector('.next2');
showSlides2(slideIndex2);

function showSlides2(n) {

  if (n > slides.length/3) {
      slideIndex2 = 1;
  }

  if (n < 1) {
      slideIndex2 = slides.length/3;
  }

slides2.forEach((item) => item.style.display = 'none'); 

slides2[slideIndex2 - 1].style.display = 'block';
slides2[slideIndex2 + 2].style.display = 'block';
slides2[slideIndex2 + 5
 ].style.display = 'block';
}

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}
function currentSlide(n) {
    showSlides2(slideIndex2 = n);
}



prev2.addEventListener('click', function() {
    plusSlides2(-1);

});

next2.addEventListener('click', function() {
    plusSlides2(1);

});

})

//это не работает почему-тексто

// function validateForms(form){
//     $(form).validate({
//         rules: {
//             name: {
//                 required: true,
//                 minlength: 2
//             },
//             phone: "required",
//         },
//         messages: {
//             name: {
//                 required: "Пожалуйста, введите свое имя",
//                 minlength: jQuery.validator.format("Введите {0} символа!")
//               },
//             phone: "Пожалуйста, введите свой номер телефона",
            
//         }
//     });
// };

// validateForms('#order-form1');

// validateForms('#order-form2');

// validateForms('#order-form3');

// $('input[name=phone]').mask("+7 (999) 999-99-99");

let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.feed-form__order'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let formData = new FormData(form);


    let obj ={};
    formData.forEach(function(value, key) {

        obj[key] = value;

    });
    let json = JSON.stringify(obj);

    //request.send(formData);

    request.send(json);
    
    request.addEventListener('readystatechange', function() {

        if (request.readyState < 4) {

                statusMessage.innerHTML = message.loading;
        }   else if (request.readyState === 4 && request.status == 200) {

            statusMessage.innerHTML = message.sucess;

        }   else {
            statusMessage.innerHTML = message.failure;

        }


    });

    for (let i = 0; i < input.length; i++) {

        input[i].value = '';

    }
});