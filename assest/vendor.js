
 let vendorgalleryContainerElement  = document.querySelector('.vendorContainer');

  let vendors = [
    {
        vendorImg :'./assest/images/von_1.jpg',
        vendorTitle :'Beauty Tale by Hina Furqan',
        vendorText:'Our bridal makeup services promise a flawless look for your special ',
        vendorPrice:'1,00000'

    },
    {
        vendorImg :'./assest/images/von_2.jpg',
        vendorTitle :'Floral decor by Asim',
        vendorText:'Our floral decoration services create stunning arrangements that make your special day',
        vendorPrice:'40,000'

    },

    {
        vendorImg :'./assest/images/von_3.jpg',
        vendorTitle :'Event Planing by mahmood ',
        vendorText:'Our event planner service  handling every detail from start to finish with expertise and care.',
        vendorPrice:'90,000'

    },
    {
        vendorImg :'./assest/images/von_4.jpg',
        vendorTitle :'Photography by Hamza malik ',
        vendorText:"Our photographer service captures  your  every precious moment ",
        vendorPrice:'55,000'

    },
    {
        vendorImg :'./assest/images/von_7.jpg',
        vendorTitle :'Music by Fozia Iqbal ',
        vendorText:"Our  Ctaering service make  healthy special day   h",
        vendorPrice:'75,000'

    },

    {
        vendorImg :'./assest/images/von_6.jpg',
        vendorTitle :'Caterer by Huzaima ',
        vendorText:"Our music service provides the perfect soundtrack for your event",
        vendorPrice:'42,000'

    },

  ]

   let ourVendor = '';
  vendors.forEach(vendor =>{

     ourVendor += `
         <div class="col-lg-4 col-md-6  ">
                <div class="card    vendor-card  text-center">
                    <img src="${vendor.vendorImg}"   class= "card-image-top" alt="image is loading">
                    <div class="card-body">
                      <h5 class="card-title">${vendor.vendorTitle}</h5>
                      <p class="card-text">${vendor.vendorText}</p>
                    <h3 class="vendors-price">${vendor.vendorPrice}</h3>
                    </div>
                  </div>
            </div>
    
    
        
          `


  });

  vendorgalleryContainerElement.innerHTML = ourVendor;
