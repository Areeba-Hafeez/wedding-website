 let homeBanner = document.querySelector("#banner");
  let menuBar = document.querySelector("#menu-bars");
   let navBar = document.querySelector(".navbar")
    let form = document.querySelector("#form")

    menuBar.addEventListener("click", ()=>{
    
       menuBar.classList.toggle("fa-times")
       navBar.classList.toggle("active")
    })

//   subscribe btn validation
 let SubscribeButton = document.querySelector(".Subscribe-button");

 SubscribeButton.addEventListener('click', () => {
   let input = document.querySelector(".input");
   let email = input.value;
   
   // Regular expression for validating an Email
   let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 
   if (emailPattern.test(email)) {
     alert("Thank you for subscribing to us!");
     input.value = "";
   } else {
     alert("Please enter a valid email address.");
   }
 });

// ===========================================
//  link activation
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
      if (link.href.includes(`${activePage}`)) {
         link.classList.add("active");
      }
  });
  
   

   
  let Login = document.querySelector(".login");
    let    userIcon = document.querySelector("#user");
    userIcon.addEventListener("click", function(){
       if(Login.classList.contains('hide')){
           Login.classList.remove("hide");
       } else{
            Login.classList.add("hide");
       }    
  
    });
    
 
       
       homeBanner.addEventListener("click" , ()=>{
        Login.classList.add("hide");
        sign-form.classList.add("hide");
        
      });
      homeBanner()

   
  
       
 
      