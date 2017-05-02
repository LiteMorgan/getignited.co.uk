import 'picturefill'
import './vendor/headroom'

//import './modules/svgSpriteInject'
import './modules/index.js'

// console.log(`app.js has loaded!`)

const preloadSupported = () => {
  const link = document.createElement('link');
  const relList = link.relList;
  if (!relList || !relList.supports)
    return false;
  return relList.supports('preload');
};