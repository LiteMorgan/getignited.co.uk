import Headroom from '../vendor/headroom'

export default class headerFix {
  constructor(el) {
    headroomInit(el)
  }
}

function headroomInit(el) {
  const headroom = new Headroom(el, {
    offset: 0,
    tolerance: {
      up: 5,
      down: 0,
    },
    classes: {
      initial:   '',
      pinned:    'header-bar--pinned',
      unpinned:  'header-bar--unpinned',
      top:       'header-bar--top',
      notTop:    'header-bar--not-top',
      bottom:    '',
      notBottom: '',
    }
  })
  headroom.init()
}




