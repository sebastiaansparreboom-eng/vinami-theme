// Handles the signup form: submits via fetch so visitors stay on the page
// and see an inline confirmation instead of being redirected to Formspree.

(function () {
  var form = document.querySelector(".signup__form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var submitButton = form.querySelector("button[type='submit']");
    var originalLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = "Bezig met versturen…";

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          showConfirmation();
        } else {
          showError();
        }
      })
      .catch(showError);

    function showConfirmation() {
      form.innerHTML =
        '<p class="signup__confirmation">Bedankt! We nemen binnen twee werkdagen contact met je op om de ' +
        "aflevering van je gratis fles in te plannen.</p>";
    }

    function showError() {
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
      var existing = form.querySelector(".signup__error");
      if (!existing) {
        var message = document.createElement("p");
        message.className = "signup__error";
        message.textContent =
          "Er ging iets mis bij het versturen. Probeer het opnieuw, of mail ons direct op info@vinami.nl.";
        form.appendChild(message);
      }
    }
  });
})();
