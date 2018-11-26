$(()=>{
    $('#country').on('change', function () {
        let country = $(this).val().toLowerCase()

        $('.countries .select').addClass('hidden');
        $(`.countries .${country}.select`).removeClass('hidden');
    })

    let thisYear = new Date().getUTCFullYear()
    
    for (let i = thisYear; i <= thisYear + 10; i++) { 
        $('.card-year').append(`<option>${i}</option>`)
  	}
})