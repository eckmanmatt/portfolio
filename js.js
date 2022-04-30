const goHome = () => {
$(window.location.href='file:////Users/matteckman/portfolioFINAL/index.html')
}

const goBio = () => {
  $(window.location.href='file:////Users/matteckman/portfolioFINAL/bio.html')
}
const goResume = () => {
  $(window.location.href='file:////Users/matteckman/portfolioFINAL/resume.html')
}
const goProjects = () => {
  $(window.location.href='file:////Users/matteckman/portfolioFINAL/projects.html')
}

const hideTopNav = () => {
  $('#top-nav').toggle('slow')

  // $('#top-nav').hide()
}
const showTopNav = () => {
  $('#top-nav').css('slow');
  $('#top-nav').css('display', 'flex');

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
