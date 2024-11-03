import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "change"]
  static targets = [ "elem" ]

  toggle() {
    this.elemTargets.forEach((elem) => {elem.classList.toggle(this.changeClass)}) 
  }
}