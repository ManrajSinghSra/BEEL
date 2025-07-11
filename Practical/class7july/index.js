 
const a=document.getElementsByClassName("a")
const h=document.getElementsByClassName("h")
const c=document.getElementsByClassName("c")



a[0].addEventListener('click',async()=>{
    window.location.href = "http://localhost:4001/about";
})
h[0].addEventListener('click',async()=>{
    window.location.href = "http://localhost:4001/";
})

c[0].addEventListener('click',async()=>{
    window.location.href = "http://localhost:4001/contact";
}) 