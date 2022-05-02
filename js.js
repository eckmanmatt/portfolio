const goHome = () => {
$(window.location.href='https://verdant-dusk-88782f.netlify.app/')
}

const goBio = () => {
  $(window.location.href='https://verdant-dusk-88782f.netlify.app/bio')
}
const goResume = () => {
  $(window.location.href='https://verdant-dusk-88782f.netlify.app/resume')
}
const goProjects = () => {
  $(window.location.href='https://verdant-dusk-88782f.netlify.app/projects')
}

const hideTopNav = () => {
  $('#top-nav').toggle('slow');
  $('#toggle.lnr.lnr-menu').css('background-color', '#355E3B');

}

const showTopNav = () => {
  $('#top-nav').css('slow');
  $('#top-nav').css('display', 'flex');
  $('#toggle.lnr.lnr-menu').css('background-color', '#101D12');
}



$(() => {
//####MENU BUTTONS
  $('#home').on('click', goHome)
  $('#aboutme').on('click', goBio)
  $('#resume').on('click', goResume)
  $('#projects').on('click', goProjects)




//####FOOTER BUTTONS
  $('#footHome').on('click', goHome)
  $('#footBio').on('click', goBio)
  $('#footResume').on('click', goResume)
  $('#footProjects').on('click', goProjects)


//####TOGGLE MENU TO DISPLAY
  $('#toggle').on('click', hideTopNav)
  $('#toggle').on('click', showTopNav)


//####CAROUSEL
  let currentImgIndex = 0
  const numOfImages = $('.carousel-images').children().length - 1

  $('.next').on('click',() => {
    $('.carousel-images').children().eq(currentImgIndex).css('display','none')
    if (currentImgIndex < numOfImages){
      currentImgIndex++
    }else{
      currentImgIndex = 0
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display','block')
  })

  $('.previous').on('click',() => {
    $('.carousel-images').children().eq(currentImgIndex).css('display','none')
    if (currentImgIndex > 0){
      currentImgIndex--
    }else{
      currentImgIndex = numOfImages
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display','block')
  })


  $("#logo").click(function() {
    window.location.href = "file:////Users/matteckman/portfolioFINAL/index.html" + data.pdf1;
});



})
