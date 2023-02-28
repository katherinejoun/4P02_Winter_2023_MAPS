var preventClick = false;
var resizeTimeout;

function checkMenu() {

	if( $(window).width() <= 1000 ) {
		$( 'ul#menu li.has_submenu' ).find( 'ul' ).addClass( 'closed_menu' );
		preventClick = true;
	}
	else {
		preventClick = false;
	}
	return;
}

function makeSameHeight(selector) {
	var minHeight = 0;
	$(selector).each(function(){
		var itemHeight = $(this).outerHeight(true);
		if(itemHeight > minHeight ) {
			minHeight = itemHeight;
		}
	});
	$(selector).css('min-height', minHeight );
}

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$("#header").addClass("active");
	}
	else {
		$("#header").removeClass("active");
	}

	if( scroll >= 500 ) {
		$( "#back-top" ).addClass( "active" );
	}
	else {
		$( "#back-top" ).removeClass( "active" );
	}

});

$(document).ready(function() {

	if( window.location.hash ) {
		$(window).scrollTop(0);
		scrollDownToPage( window.location.hash.substr(1) );
	}

	$( '#back-top a' ).click(function(e) {
		$('html,body').animate({ scrollTop: 0}, 300);
	});

	$( '.menu-trigger').bind( 'click', function() {
		var $navigation = $( '#navigation' );
		var $trigger = $( '.menu-trigger' );
		var $header = $( '#header' );

		if( $navigation.hasClass( 'open' ) ) {
			$navigation.removeClass( 'open' );
			$trigger.removeClass( 'active' );
			$header.removeClass( 'unstick' );
		}
		else {
			$navigation.addClass( 'open' );
			$trigger.addClass( 'active' );
			$header.addClass( 'unstick' );
			$(window).scrollTop(0);
		}
	});

	window.onresize = function() {
		clearTimeout(resizeTimeout);
		// handle normal resize
		resizeTimeout = setTimeout(function() {
			checkMenu();
		}, 250);
	};

	checkMenu();

	$('ul#menu li.has_submenu').bind('click', function(e) {

		if( preventClick ) {
			if( $(this).hasClass( 'clicked_menu' ) === false ) {
				e.preventDefault();

				$(this).children( 'ul' ).addClass( 'open_menu' );
				$(this).addClass( 'clicked_menu' );
			}
		}
	});

	cssVars();

	$('.video-link').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		showCloseBtn: false,
		fixedContentPos: false
	});
});

document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelectorAll('#map').length > 0)
	{
		if (document.querySelector('html').lang)
			lang = document.querySelector('html').lang;
		else
			lang = 'en';

		var js_file = document.createElement('script');
		js_file.type = 'text/javascript';
		js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&language=' + lang;
		document.getElementsByTagName('head')[0].appendChild(js_file);
	}
});

function initMap() {
	var map;
	var geocoder = new google.maps.Geocoder();
	var address = '196 King Street, St. Catharines, On, CANADA';
	geocoder.geocode( { 'address': address }, function( results, status ) {
		if( status == google.maps.GeocoderStatus.OK ) {
			map = new google.maps.Map( document.getElementById( 'map' ), {
				zoom: 13,
				center: results[ 0 ].geometry.location,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			} );

			var marker = new google.maps.Marker( {
				map: map,
				position: results[ 0 ].geometry.location
			});
		}
	} );
}

function scrollDownToPage( anchor ) {

	if ( ( anchor ) > -1 )
	{

		var headerHeight = $('#header').outerHeight();
		var scrollDown = ( $('#' + anchor).offset().top - headerHeight - 40 );
		setTimeout(function () {
			if ($(this).scrollTop() == 0) {
				$('html,body').animate({scrollTop: scrollDown}, 800);
			}
		}, 800); // four seconds

	}

	return;
}