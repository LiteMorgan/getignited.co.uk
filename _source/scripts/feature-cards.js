// Calculate heading height in a post feature card and 
// adjust the margin-top relevant to the calculated height

const featureCards = (function() {

  // Set mobile width
  function isMobile() {
    return window.innerWidth < 768
  }

  function loadCards() {
    const featureCard = document.getElementsByClassName('card-feature')

    for (card of featureCard) {
      
      if (isMobile()) {
        card.style.cssText = "margin-top: " + 0 + ";"
        return
      }

      const cardLinkClass       = card.getElementsByClassName('card__link')
      const headingClass        = card.getElementsByClassName('feature-heading')

      const cardPaddingTop      = parseInt( getComputedStyle(cardLinkClass[0]).getPropertyValue('padding-top'), 10 )
      const titleHeight         = parseInt(headingClass[0].offsetHeight, 10)
      const titleLineHeight     = parseInt(window.getComputedStyle(headingClass[0]).getPropertyValue('line-height'), 10)
      const titlePaddingBottom  = parseInt(window.getComputedStyle(headingClass[0]).getPropertyValue('padding-bottom'), 10)
      const finalTitleHeight    = titleHeight - (titleHeight / titleLineHeight)
      const cardMarginTop       = cardPaddingTop + finalTitleHeight + titlePaddingBottom + 'px'

      card.style.cssText = "margin-top: -" + cardMarginTop + ";"
    }
  }

  const updateCards = _.debounce(function(e) {
    loadCards()
  }, 100)


  return {
    start: function() {
      loadCards()

      window.addEventListener("resize", updateCards, false)
    }
  }
})()

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  featureCards.start()
});