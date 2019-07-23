import Vue from 'vue'

const PADDING = 10
const CLASSNAME = 'tooltip-component'
const ANIMATION_SHOW_CLASSNAME = 'v-enter'
const ANIMATION_HIDE_CLASSNAME = 'v-leave-active'
const DEFAULT_OPTIONS = {
  text: '',
  position: 'top',
  delay: 400
}

class Tooltip {
  constructor (props) {
    this.text = props.text
    this.position = props.position
    this.delay = props.delay

    this._el = this._createTooltipElement()
    this._position = this.position
    this._visible = false
    this._timeout = null
  }

  show () {
    clearTimeout(this.tooltip._timeout)
    this.tooltip._addPosition(_checkFreeSpace(this, this.tooltip.position, this.tooltip._el, 50, 80))
    this.tooltip._timeout = setTimeout(() => {
      const bounding = this.getBoundingClientRect()
      let top = bounding.top + window.scrollY - PADDING
      if (this.tooltip._position === 'bottom') {
        top += bounding.height - PADDING
      }
      this.tooltip._el.style.top = `${top}px`
      this.tooltip._el.style.left = `${bounding.left + bounding.width / 2}px`
      document.body.appendChild(this.tooltip._el)
      this.tooltip._animate('show')
      this.tooltip._visible = true
    }, this.tooltip.delay)
  }

  hide () {
    clearTimeout(this.tooltip._timeout)
    try {
      document.body.removeChild(this.tooltip._el)
      this.tooltip._removeAllPositions()
      this.tooltip._visible = false
    } catch (e) {}
  }

  _createTooltipElement () {
    const el = document.createElement('div')
    el.classList.add(CLASSNAME)
    el.textContent = this.text
    return el
  }

  _addPosition (position) {
    this._position = position
    this._el.classList.add(`${CLASSNAME}-position-${position}`)
  }

  _removeAllPositions () {
    this._el.classList.remove(`${CLASSNAME}-position-top`)
    this._el.classList.remove(`${CLASSNAME}-position-bottom`)
  }

  _animate (action) {
    this._el.classList.remove(ANIMATION_SHOW_CLASSNAME, ANIMATION_HIDE_CLASSNAME)

    if (action === 'show') {
      if (!this._visible) {
        this._el.classList.add(ANIMATION_SHOW_CLASSNAME)
        setTimeout(() => {
          this._el.classList.remove(ANIMATION_SHOW_CLASSNAME)
        }, 0)
      }
    } else {
      // hiding animation may be here
    }
  }
}

function _checkFreeSpace (parentElement, elementPosition, element, topOffset, bottomOffset) {
  switch (elementPosition) {
  case 'top':
    if (parentElement.getBoundingClientRect().top - element.offsetHeight < topOffset) {
      return 'bottom'
    } else {
      return 'top'
    }
  case 'bottom':
    if (window.innerHeight - parentElement.getBoundingClientRect().top < bottomOffset) {
      return 'top'
    } else {
      return 'bottom'
    }
  }
}

function _init (el, binding) {
  const value = binding.value.text || binding.value
  const options = { ...DEFAULT_OPTIONS, ...binding.value, ...{ text: value } }
  el.tooltip = new Tooltip(options)
  el.addEventListener('mouseenter', el.tooltip.show)
  el.addEventListener('mousedown', el.tooltip.hide)
  el.addEventListener('mouseleave', el.tooltip.hide)
}

function _destroy (el) {
  el.removeEventListener('mouseenter', el.tooltip.show)
  el.removeEventListener('mousedown', el.tooltip.hide)
  el.removeEventListener('mouseleave', el.tooltip.hide)
  el.tooltip = null
}

Vue.directive('tooltip', {
  inserted: (el, binding) => {
    _init(el, binding)
  },
  update: (el, binding) => {
    _destroy(el)
    _init(el, binding)
  },
  unbind: el => {
    _destroy(el)
  }
})
