function loadBooks() {
    fetch("data/books.json").then(res => res.json()).then(data => {
        
        let h = "";
        let m = "";


        for (let p of data) {
            h += `

            <div class="book">
                <div>
                    <div> <a href="${p.link}"> <img src="${p.image}" alt="book" /></a>
                    </div>
                    <a href="${p.link}"> <h3>${p.name}</h3></a>
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
                    <div> <a href="${p.link}"> <img src="${p.image}" alt="book" /></a>
                    </div>
                    <a href="${p.link}"> <h3>${p.name}</h3></a>
                    <p>${p.price} VNĐ</p>

                
                </div>
            </div>
            `
        }
        m=`<h3>Mưa 2</h3>`;
        let y = document.querySelector(".books2");
        y.insertAdjacentHTML("beforebegin", m);

        
        let e = document.getElementById("books2");
        e.innerHTML += h;
        
        

    })
}
function loadBooks3() {
    fetch("data/books3.json").then(res => res.json()).then(data => {
        
        let h = "";
        let m = "";


        for (let p of data) {
            h += `

            <div class="book">
                <div>
                    <div> <a href="${p.link}"> <img src="${p.image}" alt="book" /></a>
                    </div>
                    <a href="${p.link}"> <h3>${p.name}</h3></a>
                    <p>${p.price} VNĐ</p>
                
                </div>
            </div>
            `
        }
        m=`<h3>Mưa 3</h3>`;
        let y = document.querySelector(".books3");
        y.insertAdjacentHTML("beforebegin", m);

        
        let e = document.getElementById("books3");
        e.innerHTML += h;
        
        

    })
}
function loadBooks4() {
    fetch("data/books4.json").then(res => res.json()).then(data => {
        
        let h = "";
        let m = "";


        for (let p of data) {
            h += `

            <div class="book">
                <div>
                    <div> <a href="${p.link}"> <img src="${p.image}" alt="book" /></a>
                    </div>
                    <a href="${p.link}"> <h3>${p.name}</h3></a>
                    <p>${p.price} VNĐ</p>
                
                </div>
            </div>
            `
        }
        m=`<h3>Mưa 4</h3>`;
        let y = document.querySelector(".books4");
        y.insertAdjacentHTML("beforebegin", m);

        
        let e = document.getElementById("books4");
        e.innerHTML += h;
        
        

    })
}
function loadBooks5() {
    fetch("data/books5.json").then(res => res.json()).then(data => {
        
        let h = "";
        let m = "";


        for (let p of data) {
            h += `

            <div class="book">
                <div>
                    <div> <a href="${p.link}"> <img src="${p.image}" alt="book" /></a>
                    </div>
                    <a href="${p.link}"> <h3>${p.name}</h3></a>
                    <p>${p.price} VNĐ</p>

                    
                </div>
            </div>
            `
        }
        m=`<h3>Mưa 5</h3>`;
        let y = document.querySelector(".books5");
        y.insertAdjacentHTML("beforebegin", m);

        
        let e = document.getElementById("books5");
        e.innerHTML += h;
        
        

    })
}

window.onload = () => {
    loadBooks();
    loadBooks2();
    loadBooks3();
    loadBooks4();
    loadBooks5();

}