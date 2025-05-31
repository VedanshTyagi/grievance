document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission

  const username = document.getElementById("username").value;

  // Save to localStorage (can also be sent to backend if needed)
  localStorage.setItem("username", username);
  window.location.href = "page3.html";

  // Optional: redirect or show success
//   alert("Username saved: " + username);
  // window.location.href = "dashboard.html"; // you can redirect if needed
});
