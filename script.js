const images = document.getElementsByTagName("img")

for(let i = 0; i < images.length; i++){

    images[i].addEventListener("click", function(){

        for(let image of images){
            image.classList.remove("toggle")
        }

        this.classList.add("toggle")
    })
}
