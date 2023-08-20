function loadBooks() {
    fetch("data/books.json").then(res => res.json()).then(data => {
            
        let h = "";
        let m = "";
    
    
        for (let p of data) {
            h += `
               
                    <div class="book_on_shelf  ">
                        <div id="book_on_shelf_names">
                            <a href="${p.link}">${p.name}</a>
                        </div>
                        <div class="book_cover">
                            <img src="${p.image}" alt="${p.name}" class="book_img">
                        </div>
                    </div>
               
            `
        }
        m=``;
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
    
               
                    <div class="book_on_shelf">
                        <div id="book_on_shelf_names">
                            <a href="${p.link}">${p.name}</a>
                        </div>
                        <div class="book_cover">
                            <img src="${p.image}" alt="${p.name}" class="book_img">
                        </div>
                    </div>
               
                `
            }
            m=``;
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
    
           
                    <div class="book_on_shelf  ">
                        <div id="book_on_shelf_names">
                            <a href="${p.link}">${p.name}</a>
                        </div>
                        <div class="book_cover">
                            <img src="${p.image}" alt="${p.name}" class="book_img">
                        </div>
                    </div>
            
                `
            }
            m=``;
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
    
               
                    <div class="book_on_shelf  ">
                        <div id="book_on_shelf_names">
                            <a href="${p.link}">${p.name}</a>
                        </div>
                        <div class="book_cover">
                            <img src="${p.image}" alt="${p.name}" class="book_img">
                        </div>
                    </div>
              
                `
            }
            m=``;
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
    
            
                    <div class="book_on_shelf  ">
                        <div id="book_on_shelf_names">
                            <a href="${p.link}">${p.name}</a>
                        </div>
                        <div class="book_cover">
                            <img src="${p.image}" alt="${p.name}" class="book_img">
                        </div>
                    </div>
            
                `
            }
            m=``;
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
    