// ========== DARK / LIGHT MODE ==========
const toggleModeBtn = document.createElement("button");
toggleModeBtn.innerText = "🌙 Mode Gelap";
toggleModeBtn.style.margin = "10px";
toggleModeBtn.style.padding = "8px 15px";
toggleModeBtn.style.cursor = "pointer";
toggleModeBtn.style.borderRadius = "8px";
toggleModeBtn.style.border = "none";
toggleModeBtn.style.background = "#333";
toggleModeBtn.style.color = "#fff";

document.querySelector("footer").appendChild(toggleModeBtn);

let darkMode = false;
toggleModeBtn.addEventListener("click", () => {
    if (!darkMode) {
        document.body.style.background = "#111";
        document.body.style.color = "#f5f5f5";
        document.querySelectorAll("section, header, footer, table").forEach(el => {
            el.style.background = "#222";
            el.style.color = "#f5f5f5";
        });
        toggleModeBtn.innerText = "☀️ Mode Terang";
        toggleModeBtn.style.background = "#f5f5f5";
        toggleModeBtn.style.color = "#111";
        darkMode = true;
    } else {
        document.body.style.background = "url('1200px-Logo_Universitas_Sumatera_Utara.svg.png') repeat";
        document.body.style.backgroundSize = "190px";
        document.body.style.color = "#111";
        document.querySelectorAll("section, header, footer, table").forEach(el => {
            el.style.background = "#fff";
            el.style.color = "#111";
        });
        toggleModeBtn.innerText = "🌙 Mode Gelap";
        toggleModeBtn.style.background = "#333";
        toggleModeBtn.style.color = "#fff";
        darkMode = false;
    }
});

// ========== SCROLL TO TOP ==========
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆ Kembali ke Atas";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "8px";
scrollBtn.style.background = "#c69e1b";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none"; 

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ========== ALERT SOSMED ==========
document.querySelectorAll(".sosmed a").forEach(link => {
    link.addEventListener("click", (e) => {
        const nama = link.innerText;
        const konfirmasi = confirm(`Apakah Anda yakin ingin membuka ${nama}?`);
        if (!konfirmasi) {
            e.preventDefault();
        }
    });
});
