$(document).ready(function(){
    $('#datepicker').datepicker({
        format: 'yyyy-mm-dd',
        maxDate: deltaDate(new Date(), 0, 0, -18)
    });
    $('.date').removeClass('gj-textbox-md')
    $('.gj-icon').hide();
    $('.select2').select2();
})

function deltaDate(input, days, months, years) {
    return new Date(
      input.getFullYear() + years, 
      input.getMonth() + months, 
      Math.min(
        input.getDate() + days,
        new Date(input.getFullYear() + years, input.getMonth() + months + 1, 0).getDate()
      )
    ).toISOString().split("T")[0];
}

$(document).ready(function(){
    $(".form-control-profile").on('input', function(){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if ($('.pfname').val() == "" || $('.psname').val() == "" || $('.password').val() == "" || !$('.pemail').val().match(re) || $('.pphone').val().length == 0 || $('.pphone').val().length >= 15 ){
            $('.pcontinue').addClass('cursor-auto') 
            $('.pcontinue').attr('disabled',true)  
        }
        else{
            $('.pcontinue').removeAttr('disabled')
            $('.pcontinue').removeClass('cursor-auto') 
        }
    })

    $(".form-control-profile-two").on('change', function(){
        if ($('.pgender').select2('data')[0]['id'] == "" || $('.pstate').select2('data')[0]['id'] == "" || $('.pjob').select2('data')[0]['id'] == "" || $('.preligion').select2('data')[0]['id'] == "" || $('.pdate').val() == ""){
            
            $('.psubmit').addClass('cursor-auto') 
            $('.psubmit').attr('disabled',true)   
        }
        else{
            $('.psubmit').removeAttr('disabled')
            $('.psubmit').removeClass('cursor-auto') 
        }
    })
    
    $('.pcontinue').on('click', function(){
        $(this).hide();
        $('.psubmit').show();
        $('.pfirst').hide();
        $('.psecond').show();
    })
});