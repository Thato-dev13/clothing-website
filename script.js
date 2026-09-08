const products = [
  {
    id: 1,
    name: 'Void Oversized Tee',
    price: 'R420',
    category: 'tees',
    sizes: 'XS S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22%3E%3Cstop offset=%220%22 stop-color=%22%23111111%22/%3E%3Cstop offset=%221%22 stop-color=%22%23020202%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22900%22 height=%221200%22 fill=%22url(%23g)%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2248%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.32%22%3EKLEAN%3C/text%3E%3C/svg%3E',
    isNew: true,
    desc: 'A clean oversized silhouette cut from 100% heavyweight cotton. Dropped shoulders, raw hem, and a subtle KLEAN chest print.'
  },
  {
    id: 2,
    name: 'Klean Monogram Hoodie',
    price: 'R890',
    category: 'hoodies',
    sizes: 'S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23121212%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2240%22 fill=%22%23ededed%22 text-anchor=%22middle%22 opacity=%220.38%22%3EHOODIE%3C/text%3E%3C/svg%3E',
    isNew: false,
    desc: 'Full-weight fleece hoodie with an all-over monogram jacquard print. Relaxed fit with a double-lined hood and kangaroo pocket.'
  },
  {
    id: 3,
    name: 'Cargo Track Pants',
    price: 'R650',
    category: 'bottoms',
    sizes: 'S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23202020%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2240%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.38%22%3EPANTS%3C/text%3E%3C/svg%3E',
    isNew: true,
    desc: 'Technical ripstop cargo pants with six utility pockets, tapered leg, and elasticated waistband.'
  },
  {
    id: 4,
    name: 'Washed Black Tee',
    price: 'R380',
    category: 'tees',
    sizes: 'XS S M L XL 2XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23121212%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2244%22 fill=%22%23f7f7f4%22 text-anchor=%22middle%22 opacity=%220.4%22%3EBLACK%20TEE%3C/text%3E%3C/svg%3E',
    isNew: false,
    desc: 'Garment-washed for a faded, worn-in look straight out the bag. Regular fit, crew neck, and a minimal back print.'
  },
  {
    id: 5,
    name: 'Utility Zip Hoodie',
    price: 'R960',
    category: 'hoodies',
    sizes: 'S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23191919%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2242%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.38%22%3EZIP%20HOODIE%3C/text%3E%3C/svg%3E',
    isNew: false,
    desc: 'Full-zip hoodie in brushed French terry with side zip pockets and KLEAN embroidery on the chest.'
  },
  {
    id: 6,
    name: 'Klean Beanie',
    price: 'R240',
    category: 'accessories',
    sizes: 'All',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23211b1b%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2240%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.35%22%3EBEANIE%3C/text%3E%3C/svg%3E',
    isNew: true,
    desc: 'Ribbed acrylic beanie with a folded cuff and woven KLEAN tab. One size fits all.'
  },
  {
    id: 7,
    name: 'Reflective Track Jacket',
    price: 'R1,050',
    category: 'hoodies',
    sizes: 'S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23141414%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2240%22 fill=%22%23f4f4f2%22 text-anchor=%22middle%22 opacity=%220.35%22%3EREFLECTIVE%3C/text%3E%3C/svg%3E',
    isNew: true,
    desc: 'Lightweight track jacket with reflective trims, high collar, and hidden zip pockets.'
  },
  {
    id: 8,
    name: 'Signature Logo Tee',
    price: 'R390',
    category: 'tees',
    sizes: 'XS S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%231a1a1a%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2242%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.3%22%3ESIGNATURE%3C/text%3E%3C/svg%3E',
    isNew: false,
    desc: 'Minimal fit tee with bold chest logo, soft cotton jersey, and tonal stitch details.'
  },
  {
    id: 9,
    name: 'Cargo Short',
    price: 'R520',
    category: 'bottoms',
    sizes: 'S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23212121%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2242%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.35%22%3ECARGO%20SHORT%3C/text%3E%3C/svg%3E',
    isNew: false,
    desc: 'Relaxed cargo short with reinforced pockets and an adjustable waist for an easy, elevated fit.'
  },
  {
    id: 10,
    name: 'Premium Hoodie',
    price: 'R980',
    category: 'hoodies',
    sizes: 'S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23111111%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2242%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.35%22%3EPREMIUM%20HOODIE%3C/text%3E%3C/svg%3E',
    isNew: false,
    desc: 'Heavyweight cotton hoodie with oversized fit, tonal embroidery, and a clean dropped shoulder.'
  },
  {
    id: 11,
    name: 'Ribbed Crew Socks',
    price: 'R120',
    category: 'accessories',
    sizes: 'All',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23808080%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2242%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.4%22%3E SOCKS %3C/text%3E%3C/svg%3E',
    isNew: true,
    desc: 'Thick ribbed crew socks with cushioned sole and KLEAN branding on the reversible cuff.'
  },
  {
    id: 12,
    name: 'Utility Cargo Pants',
    price: 'R720',
    category: 'bottoms',
    sizes: 'S M L XL',
    img: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22 viewBox=%220 0 900 1200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23222222%22/%3E%3Ctext x=%22450%22 y=%22600%22 font-family=%22Space%20Mono,%20monospace%22 font-size=%2242%22 fill=%22%23f5f5f0%22 text-anchor=%22middle%22 opacity=%220.35%22%3ECARGO%20PANTS%3C/text%3E%3C/svg%3E',
    isNew: false,
    desc: 'Utility cargo pants with ergonomic pocket placement, tapered leg, and elastic cuffs.'
  }
];

const categoryNames = {
  tees: 'Tees',
  hoodies: 'Hoodies',
  bottoms: 'Bottoms',
  accessories: 'Accessories'
};

const blackProductImage = 'https://placehold.co/900x1200/000000/000000.png';
products.forEach((product) => {
  product.img = blackProductImage;
});

let currentFilter = 'all';
let cartItems = [];
let selectedSize = '';
let selectedProduct = null;

function getSizeOptions(sizeText) {
  const cleanText = String(sizeText || '').trim();

  if (!cleanText || /^one\s*size$/i.test(cleanText)) {
    return ['All'];
  }

  if (cleanText.includes(',')) {
    return cleanText.split(',').map((size) => size.trim()).filter(Boolean);
  }

  return cleanText.split(/\s+/).filter(Boolean);
}

function convertPriceToNumber(priceText) {
  return Number(String(priceText).replace(/[^0-9]/g, '')) || 0;
}

function showProducts() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;

  const filteredProducts = currentFilter === 'all'
    ? products
    : products.filter((product) => product.category === currentFilter);

  productGrid.innerHTML = filteredProducts.map((product) => {
    const badge = product.isNew ? '<span class="product-badge">New</span>' : '';
    const sizes = getSizeOptions(product.sizes).join(' ');

    return `
      <div class="product-card" data-id="${product.id}" tabindex="0" aria-label="Open ${product.name}">
        <div class="product-image-wrap">
          ${badge}
          <img class="product-image" src="${product.img}" alt="${product.name}" loading="lazy" />
          <div class="quick-view">View Product →</div>
        </div>
        <div class="product-info">
          <p class="product-name">${product.name}</p>
          <div class="product-meta">
            <span class="product-price">${product.price}</span>
            <span class="product-sizes">${sizes}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      openProductModal(Number(card.dataset.id));
    });

    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProductModal(Number(card.dataset.id));
      }
    });
  });
}

function showCart() {
  const cartItemsArea = document.getElementById('cartItems');
  const cartSummary = document.getElementById('cartSummary');
  const cartCount = document.getElementById('cartCount');
  const itemCounter = document.getElementById('cartItemCount');
  const totalText = document.getElementById('cartTotal');

  if (!cartItemsArea || !cartSummary || !cartCount || !itemCounter || !totalText) return;

  cartCount.textContent = String(cartItems.length);

  if (cartItems.length === 0) {
    cartItemsArea.innerHTML = '<p class="cart-empty">Your cart is empty. Add a piece to see it here.</p>';
    cartSummary.classList.add('hidden');
    return;
  }

  cartSummary.classList.remove('hidden');
  itemCounter.textContent = String(cartItems.length);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.priceNumber, 0);
  totalText.textContent = `R${totalAmount}`;

  cartItemsArea.innerHTML = cartItems.map((item, index) => {
    return `
      <div class="cart-item">
        <img class="cart-item-image" src="${item.image}" alt="${item.name}" />
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">
            <span>${item.price}</span>
            <span>${item.size}</span>
          </div>
          <button class="cart-item-remove" type="button" data-index="${index}">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.cart-item-remove').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      cartItems.splice(index, 1);
      showCart();
    });
  });
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  selectedProduct = product;
  selectedSize = '';

  const modal = document.getElementById('modalBackdrop');
  const modalImage = document.getElementById('modalImage');
  const modalTag = document.getElementById('modalTag');
  const modalName = document.getElementById('modalName');
  const modalPrice = document.getElementById('modalPrice');
  const modalDescription = document.getElementById('modalDescription');
  const sizeOptions = document.getElementById('sizeOptions');
  const addButton = document.getElementById('addToCartBtn');

  if (!modal || !modalImage || !modalTag || !modalName || !modalPrice || !modalDescription || !sizeOptions || !addButton) {
    return;
  }

  modalImage.src = product.img;
  modalImage.alt = product.name;
  modalTag.textContent = categoryNames[product.category] || product.category;
  modalName.textContent = product.name;
  modalPrice.textContent = product.price;
  modalDescription.textContent = product.desc;

  const sizeList = getSizeOptions(product.sizes);
  sizeOptions.innerHTML = sizeList.map((size) => {
    return `<button class="size-btn" type="button" data-size="${size}">${size}</button>`;
  }).join('');

  if (sizeList.length === 1) {
    selectedSize = sizeList[0];
    const firstButton = sizeOptions.querySelector('.size-btn');
    if (firstButton) {
      firstButton.classList.add('selected');
    }
  }

  sizeOptions.querySelectorAll('.size-btn').forEach((button) => {
    button.addEventListener('click', () => {
      selectedSize = button.dataset.size;
      sizeOptions.querySelectorAll('.size-btn').forEach((btn) => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  addButton.textContent = '+ Add to Cart';
  addButton.style.background = '#fff';
  addButton.style.color = '#0d0d0d';

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('modalBackdrop');
  if (!modal) return;

  modal.classList.remove('open');
  document.body.style.overflow = '';
  selectedProduct = null;
  selectedSize = '';
}

function addToCart() {
  if (!selectedProduct) return;

  if (!selectedSize) {
    const sizeOptions = document.getElementById('sizeOptions');
    if (sizeOptions) {
      sizeOptions.style.outline = '1px solid #f32d2d';
      setTimeout(() => {
        sizeOptions.style.outline = 'none';
      }, 1000);
    }
    return;
  }

  cartItems.push({
    name: selectedProduct.name,
    price: selectedProduct.price,
    size: selectedSize,
    image: selectedProduct.img,
    priceNumber: convertPriceToNumber(selectedProduct.price)
  });

  showCart();

  const addButton = document.getElementById('addToCartBtn');
  if (addButton) {
    addButton.textContent = '✓ Added to Cart';
    addButton.style.background = '#1a1a1a';
    addButton.style.color = '#f5f5f0';
  }

  setTimeout(() => {
    closeProductModal();
  }, 900);
}

function setFilter(filterName) {
  currentFilter = filterName;

  document.querySelectorAll('.filter-tab').forEach((button) => {
    const isActive = button.dataset.filter === filterName;
    button.classList.toggle('active', isActive);
  });

  showProducts();
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');

  if (!drawer || !overlay) return;

  drawer.classList.add('open');
  overlay.classList.add('open');
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');

  if (!drawer || !overlay) return;

  drawer.classList.remove('open');
  overlay.classList.remove('open');
}

function attachEvents() {
  const filterTabs = document.getElementById('filterTabs');
  if (filterTabs) {
    filterTabs.addEventListener('click', (event) => {
      const clickedButton = event.target.closest('.filter-tab');
      if (!clickedButton) return;
      setFilter(clickedButton.dataset.filter);
    });
  }

  const viewAllButton = document.getElementById('viewAllBtn');
  if (viewAllButton) {
    viewAllButton.addEventListener('click', () => setFilter('all'));
  }

  const cartButton = document.getElementById('cartButton');
  if (cartButton) cartButton.addEventListener('click', openCart);

  const closeCartButton = document.getElementById('closeCart');
  if (closeCartButton) closeCartButton.addEventListener('click', closeCart);

  const cartOverlay = document.getElementById('cartOverlay');
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  const closeModalButton = document.getElementById('closeModal');
  if (closeModalButton) closeModalButton.addEventListener('click', closeProductModal);

  const modalBackdrop = document.getElementById('modalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        closeProductModal();
      }
    });
  }

  const addButton = document.getElementById('addToCartBtn');
  if (addButton) addButton.addEventListener('click', addToCart);

  document.querySelectorAll('.nav-link').forEach((button) => {
    button.addEventListener('click', () => {
      const sectionId = button.dataset.scroll;
      const targetSection = sectionId === 'top' ? document.body : document.getElementById(sectionId);

      if (!targetSection) return;

      const scrollToPosition = sectionId === 'top' ? 0 : targetSection.offsetTop;
      window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProductModal();
      closeCart();
    }
  });
}

showProducts();
showCart();
attachEvents();
