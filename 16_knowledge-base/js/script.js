//Select

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false
});



document.querySelector('.choices__inner').classList.add('choices__inner-toggle');

// Map

ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [48.87221569451269, 2.3541800858743356],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        myGeoObject = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: '10:00-20:00'
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/Subtract.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
        });
    myPlacemark = new ymaps.Placemark([], {
            hintContent: 'Отели',
            balloonContent: 'июль',
            iconContent: '12'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: './img/Subtract.svg',
            iconImageSize: [48, 48],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout,
        }),
        myMap.geoObjects.add(myGeoObject);
});

//Scroll

document.querySelectorAll('.scroll').forEach(el => {
    new SimpleBar(el)
});


// Form


const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

new window.JustValidate('.form', {
    rules: {
        tel: {
            required: true,
            function: () => {
                const phone = telSelector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        }
    },
    colorWrong: '#ff5c00',
    messages: {
        name: {
            required: 'Как вас зовут?',
            minLength: 'Введите 3 и более символов',
            maxLength: 'Запрещено вводить более 15 символов'
        },
        email: {
            email: 'Укажите ваш e-mail',
            required: 'Введите email'
        },
        tel: {
            required: 'Укажите ваш телефон',
            function: 'Здесь должно быть 10 символов без +7'
        }
    },
    submitHandler: function(thisForm) {
        let formData = new FormData(thisForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Отправлено');
                }
            }
        }
        thisForm.reset();
    }
});