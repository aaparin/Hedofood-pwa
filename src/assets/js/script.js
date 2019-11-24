$(document).ready(function () {
  $('.rations-carousel').owlCarousel({
	    loop: true,
    items: 1,
    nav: false,
	    dots: true,
	    autoplay: false,
	    margin: 20,
	    navText: ['', '']
  })

  $('.ration-carousel').owlCarousel({
	    loop: true,
    items: 1,
    nav: false,
	    dots: true,
	    autoplay: false,
	    margin: 20,
	    navText: ['', '']
  })

  $('.date-carousel').owlCarousel({
	    loop: true,
    items: 1,
    nav: true,
	    dots: false,
	    autoplay: false,
	    margin: 20,
	    navText: ['', '']
  }).on('translated.owl.carousel', function (event) {
    var date = $(this).find('.owl-item.active > div').data('date')
    $(this).closest('.calories__inner').find('.ration-date').removeClass('active')
    $(this).closest('.calories__inner').find(".ration-date[data-date='" + date + "']").addClass('active')
  })

  $('.calories a').click(function (event) {
    event.preventDefault()
    $('.calories a').removeClass('active')
    $(this).addClass('active')
    $('.calories__inner').removeClass('active')
    $(".calories__inner[data-tab='" + $(this).data('tab') + "'").addClass('active')
  })

  $('.accordion-toggler').click(function (event) {
    event.preventDefault()
    $(this).toggleClass('active')
  })

  $('.lk__order-toggler, .lk__order-counts').click(function (event) {
    event.preventDefault()
    $(this).closest('.lk__order').find('.lk__order-body').slideToggle()
    $(this).closest('.lk__order').find('.lk__order-footer').slideToggle()
  })
})
