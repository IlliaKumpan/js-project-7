import * as basicLightbox from 'basiclightbox';

export default function showToast(message, timeout = 3000) {
  const instance = basicLightbox.create(
    `
    <div class="toast">
      ${message}
    </div>
    `,
    {
      className: 'toast-container',
    }
  );

  instance.show();

  setTimeout(() => {
    instance.close();
  }, timeout);
}
