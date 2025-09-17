function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "user" && password === "1234") {
    window.location.href = "app.html";
  } else {
    document.getElementById('error').innerText = "Invalid username or password!";
  }
}

function showPage(page) {
  const main = document.getElementById('mainContent');
  
  if (page === "onboarding") {
    main.innerHTML = `
      <h2>Onboarding</h2>
      <p>Fill your details for a personalized experience</p>
      <input type="number" placeholder="Age">
      <input type="text" placeholder="Location">
      <input type="text" placeholder="Skin Concerns">
      <button>Save</button>
    `;
  }
  
  else if (page === "dashboard") {
    main.innerHTML = `
      <h2>Dashboard</h2>
      <p>Skin Score: 80/100</p>
      <p>Routine: Morning + Evening</p>
      <p>Progress Tracking: Coming Soon</p>
    `;
  }
}
