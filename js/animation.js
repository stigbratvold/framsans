const animatedTags = document.querySelectorAll("h1, h2, h3, p, section img, a.btn")

// fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function () {
  // look through all the animated tags and see
  // with the getBoundingClientRect if it's in the window
  let delay = 0.25

  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom

    if (tagTop < window.innerHeight) {
      tag.style.animation = 'fadeIn 1s 0.25s both'
    }
  })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
  fadeIn()
})

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
  fadeIn()
})
