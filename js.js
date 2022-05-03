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



//####TOGGLE MENU TO DISPLAY
  $('#toggle').on('click', hideTopNav)
  $('#toggle').on('click', showTopNav)


  $('#top-nav').append($('<button>').addClass('button lnr lnr-home').attr('id','home').attr('title','Home'))

  $('#top-nav').append($('<button>').addClass('button lnr lnr-user').attr('id','aboutme').attr('title','Bio'))

  $('#top-nav').append($('<button>').addClass('button lnr lnr-code').attr('id','projects').attr('title','Projects'))

  $('#top-nav').append($('<button>').addClass('button lnr lnr-briefcase').attr('id','resume').attr('title','Resume'))


  $('#home').on('click', goHome)
  $('#aboutme').on('click', goBio)
  $('#resume').on('click', goResume)
  $('#projects').on('click', goProjects)



  $('.links').append($('<a>').attr('href', 'https://www.linkedin.com/in/mattheweckman/').attr('target','_blank').addClass('fa fa-linkedin'))

  $('.links').append($('<a>').attr('href', 'https://github.com/eckmanmatt/portfolioFinal/').attr('target','_blank').addClass('fa fa-github'))

  $('.links').append($('<a>').attr('href', 'https://codepen.io/matteckman/').attr('target','_blank').addClass('fa fa-codepen'))

  $('.links').append($('<a>').attr('href', 'https://open.spotify.com/user/matt.eckman/').attr('target','_blank').addClass('fa fa-spotify'))



  $('.logoLeft').append($('<h3>').attr('id','email').text('Atlanta, GA'))
  

//####CAROUSEL -REFERENCED CORGI CAROUSEL FROM EXERCISE
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



$('#bottom-nav').append($('<button>').addClass('button lnr lnr-home').attr('id','footHome').attr('title','Home'))

$('#bottom-nav').append($('<button>').addClass('button lnr lnr-user').attr('id','footBio').attr('title','Bio'))

$('#bottom-nav').append($('<button>').addClass('button lnr lnr-code').attr('id','footProjects').attr('title','Projects'))

$('#bottom-nav').append($('<button>').addClass('button lnr lnr-briefcase').attr('id','footResume').attr('title','Resume'))


//####FOOTER BUTTONS
  $('#footHome').on('click', goHome)
  $('#footBio').on('click', goBio)
  $('#footResume').on('click', goResume)
  $('#footProjects').on('click', goProjects)

})
