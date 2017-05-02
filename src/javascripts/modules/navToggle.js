/*
  Toggle navigation for mobile devices
*/

export default class navToggle {
  constructor(el) {
    el.addEventListener('click', (e) => { this.onClick(e) })
  }

  onClick(evt) {
    const body = document.querySelector('body')

    body.classList.toggle('navbar--open')
  }
}