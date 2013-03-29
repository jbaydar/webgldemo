function clear_div() {
  $('#main').empty();
  $('canvas').remove();
  delete window.scene;
  delete window.mesh;
  delete window.renderer;
  delete window.camera;
  delete window.loader;
  delete window.animate;
}

function add_cube() {
  clear_div()
  $('#main').load('cube');
}

function add_chain() {
  clear_div()
  $('#main').load('chain');
}

function add_ring() {
  clear_div()
  $('#main').load('ring');
}