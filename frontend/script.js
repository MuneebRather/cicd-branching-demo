// All backend requests go through Nginx, which reverse-proxies
// /api/* to the backend container internally. So the browser only
// ever talks to the same origin it's already on — no hostname or
// port logic needed here at all.
const BACKEND_URL = "/api";

const statusEl = document.getElementById("status");
const refreshBtn = document.getElementById("refresh-btn");

async function fetchStatus() {
  statusEl.textContent = "Checking backend...";
  try {
    const res = await fetch(`${BACKEND_URL}/status`);
    const data = await res.json();
    statusEl.innerHTML = `
      <strong>Backend says:</strong> ${data.message}<br>
      <strong>Server time:</strong> ${data.server_time}<br>
      <strong>Visits:</strong> ${data.visits}
    `;
  } catch (err) {
    statusEl.textContent = "Could not reach backend.";
  }
}

refreshBtn.addEventListener("click", fetchStatus);
fetchStatus();