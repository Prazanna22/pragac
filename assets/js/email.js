// document.addEventListener("DOMContentLoaded", function () {
//     emailjs.init("X1f1ujwS0OulAjiBy"); // Replace with your EmailJS User ID

//     document.getElementById("bookingForm").addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent form from reloading the page

//         let templateParams = {
//             name: document.getElementById("name").value,
//             phone: document.getElementById("phone").value,
//             guestCount: document.getElementById("guestCount").value,
//             location: document.getElementById("location").value,
//         };

//         emailjs.send("service_dcieig6", "template_wra9j8m", templateParams)
//             .then(function (response) {
//                 alert("Email sent successfully!");
//                 console.log("SUCCESS!", response.status, response.text);
//             }, function (error) {
//                 alert("Failed to send email. Please try again.");
//                 console.log("FAILED...", error);
//             });
//     });
// });
