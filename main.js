// BASE DE DATOS COMPLETA (103 Modelos)
// BASE DE DATOS COMPLETA (103 Modelos)
const products = [
    // ==========================================
    // NIKE Y DC (Intactos - No se modificaron)
    // ==========================================
    { id: 1, name: "Nike Dunk Low Bordo", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/yx7VOKJ.png", images: ["https://i.imgur.com/yx7VOKJ.png","https://i.imgur.com/ffk4Twe.png","https://i.imgur.com/15Zw5MX.png"] },
    { id: 2, name: "Nike Dunk Low Panda", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/ajvigQY.png", images: ["https://i.imgur.com/ajvigQY.png","https://i.imgur.com/heA6Os5.png"] },
    { id: 3, name: "Nike Dunk Low Gris", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/6WtePzs.png", images: ["https://i.imgur.com/6WtePzs.png","https://i.imgur.com/JHgVKrs.png"] },
    { id: 4, name: "Nike Dunk Low Azul", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/Rk16FQd.png", images: ["https://i.imgur.com/Rk16FQd.png","https://i.imgur.com/oIDootL.png"] },
    { id: 5, name: "Nike Dunk Low Verde", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/SXSTkbI.png", images: ["https://i.imgur.com/SXSTkbI.png","https://i.imgur.com/NDM3PzA.png"] },
    { id: 6, name: "Nike Dunk Low Blanca", brand: "Nike", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/E3MYjqJ.png", images: ["https://i.imgur.com/E3MYjqJ.png","https://i.imgur.com/lkSJNnR.png"] },
    { id: 7, name: "Nike Jordan Retro 4 All black", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/1yDf20r.png", images: ["https://i.imgur.com/1yDf20r.png","https://i.imgur.com/Zz1HfPD.png","https://i.imgur.com/JPVWefD.png","https://i.imgur.com/QrThW9w.png"] },
    { id: 8, name: "Nike Jordan Retro 4 Beige", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/yTJardB.png", images: ["https://i.imgur.com/yTJardB.png"] },
    { id: 9, name: "Nike TravisScott All black", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/seYg4LC.png", images: ["https://i.imgur.com/seYg4LC.png","https://i.imgur.com/Ae8UMYG.png"] },
    { id: 10, name: "Nike Jordan 1 mid Gris", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/fI70U7O.png", images: ["https://i.imgur.com/fI70U7O.png","https://i.imgur.com/BA9Grjj.png"] },
    { id: 11, name: "Nike Jordan 1 mid Negra y Rojo", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/Z4Fr94G.png", images: ["https://i.imgur.com/Z4Fr94G.png","https://i.imgur.com/SwLtc9y.png"] },
    { id: 12, name: "Nike Jordan 1 mid Negra", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/mHyLuk0.png", images: ["https://i.imgur.com/mHyLuk0.png","https://i.imgur.com/suVIdGD.png"] },
    { id: 13, name: "Nike Jordan 1 mid Rosa", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/SrYlKFY.png", images: ["https://i.imgur.com/SrYlKFY.png","https://i.imgur.com/xbXqHiy.png"] },
    { id: 14, name: "Ojotas Nike Negras", brand: "Nike", retail: "$40.000", wholesale: "$30.000", img: "https://i.imgur.com/zzYhV89.png", images: ["https://i.imgur.com/zzYhV89.png","https://i.imgur.com/jVIqhf8.png"] },
    { id: 15, name: "Jordan Retro 4 Negras y Celeste", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/mtg4x4nC/image8.png", images: ["https://i.postimg.cc/mtg4x4nC/image8.png"] },
    { id: 16, name: "Jordan Retro 4 Negras Tornasolado", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/NKywM4Bw/image32.png", images: ["https://i.postimg.cc/NKywM4Bw/image32.png"] },
    { id: 17, name: "Jordan Retro 4 Blancas", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/ZW9hRc4Y/image37.png", images: ["https://i.postimg.cc/ZW9hRc4Y/image37.png"] },
    { id: 18, name: "Jordan Retro 4 Gris", brand: "Nike", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/Ln8SdSWt/image10.png", images: ["https://i.postimg.cc/Ln8SdSWt/image10.png"] },
    { id: 19, name: "DC Court Graffik Negra y Blanco", brand: "DC", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/OKrnrg2.png", images: ["https://i.imgur.com/OKrnrg2.png","https://i.imgur.com/THk3NFo.png"] },
    { id: 20, name: "DC Court Graffik Negra", brand: "DC", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/7vSCFI2.png", images: ["https://i.imgur.com/7vSCFI2.png"] },

    // ==========================================
    // ADIDAS
    // ==========================================
    { id: 21, name: "Forum Bad Bunny Negro", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/muJ4v82.png", images: ["https://i.imgur.com/muJ4v82.png"] },
    { id: 22, name: "Forum Bad Bunny Rosa", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/gCq8kn2.png", images: ["https://i.imgur.com/gCq8kn2.png"] },
    { id: 23, name: "Forum Bad Bunny Celeste", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/D1jWi9g.png", images: ["https://i.imgur.com/D1jWi9g.png", "https://i.imgur.com/8ZeeZ6W.png"] },
    { id: 24, name: "Adi2000 Blanco", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/xVvWbNu.png", images: ["https://i.imgur.com/xVvWbNu.png"] },
    { id: 25, name: "Adi2000 Blanca y Beige", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/mCWvnl5.png", images: ["https://i.imgur.com/mCWvnl5.png", "https://i.imgur.com/oZUPoUq.png"] },
    { id: 26, name: "Samba Clásica", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/LRkdTLY.png", images: ["https://i.imgur.com/LRkdTLY.png"] },
    { id: 27, name: "Samba Negra", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/7CQ1BBD.png", images: ["https://i.imgur.com/7CQ1BBD.png","https://i.imgur.com/rx6W8Kc.png"] },
    { id: 28, name: "Forum Blanco y Verde Luxo", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "https://i.postimg.cc/pm9tTZRH/image34.png", images: ["https://i.postimg.cc/pm9tTZRH/image34.png"] },
    { id: 29, name: "Forum Negro y Blanco", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/rDdLmJMF/image36.png", images: ["https://i.postimg.cc/rDdLmJMF/image36.png"] },
    { id: 30, name: "Forum Blanco y Gris", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/DSWKZgnZ/image39.png", images: ["https://i.postimg.cc/DSWKZgnZ/image39.png"] },
    { id: 31, name: "Forum Blanco y Azul", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/fJRs4sPV/image2.png", images: ["https://i.postimg.cc/fJRs4sPV/image2.png"] },
    { id: 32, name: "Forum Blanco y Negro", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "https://i.postimg.cc/w3VzbMwD/image3.png", images: ["https://i.postimg.cc/w3VzbMwD/image3.png"] },
    { id: 36, name: "Samba Bordó", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "./fotos/samba bordo.png", images: ["./fotos/samba bordo.png"] },
    { id: 37, name: "Superstar Negra", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "./fotos/superstar negra.png", images: ["./fotos/superstar negra.png"] },
    { id: 39, name: "Superstar Blanca y Negra", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "./fotos/superstar blanca.png", images: ["./fotos/superstar blanca.png"] },
    { id: 40, name: "Samba Chocolate", brand: "Adidas", retail: "$85.000", wholesale: "$70.000", img: "./fotos/samba beige.png", images: ["./fotos/samba beige.png"] },
    { id: 41, name: "Forum Negro Luxo", brand: "Adidas", retail: "$90.000", wholesale: "$75.000", img: "./fotos/forum caramelo (1).png", images: ["./fotos/forum caramelo (1).png"] },
    
    // ==========================================
    // VANS
    // ==========================================
    { id: 48, name: "Vans Knu Skool Triple Black", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/pbCm0xR.png", images: ["https://i.imgur.com/pbCm0xR.png","https://i.imgur.com/Ia3HV97.png","https://i.imgur.com/6RFad32.png"] },
    { id: 49, name: "Vans Knu Skool Pure White", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/v43yF3M.png", images: ["https://i.imgur.com/v43yF3M.png","https://i.imgur.com/TIs0icM.png"] },
    { id: 50, name: "Vans Knu Skool Oreo", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/27oJGey.png", images: ["https://i.imgur.com/27oJGey.png","https://i.imgur.com/dAgYDgp.png"] },
    { id: 51, name: "Vans Knu Skool Blue", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "https://i.imgur.com/J0t3Rq2.png", images: ["https://i.imgur.com/J0t3Rq2.png","https://i.imgur.com/u9J8aZE.png"] },
    { id: 52, name: "Vans Hylane Brown", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/dGmumDa.png", images: ["https://i.imgur.com/dGmumDa.png","https://i.imgur.com/7JT2YHF.png"] },
    { id: 53, name: "Vans Hylane Black", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/0YSalqT.png", images: ["https://i.imgur.com/0YSalqT.png"] },
    { id: 54, name: "Vans Hylane Black & Grey", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/cqr6ZEn.png", images: ["https://i.imgur.com/cqr6ZEn.png"] },
    { id: 55, name: "Vans Hylane Blue", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/Cj6LBW6.png", images: ["https://i.imgur.com/Cj6LBW6.png","https://i.imgur.com/sx3KH6a.png"] },
    { id: 56, name: "Vans Hylane Total White", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/sBsoOU6.png", images: ["https://i.imgur.com/sBsoOU6.png","https://i.imgur.com/lUANMye.png"] },
    { id: 58, name: "Vans Knu Skool Reverse", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "./fotos/reverse.png", images: ["./fotos/reverse.png"] },
    { id: 59, name: "Vans Knu Skool Caramel", brand: "Vans", retail: "$85.000", wholesale: "$70.000", img: "./fotos/knu mitad caramelo.png", images: ["./fotos/knu mitad caramelo.png"] },
    { id: 60, name: "Vans Hylane White", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "./fotos/hylane blanca con caramelo.png", images: ["./fotos/hylane blanca con caramelo.png"] },
    { id: 61, name: "Vans Hylane Black & White", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "./fotos/hylane negra y raya blanca.png", images: ["./fotos/hylane negra y raya blanca.png"] },
    { id: 62, name: "Vans Hylane Full Black", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "./fotos/hylane full negra.png", images: ["./fotos/hylane full negra.png"] },
    { id: 63, name: "Vans Hylane White & Grey", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "./fotos/hylane gris blanca.png", images: ["./fotos/hylane gris blanca.png"] },
    { id: 64, name: "Vans Hylane Beige", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "./fotos/hylane beige.png", images: ["./fotos/hylane beige.png"] },
    { id: 65, name: "Vans Hylane Grey & Brown", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "./fotos/hylane gris negra.png", images: ["./fotos/hylane gris negra.png"] },
    { id: 66, name: "Vans Hylane Grey & White", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "./fotos/hylane celestee.png", images: ["./fotos/hylane celestee.png"] },
    { id: 67, name: "Vans Hylane Crema", brand: "Vans", retail: "$90.000", wholesale: "$75.000", img: "./fotos/hylane blanca.png", images: ["./fotos/hylane blanca.png"] },

    // ==========================================
    // PUMA
    // ==========================================
    { id: 68, name: "Puma 180 Beige", brand: "Puma", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/wSMfncK.png", images: ["https://i.imgur.com/wSMfncK.png","https://i.imgur.com/pilsEGJ.png"] },
    { id: 69, name: "Puma 180 Negra", brand: "Puma", retail: "$90.000", wholesale: "$75.000", img: "https://i.imgur.com/oXXHTAN.png", images: ["https://i.imgur.com/oXXHTAN.png","https://i.imgur.com/ZAjUEH2.png"] },
    { id: 70, name: "Puma Suede XL", brand: "Puma", retail: "$90.000", wholesale: "$75.000", img: "./fotos/puma xl.png", images: ["./fotos/puma xl.png"] },
    { id: 71, name: "Puma-180", brand: "Puma", retail: "$90.000", wholesale: "$75.000", img: "./fotos/puma gris blanco negro.png", images: ["./fotos/puma gris blanco negro.png"] },
    { id: 72, name: "Puma-180 Blanca", brand: "Puma", retail: "$90.000", wholesale: "$75.000", img: "./fotos/puma blanca.png", images: ["./fotos/puma blanca.png"] },
    { id: 73, name: "Puma-180 Beige y Rosa", brand: "Puma", retail: "$90.000", wholesale: "$75.000", img: "./fotos/puma rosa.png", images: ["./fotos/puma rosa.png"] }
];


// --- LÓGICA DE INTERFAZ ---
const productGrid = document.getElementById('productGrid');
const infoGrid = document.getElementById('infoGrid');
const searchInput = document.getElementById('searchInput');
const filterContainer = document.getElementById('filtersContainer');
const btnInfo = document.getElementById('btnInfo');
let currentProduct = null;

// Renderizar Productos
function displayProducts(items) {
    productGrid.innerHTML = ''; 

    if (items.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-search"></i>
                <h4 class="text-white fw-bold">No encontramos modelos</h4>
                <p>Intenta buscar con otra palabra clave o marca.</p>
            </div>
        `;
        return;
    }

    items.forEach((item, index) => {
        const cardHTML = `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="product-card" id="card-${item.id}">
                    <div class="card-img-container">
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <div class="brand-tag">${item.brand}</div>
                        <h5 class="product-title">${item.name}</h5>
                        <div class="mt-auto-card">
                            <div class="price-row">
                                <div class="price-col border-end pe-2 me-2 border-secondary">
                                    <span class="price-label">Unitario</span>
                                    <span class="price-val price-retail">${item.retail}</span>
                                </div>
                                <div class="price-col">
                                    <span class="price-label text-success">Mayor</span>
                                    <span class="price-val price-wholesale">${item.wholesale}</span>
                                </div>
                            </div>
                            <button class="btn-view" onclick="openModal(${item.id})">
                                Ver <i class="bi bi-eye-fill ms-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', cardHTML);

        setTimeout(() => {
            const el = document.getElementById(`card-${item.id}`);
            if (el) el.classList.add('show');
        }, index * 30); 
    });
}

// Filtros y Botón de Información
filterContainer.addEventListener('click', (e) => {
    // Si toca cualquier botón de filtro que NO sea el de Info
    if(e.target.classList.contains('btn-filter') && e.target.id !== 'btnInfo') {
        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Mostramos catálogo, ocultamos info
        infoGrid.classList.add('d-none');
        productGrid.classList.remove('d-none');
        
        searchInput.value = '';
        const category = e.target.getAttribute('data-filter');
        const filtered = category === 'all' ? products : products.filter(p => p.brand === category);
        displayProducts(filtered);
    }
});

// Evento exclusivo para el botón de INFO
btnInfo.addEventListener('click', () => {
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    btnInfo.classList.add('active');
    
    // Ocultamos catálogo, mostramos info
    productGrid.classList.add('d-none');
    infoGrid.classList.remove('d-none');
});

// Buscador
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.btn-filter[data-filter="all"]').classList.add('active');
    
    // Si estaba buscando algo, volvemos a la vista de catálogo automáticamente
    infoGrid.classList.add('d-none');
    productGrid.classList.remove('d-none');

    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.brand.toLowerCase().includes(term));
    displayProducts(filtered);
});

// Cambiar imagen en el modal
window.changeModalImage = function(clickedThumbnail, imageUrl) {
    const mainImg = document.getElementById('modalImage');
    mainImg.style.opacity = 0; 
    setTimeout(() => {
        mainImg.src = imageUrl;
        mainImg.style.opacity = 1;
    }, 150);
    document.querySelectorAll('#modalThumbnails .thumbnail-img').forEach(img => img.classList.remove('active'));
    clickedThumbnail.classList.add('active');
};

// Abrir Modal
window.openModal = function(id) {
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) return;

    document.getElementById('modalTitle').innerText = currentProduct.name;
    document.getElementById('modalRetail').innerText = currentProduct.retail;
    document.getElementById('modalWholesale').innerText = currentProduct.wholesale;

    const imageThumbnailsContainer = document.getElementById('modalThumbnails');
    imageThumbnailsContainer.innerHTML = ''; 
    const imageList = currentProduct.images && currentProduct.images.length > 0 ? currentProduct.images : [currentProduct.img]; 
    document.getElementById('modalImage').src = imageList[0];

    if (imageList.length > 1) {
        imageList.forEach((imageUrl, index) => {
            const isActive = index === 0 ? 'active' : '';
            imageThumbnailsContainer.innerHTML += `
                <img src="${imageUrl}" 
                     onclick="changeModalImage(this, '${imageUrl}')" 
                     class="img-fluid thumbnail-img ${isActive}"
                     alt="Vista ${index + 1}">
            `;
        });
    }

    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
};

// Checkout vía WhatsApp
window.sendToWhatsapp = function() {
    const phoneNumber = "5493416460980"; 
    const text = `Hola VÉRSE! 👋 Me interesa: *${currentProduct.name}*.
💰 Precio Mayorista: ${currentProduct.wholesale}
💰 Precio Minorista: ${currentProduct.retail}

Quiero coordinar la compra y consultar el talle.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
};

// Carga Inicial
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});