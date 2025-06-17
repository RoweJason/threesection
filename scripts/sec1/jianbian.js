// 获取所有页面元素
const pages = document.querySelectorAll('.page');
let currentPageIndex = 0;

// 为页面元素绑定点击事件，实现切换逻辑
pages.forEach((page, index) => {
  page.addEventListener('click', () => {
    // 当前页渐隐
    pages[currentPageIndex].style.opacity = 0;
    
    // 停止当前页的视频播放（如果有）
    const currentVideo = pages[currentPageIndex].querySelector('video');
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
    }

    // 计算下一页索引
    currentPageIndex = (currentPageIndex + 1) % pages.length;

    // 下一页渐显
    setTimeout(() => {
      pages[currentPageIndex].style.opacity = 1;
      // 自动播放新显示页的视频（如果有）
      const nextVideo = pages[currentPageIndex].querySelector('video');
      if (nextVideo) {
        // 设置静音以确保自动播放
        nextVideo.muted = true;
        nextVideo.play().catch(err => {
          console.error("视频自动播放失败:", err);
        });
      }
    }, 1000); // 与过渡时间一致
  });
});

// 页面加载完成后自动播放第一页视频（如果是视频页）
document.addEventListener('DOMContentLoaded', () => {
  const firstVideo = pages[0].querySelector('video');
  if (firstVideo) {
    firstVideo.muted = true;
    firstVideo.play().catch(err => {
      console.error("首视频自动播放失败:", err);
    });
  }
});