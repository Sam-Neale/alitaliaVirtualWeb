setTimeout(() => {
    document.getElementById("loader").style.display = "none"
    document.getElementById("page").style.display = "block"
}, 1500);


function toggleHidden(id){
    if (id == "footer") {
        document.getElementById(id).classList.toggle("hidden")
        document.getElementById("cover").classList.toggle("hidden")    
    }else{
    document.getElementById(id).classList.toggle("hidden")
    }
}