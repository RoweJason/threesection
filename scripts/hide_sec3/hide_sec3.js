const track = document.querySelector('.scroll-track');
track.style.animation = 'none';
void track.offsetWidth; // 触发重绘
track.style.animation = 'scroll-right 30s linear forwards';