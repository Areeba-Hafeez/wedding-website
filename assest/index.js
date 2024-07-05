const customers = [
    {
        customerImage:'./assest/images/gir_dp3.jpg',         
        customerName:'Syeda fatima',
        customerComments:"Quick  delivery service. My shoes arrived earlier than anticipated"
    },  
    {
        customerImage:'./assest/images/man_dp1.jpg',         
        customerName:'Mahmood',
        customerComments:"Quick  delivery service. My shoes arrived earlier than anticipated"
    },    
    {
        customerImage:'./assest/images/gir_dp3.jpg',         
        customerName:'Mahnoor',
        customerComments:"Quick  delivery service. My shoes arrived earlier than anticipated"
    },    
    {
        customerImage:'./assest/images/gir_dp2.jpg',         
        customerName:'Fozia Shahid',
        customerComments:"Quick  delivery service. My shoes arrived earlier than anticipated"
    },   
    {
        customerImage:'./assest/images/man_dp2.jpg',         
        customerName:'Fawad Khan',
        customerComments:"Quick  delivery service. My shoes arrived earlier than anticipated"
    },    
    
{
   customerImage:'./assest/images/girl_dp1.jpg',        
    customerName:'Mehwish',         
    customerComments:"The delivery was super fast, and the shoes are just perfect!."     
},
    
{
    customerImage:'./assest/images/man_dp4.jpg',        
     customerName:"Aaliyan",         
     customerComments:"The delivery was super fast, and the shoes are just perfect!."     
 },
{
    customerImage:'./assest/images/man_dp3.jpg',         
    customerName:'Kamran',
    customerComments:"Quick  delivery service. My shoes arrived earlier than anticipated"
},    
];
 let custgallerycontainerElement = document.querySelector(".customer");
let review = '';
     customers.forEach(customer => {
       review += `
           <div class="  col-lg-4  col-md-6  col-sm-12 text-center customer-content">
               <div class="profile-image">
                    <img src="${customer.customerImage} " alt="image is loading">
                    <strong class="fs-2  m-3">${customer.customerName}</strong>               
             </div>
                <div class="like mt-5">
                    <i class="fa-sharp fa-solid fa-star fs-1" id="star"></i>
                     <i class="fa-sharp fa-solid fa-star fs-1" id="star"></i>
                    <i class="fa-sharp fa-solid fa-star fs-1" id="star"></i>
                    <i class="fa-sharp fa-solid fa-star fs-1" id="star"></i>
                  <i class="fa-solid fa-star-half-stroke" id="star" ></i>
                </div>
                <div class="comment">
                    <p>${customer.customerComments}</p>               
                      </div>
            </div>`;
     });
 custgallerycontainerElement.innerHTML = review;


