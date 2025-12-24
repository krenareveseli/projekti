// Lightbox Gallery
const galleryImages = document.querySelectorAll('.kv-gallery-item img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0; background: rgba(0,0,0,0.9);
      display: flex; justify-content: center; align-items: center;
      z-index: 9999; cursor: zoom-out;
    `;
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '90%';
    overlay.appendChild(fullImg);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});