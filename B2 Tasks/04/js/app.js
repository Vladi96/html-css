$(()=>{
    const max_char = 20
    
    $('.counting-chars').attr('maxlength', max_char)
    $('.counting').text(`${max_char} characters left`)
    $('.counting-chars').on('keyup',()=>{
        let liveNumber = $('.counting-chars').val().split('').length

        if( max_char>=liveNumber ){
            $('.counting').attr('style', 'color: #bcbcbc')
           
            $('.counting').text(`${max_char-liveNumber} characters left`)
        }
        if (liveNumber === max_char){
            $('.counting').attr('style', 'color: #FF0000')
        }
    })
})