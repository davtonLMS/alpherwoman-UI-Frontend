$(document).ready(function(){

    document.getElementById("uploadBtn").onchange = function () {
        document.getElementById("uploadFile").value = this.value;
    };
    $('#chooseFile').bind('change', function () {
      var filename = $("#chooseFile").val();
      if (/^\s*$/.test(filename)) {
        $(".file-upload").removeClass('active');
        $("#noFile").text("No file chosen..."); 
      }
      else {
        $(".file-upload").addClass('active');
        $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
      }
    });

    $(".form-control-first").on('input', function(){
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if ($('.bname').val() == "" || $('.blogo').val() == "" || !$('.bemail').val().match(re) || $('.bphone').val().length == 0 || $('.phone').val().length >= 15 ){
            $('.bcontinue').addClass('cursor-auto') 
            $('.bcontinue').attr('disabled',true)  
        }
        else{
            $('.bcontinue').removeAttr('disabled')
            $('.bcontinue').removeClass('cursor-auto') 
        }
    })

    $(".form-control-second").on('change', function(){
        if ($('.bcat').select2('data')[0]['id'] == ""){
            $('.bsubmit').addClass('cursor-auto') 
            $('.bsubmit').attr('disabled',true)   
        }
        else{
            $('.bsubmit').removeAttr('disabled')
            $('.bsubmit').removeClass('cursor-auto') 
        }
    })
    
    $('.bcontinue').on('click', function(){
        $(this).hide();
        $('.bsubmit').show();
        $('.first-part').hide();
        $('.second-part').show();
    })
    var input = document.querySelector(".bphone");
              window.intlTelInput(input, {
                preferredCountries: ['ng'],
                utilsScript: "js/utils.js",
              });
    
});