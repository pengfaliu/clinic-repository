export function scrollClick (el, top) {
  var curTop = el.scrollTop
  var height = top - curTop
  var timmer = setInterval(function () {
    curTop = curTop + height / 3
    el.scrollTop = curTop
    height = top - curTop
    if (Math.abs(height) < 10) {
      clearInterval(timmer)
    }
  }, 20)
}
export function scroll (el, top) {

}