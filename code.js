const btnopen = document.getElementById("click-model")
const btntook = document.getElementById("page-4")
const btnclose = document.getElementById("close-model")

btnopen.addEventListener("click", ()=>{
    btntook.classList.add("open")
})

btnclose.addEventListener("click", ()=>{
    btntook.classList.remove("open")
})

// pagge 3
let imag = document.getElementById("chang-img")
function changeimg(){
    imag.src = "test2.jpg"
}

function changeimg2(){
    imag.src = "test1.jpg"
}
function changeimg3(){
    imag.src = "test3.jpg"
}