document.getElementById("decision-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const preference = document.getElementById("preference").value;
    const activity = document.getElementById("activity").value;
    const budget = document.getElementById("budget").value;

    const destinations = {
        Beach: {
            Adventure: {
                Low: "Go surfing in Goa, India! Affordable and thrilling adventures await you.",
                Medium: "Visit Bali, Indonesia! Enjoy water sports and cultural exploration.",
                High: "Experience luxury in the Maldives with private beaches and diving."
            },
            Relaxation: {
                Low: "Relax on the serene beaches of Koh Samui, Thailand on a budget.",
                Medium: "Unwind in Santorini, Greece with its iconic whitewashed buildings.",
                High: "Indulge in Bora Bora, French Polynesia, for ultimate relaxation."
            }
        },
        Mountains: {
            Adventure: {
                Low: "Trek the Himalayan trails in Nepal for a budget-friendly adventure.",
                Medium: "Explore Banff National Park, Canada, with its stunning landscapes.",
                High: "Go mountaineering in the Swiss Alps with premium guides and stays."
            },
            Relaxation: {
                Low: "Enjoy the peaceful hill stations of Munnar, India.",
                Medium: "Experience the serene beauty of Lake Tahoe, USA.",
                High: "Stay at luxury chalets in Zermatt, Switzerland."
            }
        }
    };

    const recommendation = destinations[preference][activity][budget];

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${recommendation}</p>`;


    
});





const menuIcon = document.getElementById("menu-icon");
const mobileMenuCard = document.getElementById("mobile-menu-card");
const closeMobileMenuCard = document.getElementById("close-mobile-menu-card");

menuIcon.addEventListener("click", () => {
    mobileMenuCard.style.display = "block";
});

closeMobileMenuCard.addEventListener("click", () => {
    mobileMenuCard.style.display = "none";
});



