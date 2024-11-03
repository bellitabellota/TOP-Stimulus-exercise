import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "warn"]
  static targets = [ "elem" ]

  warn() {
    if (this.elemTarget.value.length > 7) {
        this.elemTarget.classList.add(this.warnClass);
    } else {
        this.elemTarget.classList.remove(this.warnClass);
    }
  }
}