// Optional: Add a scroll effect for navbar background change
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    function checkVisibility() {
        features.forEach((feature) => {
            const position = feature.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                feature.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    testimonials.forEach((testimonial) => {
        observer.observe(testimonial);
    });
});



//carss search
document.addEventListener("DOMContentLoaded", function () {
    // Example available cars
    let availableCars = ["mercedes", "bmw", "audi", "toyota", "bmx","nissan"];

    // Function to filter available cars
    window.filterCars = function () {
        let searchInput = document.getElementById("carSearch").value.toLowerCase();
        let carList = document.getElementById("carList");

        carList.innerHTML = ""; // Clear previous search results

        let filteredCars = availableCars.filter(car => car.includes(searchInput));

        if (filteredCars.length === 0) {
            carList.innerHTML = "<p class='not-found'>No available cars found.</p>";
            return;
        }

        filteredCars.forEach(car => {
            let carItem = document.createElement("div");
            carItem.classList.add("car-item");
            carItem.innerHTML = `<p>${car.toUpperCase()}</p>`;
            carItem.onclick = () => showPackages(car);
            carList.appendChild(carItem);
        });
    };

    // Function to show packages
    window.showPackages = function (car) {
        document.getElementById("searchSection").style.display = "none"; 
        document.getElementById("carList").style.display = "none"; 
        document.getElementById("packageSection").classList.remove("hidden");
    };

    // Function to go back to car search
    window.goBack = function () {
        document.getElementById("searchSection").style.display = "block"; 
        document.getElementById("carList").style.display = "block"; 
        document.getElementById("packageSection").classList.add("hidden");
    };
});
// Auto-update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Animate social media icons
document.querySelectorAll(".social-icons img").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        icon.style.transform = "scale(1.3)";
    });
    icon.addEventListener("mouseleave", () => {
        icon.style.transform = "scale(1)";
    });
});
