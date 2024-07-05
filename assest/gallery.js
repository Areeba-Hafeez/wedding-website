let gallerys = [
    {
        galleryImage :'./assest/images/gal_1.jpg'
    },
    {
        galleryImage :'./assest/images/gal_2.jpg'
    },
    {
        galleryImage :'./assest/images/gal_3.jpg'
    },
    {
        galleryImage :'./assest/images/gal_4.jpg'
    },
    {
        galleryImage :'./assest/images/gal_5.jpg'
    },
    {
        galleryImage :'./assest/images/gal_6.jpg'
    },
    {
        galleryImage :'./assest/images/gal_7.jpg'
    },
    {
        galleryImage :'./assest/images/gal_8.jpg'
    },
    {
        galleryImage :'./assest/images/gal_9.jpg'
    },
    {
        galleryImage :'./assest/images/gal_10.jpg'
    },
    {
        galleryImage :'./assest/images/gal_11.jpg'
    },
    {
        galleryImage :'./assest/images/gal_12.jpg'
    },
    {
        galleryImage :'./assest/images/gal_13.jpg'
    },
    {
        galleryImage :'./assest/images/gal_14.jpg'
    },

    {
        galleryImage :'./assest/images/gal_15.jpg'
    },
    {
        galleryImage :'./assest/images/gal_12.jpg'
    },
    {
        galleryImage :'./assest/images/gal_17.jpg'
    },

    {
        galleryImage :'./assest/images/gal_18.jpg'
    },
    {
        galleryImage :'./assest/images/gal_19.jpg'
    },
    {
        galleryImage :'./assest/images/gal_20.jpg'
    },
    {
        galleryImage :'./assest/images/gal_21.jpg'
    },
    {
        galleryImage :'./assest/images/gal_22.jpg'
    },
    {
        galleryImage :'./assest/images/gal_23.jpg'
    },
    {
        galleryImage :'./assest/images/gal_24.jpg'
    },
    {
        galleryImage :'./assest/images/gal_25.jpg'
    },
    {
        galleryImage :'./assest/images/gal_30.jpg'
    },
    {
        galleryImage :'./assest/images/gal_29.jpg'
    },
    {
        galleryImage :'./assest/images/gal_27.jpg'
    },
    {
        galleryImage :'./assest/images/gal_31.jpg'
    },
   
    {
        galleryImage :'./assest/images/gal_32.jpg'
    },

 ]
 
    const  galleryFunc = () => {
         let PortfolioGalleryContainer =  document.querySelector("#galleryContainer");
           let ourGallery = ''
        gallerys.forEach(gallery =>{
          ourGallery += `
          <div class="inner-box">
            <img src = "${gallery.galleryImage}" alt="image is loading" />
          </div>
        `
        });
        PortfolioGalleryContainer.innerHTML = ourGallery;
    }
   galleryFunc();
