class ECFeaturedProduct extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.productPointer = this.querySelector('.ec-featured-product__item-pointer');
    if (this.productPointer) {
      this.productPointer.addEventListener('click', this.toggleModal.bind(this));
    }
  }

  disconnectedCallback() {
    if (this.productPointer) {
      this.productPointer.removeEventListener('click', this.toggleModal.bind(this));
    }
  }

  toggleModal(event) {
    const targetModalId = event.currentTarget.getAttribute('data-target');
    const targetModal = document.getElementById(targetModalId);
    if (targetModal) {
      targetModal.classList.toggle('active');
    }
  }
}
customElements.define('ec-featured-product', ECFeaturedProduct);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.ec-modal-close').forEach(function (closeButton) {
    closeButton.addEventListener('click', function (event) {
      const modal = event.currentTarget.closest('.ec-modal');
      if (modal) {
        modal.classList.remove('active');
      }
    });
  });
});
