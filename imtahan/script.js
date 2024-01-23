

let url = '  http://localhost:3000/data';

let cards = document.querySelector(".cards");
let filterArr = [];
let coppy = [];
let searchInp = document.querySelector("#search");
let sort = document.querySelector("#sort");

async function getAll(){
    let res = await axios.get(url);
    let data = await res.data;

    coppy = data;

    cards.innerHTML = '';

    filterArr = filterArr.length || searchInp.value ? filterArr : data;

    filterArr.forEach(element => {
        cards.innerHTML +=`
        <div class="card">
        <div class="img">
            <img src="${element.img}" alt="">
        </div>
        <a href="#">${element.name}</a>
        <span><i class="bi bi-star-fill">5.0</i> <i class="bi bi-heart-fill">29</i></span>
        <p>${element.text}</p>
        <div class="btn">
            <a href="#">CART</a>
            <a href="#">VIEW</a>
        </div>
    </div>
        `
    });
}

getAll();


searchInp.addEventListener("input", (e)=>{
    filterArr = filterArr.filter((element)=>{
        return element.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    })
    getAll()
})


sort.addEventListener("change", (e)=>{
    if(e.target.value == "az"){
        filterArr.sort((a,b)=>a.name.localeCompare(b.name))
    } else if(e.target.value == "za"){
        filterArr.sort((a,b)=>b.name.localeCompare(a.name))
    } else{
        filterArr = coppy;
    }

    getAll()
})