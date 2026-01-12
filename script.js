// Update username (bisa diganti dengan data dari backend/auth)
const username = localStorage.getItem("username") || "Premium Member";
document.getElementById("username-display").textContent = username;

// Update tanggal expire secara dinamis (contoh)
const expireDateElement = document.getElementById("expire-date");
const expireDate = new Date("2026-02-15");
const today = new Date();

if (today > expireDate) {
  expireDateElement.textContent = "Membership Expired";
  expireDateElement.style.color = "#f87171";
} else {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  expireDateElement.textContent = expireDate.toLocaleDateString("id-ID", options);
}

// Logout button (demo sederhana)
document.getElementById("logout-btn").addEventListener("click", () => {
  if (confirm("Yakin ingin logout?")) {
    // Di real project: panggil API logout, hapus token/session, redirect ke login
    localStorage.removeItem("username");
    alert("Anda telah logout!");
    // window.location.href = "login.html"; // uncomment di real project
  }
});

// Optional: efek confetti saat halaman dimuat (untuk kesan premium)
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.background = ["#7c3aed", "#c084fc", "#34d399", "#f472b6"][Math.floor(Math.random()*4)];
  document.body.appendChild(confetti);

  setTimeout(() => confetti.remove(), 5000);
}

setTimeout(() => {
  for(let i = 0; i < 40; i++) {
    setTimeout(createConfetti, i * 80);
  }
}, 800);
