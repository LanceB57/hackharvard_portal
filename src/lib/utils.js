export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function clickOutside(node) {
  const handleClick = event => {
    if (!node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent('outclick'))
    }
  }
  document.addEventListener('click', handleClick, true)
  return {
    destroy() {
      document.removeEventListener('click', handleClick, true)
    }
  }
}
export function createFields(...fieldNames) {
  const obj = {}
  fieldNames.forEach(element => {
    obj[element] = {
      value: '',
      error: false
    }
  })
  return obj
}
