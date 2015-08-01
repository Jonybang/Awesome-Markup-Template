$(function(){
	$('#my-slider').slick({
		adaptiveHeight: true,
		//variableWidth: true,
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});

	$.extend($.noty.defaults, {
		theme: 'relax',
		timeout: 4000,
		animation : {
			open  : 'animated flipInX',
			close : 'animated flipOutX'
		}, 
		type: 'success'
	});

	$('#my-form').ajaxForm(function() { 
		var n = noty({text: 'Thanks for you message!'});
	}, function(){
		var n = noty({text: 'Sorry, try again later :('});
	});

	$('#my-animate').click(function(){
		var animation = 'rubberBand';
		$('#my-animate')
			.addClass('animated ' + animation)
			.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$('#my-animate').removeClass('animated ' + animation);
			});		
	});

	$('.select2').select2({
		placeholder: "Select2",
		allowClear: true,
		theme: "bootstrap"
	});

	$('[data-toggle="tooltip"]').tooltip({
		placement: 'bottom'
	});

	$('[data-toggle="popover"]').popover({
		placement: 'top'
	})

	$('.share-social a').click(function(event){
        if($(this).hasClass('lj'))
            return;
        event.preventDefault();
        var url = window.location.href;
        var title = document.title;
        var description = $('meta[name=description]').attr("content");
        var image = $('img.share').attr('src');
        
        var shareLink;
        
        if($(this).hasClass('vk'))
            shareLink = 'http://vk.com/share.php?url=' + url + '&title=' + title + '&image=' + image + '&description=' + description;
            
        if($(this).hasClass('fb'))
            shareLink = 'http://www.facebook.com/sharer.php?m2w&s=100&p[url]=' + url + '&p[title]=' + title + '&p[summary]=' + description + '&p[images][0]=' + image;
                    
        if($(this).hasClass('tw'))
            shareLink = 'https://twitter.com/intent/tweet?text=' + title + '&url=' + url;
            
        window.open(shareLink, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');
    });
})
