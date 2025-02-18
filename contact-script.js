  function validateForm() {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let message = document.getElementById('message').value;
            let subject = document.getElementById('subject').value;
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let terms = document.getElementById('terms').checked;
            let contactMethod = document.querySelector('input[name="contact-method"]:checked');

            if (name.trim() === "") {
                alert("Please enter your name.");
                return false;
            }
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }
            if (subject === "") {
                alert("Please select a subject.");
                return false;
            }
            if (!contactMethod) {
                alert("Please select a preferred contact method.");
                return false;
            }
            if (!terms) {
                alert("You must agree to the terms and conditions.");
                return false;
            }
            if (message.trim() === "") {
                alert("Please enter your message.");
                return false;
            }
            return true;
        }
