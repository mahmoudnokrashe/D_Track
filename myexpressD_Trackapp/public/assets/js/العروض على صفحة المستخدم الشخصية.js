document.addEventListener("DOMContentLoaded", () => {
    const userOffersList = document.getElementById("user-offers");

    const userOffers = [
        {
            id: 1,
            description: "عرض شحنة من الرياض إلى جدة بسعر مخفض",
            price: "100 ريال",
            accepted: false
        },
        {
            id: 2,
            description: "عرض شحنة من الدمام إلى مكة بسرعة عالية",
            price: "150 ريال",
            accepted: true
        }
    ];

    displayUserOffers(userOffers);

    function displayUserOffers(offers) {
        userOffersList.innerHTML = "";

        offers.forEach(offer => {
            const offerItem = document.createElement("div");
            offerItem.className = "offer";
            offerItem.innerHTML = `
                <p>${offer.description}</p>
                <p>السعر: ${offer.price}</p>
                <p>الحالة: ${offer.accepted ? "مقبول" : "غير مقبول"}</p>
                ${!offer.accepted ? `<button onclick="acceptOffer(${offer.id})">قبول العرض</button>` : ""}
            `;
            userOffersList.appendChild(offerItem);
        });
    }

    window.acceptOffer = function(offerId) {
        alert("تم قبول العرض برقم: " + offerId);
        // معالجة قبول العرض هنا
    }
});
