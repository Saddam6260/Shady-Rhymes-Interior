/*** show and hide cetagory peraghap ***/

const btns = document.querySelectorAll(".category-btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        console.log(e.currentTarget);
    })
})