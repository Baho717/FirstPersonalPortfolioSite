var app = document.querySelector('.typewriter');

var typewriter = new Typewriter(app, {
    loop: true
})

typewriter.typeString('Web Developer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Designer')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Creative')
    .pauseFor(2000)
    .deleteAll()
    .start();
// Tab toggle

var TabList = document.querySelectorAll('.nav-tabs .nav-item a');
TabList.forEach(function(e){
    var TabTrigger = new bootstrap.Tab(e)
    console.log(TabTrigger);
    e.addEventListener('click', function(e){
        e.preventDefault();
        TabTrigger.show(); 
    })
}) 


// isotope js


// Testimonial Slider


// Scroll to top


//Navbar


