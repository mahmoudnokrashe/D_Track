document.addEventListener("DOMContentLoaded", () => {
    const offersList = document.getElementById("home-offers");

    const offers = [
        {
            id: 1,
            description: "عرض شحنة من الرياض إلى جدة بسعر مخفض",
            price: "100 ريال"
        },
        {
            id: 2,
            description: "عرض شحنة من الدمام إلى مكة بسرعة عالية",
            price: "150 ريال"
        }
    ];

    displayOffers(offers);

    function displayOffers(offers) {
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
