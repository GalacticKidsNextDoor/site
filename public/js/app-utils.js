window.onload = function() {
    if (window.location.pathname === "/") {
        document.getElementById("form").addEventListener("submit", function(e) {
            e.preventDefault();
            email = document.getElementById("email").value;
        
            const formData = new FormData();
            formData.append("email", email);
            formData.append("csrfmiddlewaretoken", document.getElementsByName("csrfmiddlewaretoken")[0].value);
    
            fetch("", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("email").value = "";
                showAlert("Thank you for signing up!", "success");
            })
        });
    }
    else if (window.location.pathname === "/contact/") {
        document.getElementById("contact-form").addEventListener("submit", function(e) {
            e.preventDefault();
                // Form submission
            name_contact = document.getElementById("id_name").value;
            email_contact = document.getElementById("id_email").value;
            message_contact = document.getElementById("id_message").value;
    
            const formData = new FormData();
            formData.append("name", name_contact);
            formData.append("email", email_contact);
            formData.append("message", message_contact);
            formData.append("csrfmiddlewaretoken", document.getElementsByName("csrfmiddlewaretoken")[0].value);
    
            fetch("/contact/", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById("id_name").value = "";
                document.getElementById("id_email").value = "";
                document.getElementById("id_message").value = "";
                showAlert("Thank you for contacting us!", "success");
            })
        });
    
    }

    function showAlert(message, category) {
        const alertPlaceholder = document.getElementById('alert-placeholder');
        const alertElement = `<div class="alert alert-${category} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        alertPlaceholder.innerHTML = alertElement;
    }
}
