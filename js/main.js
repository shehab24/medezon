$('.multiple_items').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

var show_btn = document.querySelector(".show_popup_menu");
var close_btn = document.querySelector(".close_btn");


  // Get the element to hide
var box = document.querySelector('.mobile_menu_popup');

show_btn.addEventListener("click", function(e){
  e.stopPropagation();
  box.classList.add("active");
});

box.addEventListener("click", function(e){
  e.stopPropagation();
 
});

close_btn.addEventListener("click", function(e){
  box.classList.remove("active");
 
});




  document.addEventListener('click', function(e) {
   
   e.stopPropagation();
  if(box.classList.contains("active")){
    box.classList.remove("active");
  }
  
  });

// Add a click event listener to the document
// document.addEventListener('click', function(event) {
//   // Check if the click event occurred outside of the box element

//   alert("ds")

//  
// });
