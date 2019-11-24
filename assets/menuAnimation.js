export const menuAnimation = () => {
  const indicator = document.querySelector('.nav-indicator')
  const items = document.querySelectorAll('.nav-item')

  function handleIndicator (el) {
    items.forEach(item => {
      item.classList.remove('nuxt-link-active')
      item.removeAttribute('style')
    })

    indicator.style.width = `${el.offsetWidth}px`
    indicator.style.left = `${el.offsetLeft}px`
    indicator.style.backgroundColor = el.getAttribute('active-color')

    el.classList.add('nuxt-link-active')
    el.style.color = el.getAttribute('active-color')
  }

  items.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      handleIndicator(e.target)
    })
    item.classList.contains('nuxt-link-active') && handleIndicator(item)
  })
}
