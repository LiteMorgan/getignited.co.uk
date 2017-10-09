export default class facebookShare {
  constructor(el) {
    el.addEventListener('click', (e) => { this.onClick(e) })
  }

  onClick(evt) {
    const facebookLink = document.querySelector('[data-link]')
    const theLink = facebookLink.dataset.link

    console.log(theLink)

    FB.ui({
      method: 'share',
      mobile_iframe: true,
      href: theLink,
    }, function(response){});
  }
};
