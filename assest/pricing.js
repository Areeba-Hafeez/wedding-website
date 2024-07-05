
let Prices = [
    {
        weddingType: 'Lite',
        weddingBudget: 'In Low Budget',
        listItemFirst: 'Consultation Only',
        listItemSecond: 'Vendor Recommendations',
        listItemThird: 'Basic Decor',
        listItemFour: 'Day-of Coordination',
        listItemFive: 'Budget Planning',
        listItemSix: '',
        listItemSeven: '',
        listItemEight: '',
        listItemNine: '',
        listItemTen: '',
        listItemEleven: '',
        listItemTwelve: '',
        listItemThirteen: '',
        listItemFourteen: '',
        listItemFifteen: ''
    },
    {
        weddingType: 'Pro',
        weddingBudget: 'In Luxury Budget',
        listItemFirst: 'Destination Wedding',
        listItemSecond: 'Vendor Recommendations',
        listItemThird: 'Personalized Experience',
        listItemFour: 'Day-of Coordination',
        listItemFive: 'Luxury Venue Booking Planning',
        listItemSix: 'Rehearsal Coordination',
        listItemSeven: 'Full-Service Planning',
        listItemEight: 'High-End Decor and Design',
        listItemNine: 'Celebrity Entertainment',
        listItemTen: 'Detailed Decor Planning',
        listItemEleven: 'Concierge Services',
        listItemTwelve: 'On-Site Management',
        listItemThirteen: 'Exclusive Vendor Partnership',
        listItemFourteen: 'Multi-Day Events',
        listItemFifteen: 'Custom Invitations and Stationery'
    },
    {
        weddingType: 'Standard',
        weddingBudget: 'In High Budget',
        listItemFirst: 'Multi-Day Events',
        listItemSecond: 'Vendor Recommendations',
        listItemThird: 'Detailed Decor Planning',
        listItemFour: 'Day-of Coordination',
        listItemFive: 'Budget Planning',
        listItemSix: 'Rehearsal Coordination',
        listItemSeven: 'Full-Service Planning',
        listItemEight: 'Venue Selection',
        listItemNine: 'Guest Management',
        listItemTen: 'Detailed Decor Planning',
        listItemEleven: '',
        listItemTwelve: '',
        listItemThirteen: '',
        listItemFourteen: '',
        listItemFifteen: ''
    },
];


    let PricegalleryContainer = document.querySelector('.pricing-list-container');
    let ourPrice = '';

    Prices.forEach(Price => {
        ourPrice += `
            <div class="col-md-4   " id= "pricingList-content">
                <h2 class="m-2 text-center text-warning">${Price.weddingType}</h2>
                <h5 class="fs-1 m-3  text-center text-warning">${Price.weddingBudget}</h5>
                <ul>
                    <li>${Price.listItemFirst}</li>
                    <li>${Price.listItemSecond}</li>
                    <li>${Price.listItemThird}</li>
                    <li>${Price.listItemFour}</li>
                    <li>${Price.listItemFive}</li>
                    <li>${Price.listItemSix}</li>
                    <li>${Price.listItemSeven}</li>
                    <li>${Price.listItemEight}</li>
                    <li>${Price.listItemNine}</li>
                    <li>${Price.listItemTen}</li>
                    <li>${Price.listItemEleven}</li>
                    <li>${Price.listItemTwelve}</li>
                    <li>${Price.listItemThirteen}</li>
                    <li>${Price.listItemFourteen}</li>
                    <li>${Price.listItemFifteen}</li>
                </ul>
            </div>`;
    });

    PricegalleryContainer.innerHTML = ourPrice;


 


 

    

   
   
    
   