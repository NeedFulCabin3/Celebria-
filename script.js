const container = document.getElementById('sparkles-bg');

// Generate background sparkles
for (let i = 0; i < 35; i++) {
    let spk = document.createElement('div');
    spk.className = 'sparkle';
    spk.style.left = Math.random() * 95 + 'vw';
    spk.style.top = Math.random() * 95 + 'vh';
    spk.style.width = spk.style.height = Math.random() * 10 + 6 + 'px'; 
    spk.style.animationDelay = Math.random() * 3 + 's';
    
    const colors = ['#ffffff', '#ffeed0', '#ff4d4d', '#00b4d8', '#ffd700'];
    spk.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(spk);
}

function nextPage(num) {
    var audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play().catch(e => console.log("Audio play blocked by browser:", e));
    }
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('p' + num).classList.add('active');
    
    if (num === 3) {
        document.getElementById('signature').style.display = 'block';
    } else {
        document.getElementById('signature').style.display = 'none';
    }
}

function showCaught() {
    document.getElementById('p1').classList.remove('active');
    document.getElementById('p1-caught').classList.add('active');
}

function resetP1() {
    document.getElementById('p1-caught').classList.remove('active');
    document.getElementById('p1').classList.add('active');
    document.getElementById('signature').style.display = 'none';
}

function nextPage(num) {
    var audio = document.getElementById('bg-music');
    if (audio.paused) {
        audio.play().catch(e => console.log("Audio play blocked by browser:", e));
    }
    
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('p' + num).classList.add('active');
    
    // Reset Never button position if returning to page 2
    if (num === 2) {
        var neverBtn = document.getElementById('never-btn');
        neverBtn.style.position = '';
        neverBtn.style.left = '';
        neverBtn.style.top = '';
    }
    
    if (num === 3) {
        document.getElementById('signature').style.display = 'block';
    } else {
        document.getElementById('signature').style.display = 'none';
    }
}

function moveNever(event) {
    if (event) {
        event.preventDefault(); // Prevents default touch behavior
    }
    
    var btn = document.getElementById('never-btn');
    
    // Switch to fixed positioning on first interaction so it can roam freely
    btn.style.position = 'fixed';
    
    var btnWidth = btn.offsetWidth || 100;
    var btnHeight = btn.offsetHeight || 40;
    
    var maxX = window.innerWidth - btnWidth - 20;
    var maxY = window.innerHeight - btnHeight - 20;
    
    var x = Math.floor(Math.random() * maxX);
    var y = Math.floor(Math.random() * maxY);
    
    if (x < 20) x = 20;
    if (y < 20) y = 20;
    
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}