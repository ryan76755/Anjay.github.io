const runawayBtn = document.getElementById('runawayBtn');
const normalBtn = document.getElementById('normalBtn');
const message = document.getElementById('message');
const body = document.body;

// Efek tombol lari saat mouse mendekat
runawayBtn.addEventListener('mouseover', function() {
    // Posisi acak dalam viewport
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    
    this.style.position = 'absolute';
    this.style.left = x + 'px';
    this.style.top = y + 'px';
    
    // Ganti warna background
    const colors = ['#ffe6f2', '#e6f2ff', '#f2ffe6', '#fff2e6'];
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Efek saat tombol nakal berhasil diklik
runawayBtn.addEventListener('click', function() {
    message.textContent = "cukup tauuu😒";
    message.style.opacity = 1;
    this.textContent = "ohh begitu menolak!";
    this.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        message.style.opacity = 0;
        this.style.transform = 'scale(1)';
    }, 2000);
});

// Tombol normal
normalBtn.addEventListener('click', function() {
    message.textContent = " ilove youu💕💕";
    message.style.opacity = 1;
    
    setTimeout(() => {
        message.style.opacity = 0;
    }, 2000);
});