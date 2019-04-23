'use strict'

/**
 * Clamp between two numbers
 *
 * @param      {number}  min     The minimum
 * @param      {number}  max     The maximum
 * @param      {number}  val     The value to clamp
 */
function clamp(min, max, val) {
  return Math.min(max, Math.max(min, val));
}

/**
 * Fix num cores, allowing blanks to remain
 */
function fix_num_cores() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  let num_cores_input = $('#batch_connect_session_context_num_cores');

  if(num_cores_input.val() === '') {
    return;
  }

  set_ppn_by_node_type(node_type_input, num_cores_input);
}

/**
 * Sets the ppn by node type.
 *
 * @param      {element}  node_type_input  The node type input
 * @param      {element}  num_cores_input  The number cores input
 */
function set_ppn_by_node_type(node_type_input, num_cores_input) {
  let data = node_type_input.find(':selected').data();

  num_cores_input.attr('max', data.maxPpn);
  num_cores_input.attr('min', data.minPpn);

  // Clamp value between min and max
  num_cores_input.val(
    clamp(data.minPpn, data.maxPpn, num_cores_input.val())
  );
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
 * Looking for the value of data-can-show-cuda
 */
function toggle_cuda_version_visibility() {
  let node_type_input = $('#batch_connect_session_context_node_type');

  // Allow for cuda_version control not existing
  if ( ! ($('#batch_connect_session_context_cuda_version').length > 0) ) {
    return;
  }

  toggle_visibilty_of_form_group(
    '#batch_connect_session_context_cuda_version',
    node_type_input.find(':selected').data('can-show-cuda')
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

// Set controls to align with the values of the last session context
fix_num_cores();
toggle_cuda_version_visibility();

// Install event handlers
set_node_type_change_handler();