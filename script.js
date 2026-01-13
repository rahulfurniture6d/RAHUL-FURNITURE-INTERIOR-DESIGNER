document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let product = document.getElementById("product").value;
  let message = document.getElementById("message").value;

  let text = `Hello, I am ${name}.
Phone: ${phone}
Product: ${product}
Requirement: ${message}`;

  let url = `https://wa.me/+918789393339?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});
function enquire(productName) {
  let text = `Hello, I am interested in ${productName}. Please share more details.`;
  let url = `https://wa.me/+918789393339?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function copyUPI() {
    const upi = document.getElementById("upiId").innerText;
    navigator.clipboard.writeText(upi);
    alert("UPI ID copied: " + upi);
}

