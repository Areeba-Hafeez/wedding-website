const Venues = [

    {
        id:'001',
   venueImage: './assest/images/ven_1.jpg',
   venueArea :'Clifton Block-4 (Boat Basin)',
   venuePlace:'Karachi', 
   description:"Ample space to comfortably host large gatherings"
    },
    {
        id:'002',
   venueImage: './assest/images/ven_2.jpg',
   venueArea :'North Nazimabad',
   venuePlace:'Karachi' ,
    description:" Elegant and customizable decorations to match your theme."
    },
    {
        id:'003',
   venueImage: './assest/images/ven_3.jpg',
   venueArea :'Lohare society',
   venuePlace:'Lahore', 
    description:"Secure parking and luxurious bridal suites."
    },
    {
        id:'004',
   venueImage: './assest/images/ven_4.jpg',
   venueArea :'Barans Road',
   venuePlace:'Quetta' ,
   description:"Advanced audio-visual systems for seamless entertainment."
    },
    {
        id:'005',
   venueImage: './assest/images/ven_5.jpg',
   venueArea :'Jinnah Town',
   venuePlace:'Quetta' ,
   description:" Easily accessible facilities for guests with special needss"
    },
    {
        id:'006',
   venueImage: './assest/images/ven_6.jpg',
   venueArea :'Alamdar Road',
   venuePlace:'Lahore' ,
   description:"Plenty of parking space for all your guests"
    },
    {
        id:'007',
   venueImage: './assest/images/ven_7.jpg',
   venueArea :'Gulsions Iqbal',
   venuePlace:'Karachi',
   description: "Versatile spaces tailored to your needs"
    },
    {
        id:'008',
   venueImage: './assest/images/ven_8.jpg',
    venueArea :'DHA Phase 6',
    venuePlace:'Lahore' ,
    description: "Flexible wedding packages tailored to fit your specific needs and budget."
    },
    {
        id:'009',
   venueImage: './assest/images/ven_18.jpg',
    venueArea :'Shah Rukn-e-Alam Colony',
    venuePlace:'Karachi',
     description: " Prime locations with picturesque settings."

    },
    {
        id:'010',
   venueImage: './assest/images/ven_10.jpg',
    venueArea :'Bosan Road',
    venuePlace:'Multan' ,
     description: "Versatile spaces tailored to your needs.."
    },
    {
        id:'011',
   venueImage: './assest/images/ven_11.jpg',
    venuePlace:'Multan',
    venueArea :'Oranga bad',
    
    },
    
    {
        id:'013',
   venueImage: './assest/images/ven_13.jpg',
    venueArea :'Bahria Town',
    venuePlace:'Lahore', 
     description: "Elegant décor and modern amenities"
    },
    {
        id:'012',
   venueImage: './assest/images/ven_12.jpg',
    venueArea :'Defence Housing Authority (DHA):',
    venuePlace:'Karachi',
     description: "Elegant décor and modern amenities."

    },
    {
        id:'014',
   venueImage: './assest/images/ven_14.jpg',
   venueArea :'Humaria Society:',
    venuePlace:'Lahore',
    description: "Gourmet catering and professional staff.."

  

    },
    {
        id:'014',
   venueImage: './assest/images/ven_19.jpg',
   venueArea :'Magan Chorangi',
    venuePlace:'Quetta',
    description: " Experienced event coordinators and support staff dedicated to ensuring every detail is perfect"

  

    },
    {
        id:'014',
   venueImage: './assest/images/ven_17.jpg',
   venueArea :'Wapda Town:',
    venuePlace:'Lahore',
    description: "Elegant décor and modern amenities."

  

    },
    {
        id:'014',
   venueImage: './assest/images/ven_9.jpg',
   venueArea :'Karsaz',
    venuePlace:'Karachi',
    description: "Gourmet catering and professional staff.."

  

    },
    {
        id:'014',
   venueImage: './assest/images/ven_20.jpg',
   venueArea :'Gulsion Iqbal',
    venuePlace:'Multan',
    description: " Experienced event coordinators and support staff dedicated to ensuring every detail is perfect"
    },
    {
        id:'014',
   venueImage: './assest/images/ven_21.jpg',
   venueArea :'Oranga bad:',
    venuePlace:'Karachi',
    description: "Commitment to sustainability practices to minimize environmental impact."

    },
    
    {
        id:'014',
   venueImage: './assest/images/ven_22.jpg',
   venueArea :'Wapda Town:',
    venuePlace:'Lahore',
    description: "Secure parking and bridal suites..."

  

    },
]

 const venueFunc = () =>{
     let venueGalleryContainer = document.querySelector('#venueContainer');
    let  ourVenue  = ''
    Venues.forEach(Venue =>{
          ourVenue += `
           <div class="inner-box   venue-box">
             <img src="${Venue.venueImage}" class="img-fluid"  alt="image is loading">
             <div class="venue-info">
              <span>${Venue.venuePlace}</span>
               <p class="text-white fs-1  text-danger"  >${Venue.venueArea}</p>
               <p class="text-white fs-1"  >${Venue.description}</p>
             </div>
          </div>
          `
    });
      venueGalleryContainer.innerHTML = ourVenue;
 }
 venueFunc();
  