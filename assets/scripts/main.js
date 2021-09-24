// Selectors
const imgsTestemounial = Array.from( document.querySelectorAll( ".testimonial-img img" ) )
const displyTestimonialImg = document.querySelector(".disply-testimonial-img img ")
const arrowTestemonial = document.querySelector( ".arrow-testemonial" );
const navBrand = document.querySelector( ".navbar-brand img" )
const scrollUp = document.getElementById( "scroll-up" );
const counterNamber = Array.from( document.querySelectorAll( ".counter" ));
let currentIndex = 0;





// Scroll Up Button
window.addEventListener( "scroll", () => {
     this.scrollY >= 150 ? scrollUp.classList.add( "show" ) : scrollUp.classList.remove( "show" );
})

scrollUp.addEventListener( "click", () => {
     window.scrollTo( {
          top: 0,
          behavior: "smooth",
     } )
})

// NavBar Toggel
window.addEventListener( "scroll", () => {
     let navBar = document.querySelector( ".navbar" );
     let srcImg = "assets/imges/dark-logo.png";
     if (this.scrollY >= 2) {
          navBar.classList.add( "scroll-nav" )
          navBrand.src = srcImg 
     
     }else {
          navBar.classList.remove( "scroll-nav" )
          navBrand.src = "assets/imges/lite-logo.png";

     }
})




// Testemounial Function
for ( let i = 0; i < imgsTestemounial.length; i++) {

     imgsTestemounial[ i ].addEventListener( "click", (e) => {
          
          currentIndex = imgsTestemounial.indexOf( e.target )

          let imgSrc = e.target.getAttribute( "src" );
          setTimeout(()=> {
               displyTestimonialImg.setAttribute( "src", imgSrc )
          }, 400)

     })
}
// Owl Carousel Function
$( '.owl-one' ).owlCarousel( {
     loop: true,
     margin: 10,
     responsiveClass: true,
     dots: false,
     nav: true,
     responsive: {
          0: {
               items: 1,
               nav: true
          },
          499: {
               items: 1,
               nav: true
          },
          500: {
               items: 2,
               nav: true
          },
          700: {
               items: 3,
               nav: false
          },
          1000: {
               items: 4,
               loop: true
          }
     }
} )
$( '.owl-two' ).owlCarousel( {
     loop: true,
     margin: 10,
     dots: false,
     items: 4,
     loop: true,
     autoplay: true,
     autoplayTimeout: 2000,
     autoplayHoverPause: true,
     responsiveClass: true,
     responsive: {
          0: {
               items: 1,
               nav: true
          },
          499: {
               items: 1,
               nav: true
          },
          500: {
               items: 2,
               nav: true
          },
          1000: {
               items: 3,
               nav: true,
               loop: true
          }
     }
} )



// Animation 

const animation = ScrollReveal( {
     distance: '60px',
     duration: 3000,
} )
animation.reveal( `.about-content`, {
     origin: 'top',
     interval: 100,
} )

animation.reveal( `.subtitele-home , .img-about , .pages-content , .content`, {
     origin: 'left',
} )

animation.reveal( `.pages-img , footer`, {
     origin: 'right',
     interval: 100,
} )
