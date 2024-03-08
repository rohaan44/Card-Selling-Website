window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}







$(document).ready(function(){

$(".style2").click(function(){
  $('.hidden').toggle();
  
})




})

        // java

let  btn1 = document.querySelector(".inc")
let btn2 = document.querySelector(".dec")
let head =document.querySelector(".para")
let i=25
btn1.addEventListener("click", ()=>{
  head.innerText=i++
})
btn2.addEventListener("click", ()=>{
//document.querySelector("h1").innerText=i++
head.innerText=i--

})

 

           // Toggle the active class on burger click to show/hide the nav links
document.querySelector('.burger').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('active');
});
    //  S(document).ready(function () {
            // Get the modal
            var modal = document.getElementById('myModal');

            // Function to open the modal
            function openModal() {
              modal.style.display = "block";
            }
            
            // Function to close the modal
            function closeModal() {
              modal.style.display = "none";
            }
            
            // Close the modal when clicking outside of it
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }  
            
                  
                  
            