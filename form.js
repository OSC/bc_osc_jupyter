'use strict'

/**
 * Fix num cores, allowing blanks to remain
 */
function fix_num_cores() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  let node_type = node_type_input.val();
  let num_cores_input = $('#batch_connect_session_context_num_cores');

  if(num_cores_input.val() === '') {
    return;
  }

  if(node_type === 'hugemem') {
    set_ppn_owens_hugemem(num_cores_input);
  } else {
    set_ppn_owens_regular(num_cores_input);
  }
}

/**
 * Sets the PPN limits available for Owens hugemem nodes.
 *
 * hugemem reservations are always assigned the full node
 *
 * @param      {element}  num_cores_input  The input for num_cores
 */
function set_ppn_owens_hugemem(num_cores_input) {
  const NUM_CORES = 48;
  num_cores_input.attr('max', NUM_CORES);
  num_cores_input.attr('min', NUM_CORES);
  num_cores_input.val(NUM_CORES);
}

/**
 * Sets the PPN limits available for non hugemem Owens nodes.
 *
 * @param      {element}  num_cores_input  The input for num_cores
 */
function set_ppn_owens_regular(num_cores_input) {
  const NUM_CORES = 28;
  num_cores_input.attr('max', NUM_CORES);
  num_cores_input.attr('min', 0);
  num_cores_input.val(Math.min(NUM_CORES, num_cores_input.val()));
}

/**
 * Toggle the visibilty of a form group
 *
 * @param      {string}    form_id  The form identifier
 * @param      {boolean}   show     Whether to show or hide
 */
function toggle_visibilty_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element.parent();

  if(show) {
    parent.show();
  } else {
    form_element.val('');
    parent.hide();
  }
}

/**
 * Toggle the visibilty of the CUDA select
 *
 * GPU: visible
 * *: hidden
 */
function toggle_cuda_version_visibility() {
  let cuda_version = $('#batch_connect_session_context_cuda_version');
  let node_type_input = $('#batch_connect_session_context_node_type');
  let show = (node_type_input.val() === 'gpu');

  toggle_visibilty_of_form_group(
    '#batch_connect_session_context_cuda_version',
    show
  );
}

/**
 * Sets the change handler for the node_type select.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change(node_type_change_hander);
}

/**
 * Update UI when node_type changes
 */
function node_type_change_hander() {
  fix_num_cores();
  toggle_cuda_version_visibility();
}

/**
 * Main
 */
$(document).ready(function() {
  // Set controls to align with the values of the last session context
  fix_num_cores();
  toggle_cuda_version_visibility();

  // Install event handlers
  set_node_type_change_handler();
});