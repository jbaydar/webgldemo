function clear_div() {
  $('#main').empty();
  $('canvas').remove();
  delete window.scene;
  delete window.mesh;
  delete window.renderer;
  delete window.camera;
  delete window.loader;
  delete window.animate;
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame = undefined;
  }

}

function add_demo(demo) {
  clear_div()
  $('#main').load(demo);
}