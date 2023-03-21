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
var grid  = document.querySelector('.grid');
var iso;

imagesLoaded(grid, function(){
iso = new Isotope(grid, {
    itemSelector: '.grid-item',
    layoutMode: 'masonry'
})
});

// Testimonial Slider


// Scroll to top


//Navbar


