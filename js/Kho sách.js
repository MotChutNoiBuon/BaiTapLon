function loadProducts() {
    fetch("data/books.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h += `
            <div class="book">
                <div>
                    <div><img src="${p.image}" alt="iPhone" /></div>
                    <h3>${p.name}</h3>
                    <p>${p.price} VNĐ</p>
                    
                </div>
            </div>
            `
        }
    })
}
window.onload = () => {
    loadProducts();
}