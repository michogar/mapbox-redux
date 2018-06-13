import text from './text'

class About {
  constructor (parent) {
    this.parent = document.getElementById(parent)
    this.render()
  }
  render () {
    const div = document.createElement('div')
    div.className = 'col12 pad2y'
    this.parent.appendChild(div)
    div.insertAdjacentHTML('beforeend', text)
  }
}

export default About
