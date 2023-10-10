 const Frontend = document.getElementById('frontend');
 const Backend = document.getElementById('backend');
 const image = document.getElementById('image');

 Frontend.addEventListener("click",()=>{
     image.src = "images/frontend.gif";
      Frontend.classList.toggle('active');
      Backend.classList.remove('active');
    
 });

 Backend.addEventListener("click",()=>{
    image.src = "images/backend.gif";
    Backend.classList.toggle('active');
    Frontend.classList.remove('active');
 });
 //menu-bar toggle js
 var sidebar = new bootstrap.Tab(document.querySelector('#sidebar'));
 document.querySelector('#toggle-sidebar').addEventListener('click', function() {
   sidebar.toggle();
 });
 
 
