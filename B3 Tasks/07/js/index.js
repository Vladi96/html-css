$(()=>{
 
    let $table = $('.table-products table');
    let $btn = $table.find('.btn');

    $btn.click(function (event) {
        event.preventDefault();

        let $that = $(this);
        let $index = $that.parents('tr').find('.btn').index($that);
        
        resetActive();
        
        makeActive($index);
    });

    function makeActive(index) {
        
        $table.find('col').eq(index).addClass('col-active');
        $table.find('th').eq(index).addClass('title-active');
        $table.find('.btn').eq(index).addClass('btn-active');

        $table.find('tr').each(function(){
            $(this).find('td').eq(index).addClass('price-box-active');
        });
    }

    function resetActive() {

        $table.find('col').removeClass('col-active');
        $table.find('.btn').removeClass('btn-active');
        $table.find('.price-box').removeClass('price-box-active');
        $table.find('th').removeClass('title-active');
    }
})