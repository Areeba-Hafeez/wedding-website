let blogs = [
  {
      blogImage: './images/blog_1.jpg',
      about: 'A Complete Guide to Craft the Perfect Menu for Your Wedding.',
      blogLink: 'https://www.nabila.net/home-makeup-service-booking/',
      blogHeading: 'www.WeddingPlanner.com'
  },
  {
      blogImage: './images/blog_2.jpg',
      about: 'Unique Wedding Favors to Wow the Guests',
      blogLink: 'https://www.nabila.net/home-makeup-service-booking/',
      blogHeading: 'www.WeddingPlanner.com'
  },
  {
      blogImage: './images/blog_3.jpg',
      about: 'Top Beautiful Engagement Hairstyles for Brides 2024',
      blogLink: 'https://www.wedmegood.com/photos/engagement-hairstyles/',
      blogHeading: 'www.WeddingPlanner.com'
  },
  {
      blogImage: './images/blog_4.jpg',
      about: 'What are the Social Media Etiquettes While Attending Weddings',
      blogLink: 'https://www.goodhousekeeping.com/life/g19504286/wedding-etiquette-rules/',
      blogHeading: 'www.WeddingPlanner.com'
  },
  {
      blogImage: './images/blog_5.jpg',
      about: 'Tips to Make Wedding Planning with Divorced Parents Easy',
      blogLink: 'https://www.theknot.com/content/wedding-planning-with-divorced-parents/',
      blogHeading: 'www.WeddingPlanner.com'
  },
  {
      blogImage: './images/blog_7.jpg',
      about: 'Ultimate Guide to Host Your First Eid-ul-Adha Dinner as a Couple',
      blogLink: 'https://www.annum-munir.com/art/eid-party-ideas/',
      blogHeading: 'www.WeddingPlanner.com'
  },
  {
      blogImage: './images/blog_9.jpg',
      about: 'Ultimate Weight Loss Guide for all Brides-to-be',
      blogLink: 'https://www.healthifyme.com/blog/pre-wedding-diet-plan-for-every-bride-to-be/',
      blogHeading: 'www.WeddingPlanner.com'
  },
  {
      blogImage: './images/blog_11.jpg',
      about: 'Popular Mehndi Designs for Bridesmaids in 2024',
      blogLink: 'https://pakobserver.net/best-mehndi-designs-for-eid-2024-in-pakistan-see-pictures/',
      blogHeading: 'www.WeddingPlanner.com'
  },
  {
      blogImage: './images/blog_15.jpg',
      about: 'Popular Bridal dresses for Barat in 2024',
      blogLink: 'https://pakobserver.net/best-mehndi-designs-for-eid-2024-in-pakistan-see-pictures/',
      blogHeading: 'www.WeddingPlanner.com'
  },
];

const blogFunc = () => {
  let blogGalleryContainer = document.querySelector('.blog-content');
  let ourBlog = '';

  blogs.forEach(blog => {
      ourBlog += `
      <div class="col-lg-4 col-md-4  mt-5  ">
          <div class="card  blog-card text-center">
              <img src="${blog.blogImage}"  class="blog-image" alt="image is loading">
              <div class="card-body p-3" >
                  <p class="blog-text   blog-card-body  p-1">${blog.about}</p>
                  <a href="${blog.blogLink}" class="blogLink">Read more</a>
              </div>
              <span class="blog-heading">${blog.blogHeading}</span>
          </div>
      </div>
      `;
  });

  blogGalleryContainer.innerHTML = ourBlog;
};

blogFunc();
