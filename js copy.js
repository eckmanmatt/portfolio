const goHome = () => {
  $(window).scrollTop(0)
}
const goBio = () => {
  $(window).scrollTop(0)
}
const goResume = () => {
  $(window).scrollTop(0)
}
const goProjects = () => {
  $(window).scrollTop('#projects')
}

const hideTopNav = () => {
  $('#top-nav').toggle('slow')

  // $('#top-nav').hide()
}
const showTopNav = () => {
  $('#top-nav').css('slow')
  $('#top-nav').css('display', 'inline')

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






})
