document.addEventListener("DOMContentLoaded", () => {
    const newRequestsSection = document.getElementById("new-requests");
    const acceptedRequestsSection = document.getElementById("accepted-requests");

    const newRequests = [
        {
            id: 1,
            description: "شحنة من الرياض إلى جدة",
            vehicle: "شاحنة صغيرة"
        },
        {
            id: 2,
            description: "شحنة من الدمام إلى مكة",
            vehicle: "شاحنة كبيرة"
        }
    ];

    const acceptedRequests = [
        {
            id: 3,
            description: "شحنة من جدة إلى الطائف",
            vehicle: "شاحنة صغيرة",
            status: "تم القبول"
        }
    ];

    displayRequests(newRequests, newRequestsSection, "request");
    displayRequests(acceptedRequests, acceptedRequestsSection, "accepted-request");

    function displayRequests(requests, section, className) {
        section.innerHTML = "";

        requests.forEach(request => {
            const requestItem = document.createElement("div");
            requestItem.className = className;
            requestItem.innerHTML = `
                <p>${request.description}</p>
                <p>نوع المركبة: ${request.vehicle}</p>
                ${className === "request" ? `<button onclick="acceptRequest(${request.id})">قبول الطلب</button>` : ""}
            `;
            section.appendChild(requestItem);
        });
    }

    window.acceptRequest = function(requestId) {
        alert("تم قبول الطلب برقم: " + requestId);
        // نقل الطلب من الطلبات الجديدة إلى الطلبات المقبولة
        const request = newRequests.find(r => r.id === requestId);
        if (request) {
            request.status = "تم القبول";
            acceptedRequests.push(request);
            newRequests.splice(newRequests.indexOf(request), 1);
            displayRequests(newRequests, newRequestsSection, "request");
            displayRequests(acceptedRequests, acceptedRequestsSection, "accepted-request");
        }
    }
});
