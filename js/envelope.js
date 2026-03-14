// JavaScript cho hiệu ứng bao thư và nhạc nền
const envelopeElement = document.getElementById('envelope');
const bgMusicElement = document.getElementById('background-music');

// Mở thiệp
envelopeElement.addEventListener('click', () => {
    if (!envelopeElement.classList.contains('open') && !envelopeElement.classList.contains('closing')) {
        envelopeElement.classList.add('open');

        // Chờ 600ms mới phát nhạc theo hiệu ứng nắp mở
        setTimeout(() => {
            if (bgMusicElement.paused) {
                bgMusicElement.volume = 0;
                bgMusicElement.play();

                // Hiệu ứng Fade in cho âm thanh
                const volumeStep = 0.05;
                const fadeAudioInterval = setInterval(() => {
                    if (bgMusicElement.volume < 1.0) {
                        bgMusicElement.volume = Math.min(1.0, bgMusicElement.volume + volumeStep);
                    } else {
                        clearInterval(fadeAudioInterval);
                    }
                }, 100);
            }
        }, 600);
    }
});

// Click ra ngoài để đóng thiệp
document.addEventListener('click', (e) => {
    if (envelopeElement.classList.contains('open') && !envelopeElement.contains(e.target)) {

        // Bỏ qua nếu click vào vùng hỗ trợ học tập
        if (e.target.closest('.sidebar') || e.target.closest('.menu-toggle') || e.target.closest('.lesson-viewer') || e.target.closest('.close-viewer')) {
            return;
        }

        envelopeElement.classList.remove('open');
        envelopeElement.classList.add('closing');

        // Dừng và reset nhạc
        bgMusicElement.pause();
        bgMusicElement.currentTime = 0;

        // Reset trạng thái sau animation closing (1.6s)
        setTimeout(() => {
            envelopeElement.classList.remove('closing');
        }, 1600);
    }
});
