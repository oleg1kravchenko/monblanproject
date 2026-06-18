$(document).ready(function() {

    //datapicker
const baseConfig = {
    format: 'd.m.Y',    
    formatDate: 'd.m.Y',
    dayOfWeekStart: 1,   
    timepicker: false,  
    closeOnDateSelect: true,
    scrollMonth: false,
    scrollInput: false
};


$('#picker-from').datetimepicker({
    ...baseConfig,
    onShow: function(ct) {

        let maxDateVal = $('#picker-to').val();
        this.setOptions({
            maxDate: maxDateVal ? maxDateVal : false
        });
    }
});

$('#picker-to').datetimepicker({
    ...baseConfig,
    onShow: function(ct) {

        let minDateVal = $('#picker-from').val();
        this.setOptions({
            minDate: minDateVal ? minDateVal : false
        });
    }
});

//clear input data
$('.item-datapicker__btn--clear').on('click', function() {
    const $parent = $(this).closest('.item-datapicker');
    
    $parent.find('.datepicker').val('').trigger('change');
});

//clear input data
$('.view-catalog__btn').on('click', function(e) {
	e.preventDefault();
   $(this).addClass("active");
   $(this).siblings().removeClass("active");
   $(".wrapper-card").toggleClass("wrapper-card--list");
});


});

