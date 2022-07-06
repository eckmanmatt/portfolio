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

// //####TOGGLE MENU TO DISPLAY
//   $('#toggle').on('click', hideTopNav)
//   $('#toggle').on('click', showTopNav)
//
//
//   $('#top-nav').append($('<button>').addClass('button lnr lnr-home').attr('id','home').attr('title','Home'))
//
//   $('#top-nav').append($('<button>').addClass('button lnr lnr-user').attr('id','aboutme').attr('title','Bio'))
//
//   $('#top-nav').append($('<button>').addClass('button lnr lnr-code').attr('id','projects').attr('title','Projects'))
//
//   $('#top-nav').append($('<button>').addClass('button lnr lnr-briefcase').attr('id','resume').attr('title','Resume'))



  $('.links').append($('<a>').attr('href', 'https://www.linkedin.com/in/mattheweckman/').attr('target','_blank').addClass('linkL fa fa-linkedin'))

  $('.links').append($('<a>').attr('href', 'https://github.com/eckmanmatt/portfolioFinal/').attr('target','_blank').addClass('linkL fa fa-github'))

  $('.links').append($('<a>').attr('href', 'https://codepen.io/matteckman/').attr('target','_blank').addClass('linkL fa fa-codepen'))

  // $('.links').append($('<a>').attr('href', 'https://open.spotify.com/user/matt.eckman/').attr('target','_blank').addClass('linkL fa fa-spotify'))




  $('.pageNav').append($('<a>').attr('onClick', "document.getElementById('projects').scrollIntoView()").attr('target','_blank').addClass('linkR fa fa-code').attr('title','Scroll to Projects'))

  $('.pageNav').append($('<a>').attr('onClick', "document.getElementById('resume').scrollIntoView()").attr('target','_blank').addClass('linkR fa fa-briefcase').attr('title','Scroll to Resume'))

  // $('.pageNav').append($('<a>').attr('onClick', "document.getElementById('contact').scrollIntoView()").attr('target','_blank').addClass('linkR fa fa-at').attr('title','Scroll to Contact'))
  //
  //





//####FOOTER BUTTONS
  $('#footHome').on('click', goHome)
  $('#footBio').on('click', goBio)
  $('#footResume').on('click', goResume)
  $('#footProjects').on('click', goProjects)

})
