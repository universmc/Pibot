```javascript
import 'bootstrap';
import './album-rtl.css';

const album = document.querySelector('.album');

if (album) {
  const images = Array.from(album.querySelectorAll('.album-item img'));
  images.forEach(image => {
    image.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal', 'fade');
      modal.innerHTML = `
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${image.alt}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${image.src}" alt="${image.alt}" class="img-fluid">
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      const modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
    });
  });
}
```