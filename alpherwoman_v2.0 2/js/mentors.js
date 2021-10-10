$(document).ready(function(){
    $('.wimbiz-image').hide();
    $('.alpherhub-image').hide();

	$('.openModal').on('click', function(e){
		e.preventDefault()
		info = $(this).find('.mentors-info');

		$('.modal-name').html(info.find('.mentor-name').html());
		$('.modal-role').html(info.find('.mentor-role').html()); 
		$('.modal-industry').html(info.find('.mentor-industry').html()); 
		$('.modal-age').html(info.find('.mentor-age').html()); 
		$('.modal-location').html(info.find('.mentor-location').html()); 
		$('.modal-url').html(info.find('.mentor-url').html()); 
		$('.modal-type').html(info.find('.mentor-type').html()); 
		$('.modal-image').attr('src', info.find('.mentor-image').attr('src'));
		$('.modal-id').attr('id', info.find('.mentor-id').html());
		$('#aboutModal').modal('show');
	})

	$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        $(".filter-button").removeClass('active')
        $(this).addClass('active');
        
        if(value == "all")
        {
            $('.filter').show();
	        $('.wimbiz-image').hide();
	        $('.alpherhub-image').hide();
        }
        else
        {
            $(".filter").not('.'+value).hide();
            $('.filter').filter('.'+value).show();
            
        }
    });

    $('.view-mentors').click(function(e){
        e.preventDefault();
        var id = $(this).attr('id');
        
        if($(this).hasClass('hid')){
            $('.'+id).slideDown();
            $(this).removeClass('hid');
            $(this).text('Hide Mentors');
            console.log
            $('html,body').animate({
                scrollTop: $('.'+id).offset().top - 60
            }, 1500);
        }
        else{
            $('.'+id).slideUp();
            $(this).addClass('hid');
            $(this).text('View Mentors');
        }
    });
})
