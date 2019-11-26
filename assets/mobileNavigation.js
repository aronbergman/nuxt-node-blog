export const mobileNavigation = () => {
  let burger = document.getElementById('burger-button')

  burger.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.classList.toggle('open')
    burger.classList.toggle('open')
  })
}
