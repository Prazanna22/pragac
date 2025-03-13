document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("FmFTllxWa21Gs1S82"); // Replace with your EmailJS User ID

    document.getElementById("bookingForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading the page

        let name = document.getElementById("name").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let guestCount = document.getElementById("guestCount").value;
        let location = document.getElementById("location").value.trim();

        // Validate Name
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        // Validate Phone Number (10 digits)
        let phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Validate Guest Count
        if (guestCount === "") {
            alert("Please select the guest count.");
            return;
        }

        // Validate Location
        if (location === "") {
            alert("Please enter your location.");
            return;
        }

        // If all validations pass, send email
        let templateParams = {
            name: name,
            phone: phone,
            guestCount: guestCount,
            location: location,
        };

        emailjs.send("service_m5315vc", "template_ottrdpq", templateParams)
            .then(function (response) {
                alert("Email sent successfully!");
                console.log("SUCCESS!", response.status, response.text);
                document.getElementById("bookingForm").reset(); 
            }, function (error) {
                alert("Failed to send email. Please try again.");
                console.log("FAILED...", error);
            });
    });
});


