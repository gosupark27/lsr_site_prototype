const galleryItems = [
    {
        image: "assets/gallery/black_kneehigh_boots.jpg",
        alt: "Women's black knee high boots",
        title: "Women boots",
        category: "footwear"
    },
    {
        image: "assets/gallery/black_louboutin_solepro.jpg",
        alt: "Louboutin protective sole repair",
        title: "Louboutin Sole Protection",
        category: "footwear"
    },
    {
        image: "assets/gallery/cowboy_boots_triplets.jpg",
        alt: "Three pairs of Men cowboy boots",
        title: "Men cowboy boots",
        category: "footwear"
    },
    {
        image: "assets/gallery/dyed_gun_holster.jpg",
        alt: "Dyed gun holster two-tone with the black",
        title: "Leather Holster Dye Work",
        category: "specialty"
    },
    {
        image: "assets/gallery/gucci_bkpk.jpg",
        alt: "Gucci backpack",
        title: "Gucci backpack",
        category: "bags"
    },
    {
        image: "assets/gallery/gucci_clean.jpg",
        alt: "Gucci mules",
        title: "Gucci Cleaning",
        category: "footwear"
    },
    {
        image: "assets/gallery/Gucci_GG_Marmont_Mini_Camera_Bag.jpg",
        alt: "Gucci mini camera bag",
        title: "Gucci mini camera bag",
        category: "bags"
    },
    {
        image: "assets/gallery/louboutin_prosole.jpg",
        alt: "Louboutin protective sole repair",
        title: "Louboutin Sole Protection",
        category: "footwear"
    },
    {
        image: "assets/gallery/men_timbs.jpg",
        alt: "Men Timberland boots",
        title: "Men Timberland boots",
        category: "footwear"
    },
    {
        image: "assets/gallery/tumi_briefcase.jpg",
        alt: "Brown Tumi leather briefcase",
        title: "Brown Tumi leather briefcase",
        category: "luggage"
    },
    {
        image: "assets/gallery/valentino_crossbody.jpg",
        alt: "Black Valentino crossbody",
        title: "Black Valentino crossbody",
        category: "bags"
    }
]

const galleryGrid = document.querySelector("#gallery-grid");
const filterButtons = document.querySelectorAll(".gallery-filter");

function renderGallery(items) {
    const galleryMarkup = items.map((item) => {
        return `
            <figure class="gallery-card">

                <div class="gallery-image-wrapper">
                    <img
                        src="${item.image}"
                        alt="${item.alt}"
                        class="gallery-image"
                        loading="lazy"
                    >
                </div>

                <figcaption class="gallery-caption">
                    <h3 class="gallery-card-title">
                        ${item.title}
                    </h3>
                </figcaption>

            </figure>
            `;
        }).join("");
    
        galleryGrid.innerHTML = galleryMarkup;
}

renderGallery(galleryItems);

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedCategory = button.dataset.category;

        const filteredItems = 
            selectedCategory === "all"
                ? galleryItems
                : galleryItems.filter((item) => {
                    return item.category === selectedCategory;
                });
        
        renderGallery(filteredItems);

        filterButtons.forEach((filterButton) => {
            filterButton.classList.remove("active");
            filterButton.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
    });
});

const reviews = [
    {
        name: "Rik Sollis",
        rating: 5,
        text: "Best place on the west side to get Alterations, jackets zippers, leather purses 👜, shoes 👞 Had a zipper replaced on a favorite Jacket of mine . Excellent job 💯. My wife had a Coach Purse Handle that had been torn from our Dog & was fixed W/ no issues.Need a repair , this is the place …",
        source: "Google"
    },
    {
        name: "Frederick McClure",
        rating: 5,
        text: "Airline damaged large soft-sided suitcase, ripping loose a seam on it. One luggage repair shop in Sun City West, AZ, said that they couldn't repair it.",
        source: "Google"
    },
    {
        name: "Old West Tattoo",
        rating: 5,
        text: "GREAT EXPERIENCE!  I recently stopped in to have new soles done for my Moc Toe boots.  They are all I wear whether I am working at the tattoo shop or doing yard work or working on my truck on my day off.  I want to spend locally and I remembered this shop being in the plaza when I was a kid so I checked it out.  Great price, and a quick turnaround. I even left another pair of boots with them when I picked up first pair.  Highly recommend!  Thank you!!!!",
        source: "Google"
    },
    {
        name: "Jeremy Burmeister",
        rating: 5,
        text: "I had a boot with the bottom heel that fell off and I took it to this shop. She did excellent work and got it back on and it's solid and holding. Like it never broke off. The price was only $15. I paid it upfront and thought it was just a deposit and was expecting to pay more when I picked up my boot. Will definitely be coming back if I need anything else repaired. She also repairs luggage, bags, and many other items. Wait time was a week. Thank you",
        source: "Google"
    },
    {
        name: "Brenda W.",
        rating: 5,
        text: "I have a Coach purse that I absolutely love and it needed repaired. It took awhile for the hardware to be delivered. After picking it up, looks good as new and I'm very impressed with the work that was done. Definitely will do business with them again.",
        source: "Yelp"
    },
    {
        name: "Erica W.",
        rating: 5,
        text: "They repaired the zipper on one of my favorite purses! So happy with the outcome, will definitely be back if I need future repairs. Nice family own business",
        source: "Yelp"
    },
    {
        name: "Netta S.",
        rating: 5,
        text: "First, thank you to the others who left reviews for this business!! I usually go to a place in Scottsdale but decided to give Lee's a try after seeing the reviews. So glad I did!! She was so friendly and help me think of a resolution for a pair of shoes I adore. She explained the whole process beforehand and had them sitting ready to go when I came to pick them up. Just know she wants at least 50% of the cost prior to starting the work but that makes complete sense to me so I had no problem with her asking me to do so.",
        source: "Yelp"
    },
]

const reviewsGrid = document.querySelector("#reviews-grid");

function renderReviews(items) {

    const reviewsMarkup = items
        .map((review) => {

            const stars = "★".repeat(review.rating);

            return `
                <article class="review-card">

                    <div
                        class="review-stars"
                        aria-label="${review.rating} out of 5 stars"
                    >
                        ${stars}
                    </div>

                    <blockquote class="review-quote">
                        <p>
                            "${review.text}"
                        </p>
                    </blockquote>

                    <div class="review-author">
                        <p class="review-name">
                            ${review.name}
                        </p>

                        <p class="review-source">
                            ${review.source} Review
                        </p>

                    </div>

                </article>
            `
        })
        .join("");

    reviewsGrid.innerHTML = reviewsMarkup;
}

renderReviews(reviews);