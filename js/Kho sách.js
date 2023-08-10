function loadBooks() {
    fetch("data/books.json").then(res => res.json()).then(data => {
        
        let h = "";
        let m = "";


        for (let p of data) {
            h += `

            <div class="book">
                <div>
                    <div><img src="${p.image}" alt="book" /></div>
                    <h3>${p.name}</h3>
                    <p>${p.price} VNĐ</p>
                    
                </div>
            </div>
            `
        }
        m=`<h3>Mưa</h3>`;
        let y = document.querySelector(".books1");
        y.insertAdjacentHTML("beforebegin", m);

        
        let e = document.getElementById("books1");
        e.innerHTML += h;
        
        

    })
}
function loadBooks2() {
    fetch("data/books2.json").then(res => res.json()).then(data => {
        
        let h = "";
        let m = "";


        for (let p of data) {
            h += `

            <div class="book">
                <div>
                    <div><img src="${p.image}" alt="book" /></div>
                    <h3>${p.name}</h3>
                    <p>${p.price} VNĐ</p>
                    
                </div>
            </div>
            `
        }
        m=`<h3>Nắng</h3>`;
        let y = document.querySelector(".books2");
        y.insertAdjacentHTML("beforebegin", m);

        
        let e = document.getElementById("books2");
        e.innerHTML += h;
        
        

    })
}

window.onload = () => {
    loadBooks();
    loadBooks2();
}