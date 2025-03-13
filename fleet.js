function bookCar(carName) {
    alert("Booking " + carName + " now...");
}


function calculateTotal() {
    let carPrice = parseInt(document.getElementById('car').value);
    let days = parseInt(document.getElementById('days').value);
    let locationFee = parseInt(document.getElementById('location').value);
    let total = (carPrice * days) + locationFee;
    document.getElementById('total').innerText = total.toLocaleString();
}

function openPaymentModal() {
    document.getElementById('paymentModal').style.display = 'flex';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

function confirmBooking() {
    let method = document.getElementById('paymentMethod').value;
    let total = document.getElementById('total').innerText;
    alert(`🚗 Booking Confirmed! Paid via ${method.toUpperCase()} - Total: $${total}`);
    closePaymentModal();
}