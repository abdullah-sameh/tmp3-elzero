document.querySelector('form').addEventListener('submit', (e) => e.preventDefault())

// for hovering on "other links" link
const otherLink = document.querySelector('[href="#other"]')
const popDiv = document.querySelector('.pop-other-links')

otherLink.addEventListener('mouseover', () => {
  popDiv.style.display = "grid"
})
otherLink.addEventListener('mouseout', () => {
  popDiv.style.display = 'none'
})
popDiv.addEventListener('mouseover', () => {
  popDiv.style.display = "grid"
})
popDiv.addEventListener('mouseout', () => {
  popDiv.style.display = 'none'
})

// article section
const articleSec = document.getElementById('article')
for (let i = 1; i <= 8; i++) {
  articleSec.querySelector('.container').innerHTML += `
            <div class="card">
              <img src="./imgs/article/cat-0${i}.jpg" alt="">
              <h3>Lorem, ipsum.</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fuga.</p>
              <footer>
                <a href="#">read more</a>
                <a href="#"><i class="material-icons">arrow_right_alt</i></a>
              </footer>
            </div>
            `
}

// testimonial section
const testSec = document.getElementById('testimonials')
const name = ['mohamed ahmed', 'fayed emad', 'ibrahim mohamed', 'hazem khaled', 'yasser shahin', 'ali abdo']
const job = ['full stack developer', 'front-end developer', 'back-end developer', 'UI & UX developer', 'devOps developer', 'tester engineer']
for (let i = 0; i < 6; i++) {
  testSec.querySelector('.container').innerHTML += `
    <div class="test-card">
      <img src="./imgs/testimonials/avatar-0${i+1}.png" alt="">
      <h3>${name[i]}</h3>
      <p>${job[i]}</p>
      <p>${icon()}</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus et quae soluta. Quo minus optio sint suscipit aspernatur?</p>
    </div>
  `
}
function icon() {
  let result = ''
  for (let i = 0; i < 5; i++) {
    result += `<i class="material-icons">star</i>`
  }
  return result
}

// team section
const teamSec = document.getElementById('team')
for (let i = 1; i <= 8; i++) {
  teamSec.querySelector('.container').innerHTML += `
    <div class="team-card">
      <div class="img-icons">
        <img src="./imgs/team/team-0${i}.jpg" alt="">
        <div class="icons">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-youtube-play"></i></a>
        </div>
      </div>
      <h3>Name</h3>
      <p>Simple Short Description</p>
    </div>
  `
}

// services section
const icons = ['security', 'handyman', 'place', 'code', 'palette', 'campaign']
const names = ['security', 'fixing issues', 'location', 'coding', 'security', 'marketing']
const servicesSec = document.getElementById('services')
for (let i in icons) {
  servicesSec.querySelector('.container').innerHTML += `
    <div class="card">
      <i class="material-icons">${icons[i]}</i>
      <h2>${names[i]}</h2>
      <div class="footer">
        <p>0${Number(i)+1}</p>
        <a href="#">Details</a>
      </div>
    </div>`
}


// video section 
const videoSec = document.getElementById('video')
const links = videoSec.querySelectorAll('a')
links.forEach(element => {
  element.addEventListener('click', () => {
    videoSec.querySelector('#showedVideo').innerHTML = element.innerText
  })
});

// dark and light mode
const btnMode = document.getElementById('mode')
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
if (darkThemeMq.matches) {
  // Theme set to dark.
  btnMode.innerHTML = `<i class="material-icons">dark_mode</i>`
  document.documentElement.setAttribute('data-mode', 'dark');
} else {
  // Theme set to light.
  btnMode.innerHTML = `<i class="material-icons">light_mode</i>`
  document.documentElement.setAttribute('data-mode', 'light');
}

btnMode.addEventListener('click', () => {
  if (btnMode.querySelector('i').innerText === 'dark_mode') {
    btnMode.innerHTML = `<i class="material-icons">light_mode</i>`
    document.documentElement.setAttribute('data-mode', 'light');
  } else {
    btnMode.innerHTML = `<i class="material-icons">dark_mode</i>`
    document.documentElement.setAttribute('data-mode', 'dark');
  }
})