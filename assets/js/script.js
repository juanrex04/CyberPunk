window.onload = function (){
    window.addEventListener('scroll', function (e){
        if (window.pageYOffset > 90){
            document.querySelector("header").classList.add("is-scrolling");
        } else {
            document.querySelector("header").classList.remove("is-scrolling");
        }
    })
}