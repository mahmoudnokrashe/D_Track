document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("shipment-request-form");
    const offersSection = document.getElementById("shipment-offers");
    const offersList = document.getElementById("offers-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const pickupLocation = document.getElementById("pickup-location").value;
        const deliveryLocation = document.getElementById("delivery-location").value;
        const offer = document.getElementById("offer").value;

        const offers = [
            {
                id: 1,
                description: "عرض الشحنة من " + pickupLocation + " إلى " + deliveryLocation + " بسعر مخفض",
                price: "100 ريال"
            },
            {
                id: 2,
                description: "عرض سريع للشحنة من " + pickupLocation + " إلى " + deliveryLocation,
                price: "150 ريال"
            }
        ];

        displayOffers(offers);
    });

    function displayOffers(offers) {
        offersSection.style.display = "block";
        offersList.innerHTML = "";

        offers.forEach(offer => {
            const offerItem = document.createElement("div");
            offerItem.className = "offer";
            offerItem.innerHTML = `
                <p>${offer.description}</p>
                <p>السعر: ${offer.price}</p>
                <button onclick="acceptOffer(${offer.id})">قبول العرض</button>
            `;
            offersList.appendChild(offerItem);
        });
    }

    window.acceptOffer = function(offerId) {
        alert("تم قبول العرض برقم: " + offerId);
        // معالجة قبول العرض هنا
    }
});
