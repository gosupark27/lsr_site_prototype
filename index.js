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