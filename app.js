let button = document.getElementById("theBoxes")
button.addEventListener("click", myFunction)
var count=1
function myFunction() {
    let n = document.getElementById("number").value
    for(let i=0;i<n;i++){
        var box=document.createElement("div")
        box.classList.add("myDiv")
        box.innerHTML=count++
        document.getElementById("box").appendChild(box)
    }
}