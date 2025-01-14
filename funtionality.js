//the written date https://codepen.io/samrawks/pen/OBwGdK
window.onload = () => {
  const options = {
    '1': { weekday: 'long' },
    '2': { day: 'numeric' },
    '3': { month: 'long' }
  }

  function dateOptions(number) {
    return new Date().toLocaleDateString('en-GB', options[number]);
  }
    //function to display dates with th, excluding 1, 2, 3 which have their own string at the end.
  function ordinal() {
    var day = new Date().getDate();
    switch(day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  document.querySelector('.date').innerHTML = `${dateOptions(1)}, ${dateOptions(2)}${ordinal()} ${dateOptions(3)}`;
};
//JavaScript carousel activate

$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});

// When the user scrolls down 100px from the top of the document, show the button "Up", otherwise it should not be displayed.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Only needed when the height of the modal changes while it is open.
$('#myModal').modal('handleUpdate')

//Tooltip to acces home page by clicking the logo, this is useful in the tablet/mobile version, as it takes longer to acces the menu, Is a boostrap component//

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});







