document.addEventListener('DOMContentLoaded', function() {


    document.querySelector(".header__button-open").addEventListener("click", function() {
        document.querySelector(".header__nav").classList.add("active");
    });
    document.querySelector(".nav__close").addEventListener("click", function() {
        document.querySelector(".header__nav").classList.remove("active");
    });

    document.querySelector(".burger").addEventListener("click", function() {
        this.classList.toggle("active");
    });




    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(e) {
            const path = e.currentTarget.dataset.path;
            document.querySelectorAll('.tabs__btn').forEach(function(btn) {
                btn.classList.remove('tabs__btn-active')
            });
            e.currentTarget.classList.add('tabs__btn-active');
            document.querySelectorAll('.tab-content').forEach(function(tabsBtn) {
                tabsBtn.classList.remove('tab-content-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
        });
    });


    $(function() {
        $("#accordion").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
    });
});



function searchToggle(obj, evt) {
    var container = $(obj).closest('.search__box');
    if (!container.hasClass('active')) {
        container.addClass('active');
        evt.preventDefault();
    } else if (container.hasClass('active') && $(obj).closest('.closed').length == 0) {
        container.removeClass('active');
        container.find('.closed').val('');
    }
};




const newLocal = ".swiper__container";
var swiper = new Swiper(newLocal, {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
