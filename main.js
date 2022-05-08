window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll()
  activeteMenuAtCurrentSection(home)
  activeteMenuAtCurrentSection(services)
  activeteMenuAtCurrentSection(about)
  activeteMenuAtCurrentSection(contact)
}

function activeteMenuAtCurrentSection(section){

  const targetLine = scrollY + innerHeight / 2

  //verificar se secao passo da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionToReachOrPassedTargetline = targetLine >= sectionTop
  // console.log(sectionToReachOrPassedTargetline)

  const sectionEndAt = sectionTop + sectionHeight 
  const sectionEndPassedTargetline = sectionEndAt <=targetLine

  //limites da secao
  const sectionBoundaries = sectionToReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute("id")
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  menuElement.classList.remove('active')
  if(sectionBoundaries){
    menuElement.classList.add('active')
  }

}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}
function closeMenu() {
  document.body.classList.remove("menu-expanded");
}


// console.log(scrollY);

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  "#home,#home img, #home .stats, #services, #services header,#services.card,#about,#about header, #about .content "
);
