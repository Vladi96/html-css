$(() => {
    let day = new Date().getDate()
    let month = new Date().getMonth()+1
    let year = new Date().getFullYear()
    
    var $dateArrive = $("#date-arrive");
    var $dateDepart = $("#date-depart");

    $dateArrive.attr('min',`${year}-${month}-${day}`)
    $dateDepart.attr('min', `${year}-${month}-${++day}`)

    $dateArrive.on('change', ()=>{
        let userYear = $dateArrive.val().slice(0,4)
        let userMonth = $dateArrive.val().slice(5,7)
        let userDay = Number($dateArrive.val().slice(8,10))+1
        
        $dateDepart.attr('min', `${userYear}-${userMonth}-${userDay}`)
        
        $dateDepart.val(`${userYear}-${userMonth}-${('0'+ userDay).slice(-2)}`)
    })
})