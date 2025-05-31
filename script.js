
// Load username for greeting (used on submit.html)
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  const grievanceForm = document.getElementById("grievanceForm");
  if (grievanceForm) {
    grievanceForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const grievance = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        mood: document.getElementById("mood").value,
        severity: document.getElementById("severity").value,
      };

      // Retrieve old grievances, or start fresh
      const existing = JSON.parse(localStorage.getItem("grievances") || "[]");
      existing.push(grievance);

      // Save back to localStorage
      localStorage.setItem("grievances", JSON.stringify(existing));
      console.log("Grievance submitted:", grievance);
      // Optional: Alert & reset form
      grievanceForm.reset();
      sendGrievanceByEmail(grievance);
      window.location.href = "thankyou.html";
    });
  }
});

function sendGrievanceByEmail(grievanceData) {
  const jsonText = JSON.stringify(grievanceData, null, 2);
  const templateParams = {
    message: jsonText
  };

  emailjs.send("service_ncbrpif", "template_uz0e6t8", templateParams)
    .then(function(response) {
      console.log("Email sent!", response.status, response.text);
      alert("Grievance sent via email!");
    }, function(error) {
      console.error("Failed to send email.", error);
      alert("Error sending email");
    });
}

