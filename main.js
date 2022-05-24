window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll ()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a seção passou da linha alvo
  // Quais dados vou precisar?

  //O topo da seção
  const sectionTop = section.offsetTop;

  //A altura da seção
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  //console.log('O topo da seção chegou ou passou da linha?',sectionTopReachOrPassedTargetLine);

  //Verificar se a base está abaixo da linha alvo
  //Quais dados vou precisar?

  //A seção termina onde?
  
  const sectionEndsAt = sectionTop + sectionHeight;
  
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

  //Limites da seção
  
  const sectionBounndaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

  menuElement.classList.remove('active')
  if (sectionBounndaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll () {
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll () {
  if(scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}


function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #about img`);


  
  