$(()=>{
    const maxCount = 3
    let myImg = $(".my-img")
    let count = 1 

    $(".next-img").click((event)=>{
        event.preventDefault()
        count++
    
        if ( count > maxCount){
            count = 1
        }
        myImg.attr('src',`css/images/banner-${count}.png`)
    })

    $(".previous-img").click((event)=>{
        event.preventDefault()
        count--

        if (count < 1 ){
            count = maxCount
        }
        myImg.attr('src', `css/images/banner-${count}.png`)
    })
})()
