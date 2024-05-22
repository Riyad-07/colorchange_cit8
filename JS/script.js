let btn=document.querySelector("button")
let body=document.querySelector("body")
let show=document.querySelector(".main .show")


btn.addEventListener("click",function(){
    function colorChange(){
            const firstValue=Math.round(Math.random()*255)
            const secondValue=Math.round(Math.random()*255)
            const thirdValue=Math.round(Math.random()*255)

            body.style.backgroundColor=`rgb(${firstValue},${secondValue},${thirdValue})`
        show.style.display = "flex"
        show.innerHTML=(`Color: ${firstValue},${secondValue},${thirdValue}`
            )
        
        
            }
            colorChange()
})