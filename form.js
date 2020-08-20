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
  const data = node_type_input.find(':selected').data();
  var cluster = $('#batch_connect_session_context_cluster').val();
  cluster = cluster.charAt(0).toUpperCase() + cluster.slice(1);

  // classroom deployments don't have node_type_input
  if(!data){
    return;
  }

  const min = data["minPpn" + cluster];
  const max = data["maxPpn" + cluster];

  num_cores_input.attr('max', max);
  num_cores_input.attr('min', min);

  // Clamp value between min and max
  num_cores_input.val(
    clamp(min, max, num_cores_input.val())
  );
}

/**
 * Toggle the visibility of a form group
 *
 * @param      {string}    form_id  The form identifier
 * @param      {boolean}   show     Whether to show or hide
 */
function toggle_visibility_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element.parent();

  // kick out if you didn't find what you're looking for
  if(parent.size() <= 0) {
    return;
  }

  if(show) {
    parent.show();
  } else {
    form_element.val('');
    parent.hide();
  }
}

/**
 * Toggle the visibility of the CUDA select when the selected
 * node_type changes
 */
function toggle_cuda_version_visibility(selected_node_type) {
  const cuda_element = $('#batch_connect_session_context_cuda_version');
  toggle_visibility_of_form_group(cuda_element, selected_node_type == 'gpu');
}

/**
 * Sets the change handler for the node_type select.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change((event) => node_type_change_handler(event));
}

/**
 * Sets the change handler for the node_type select.
 */
function set_cluster_change_handler() {
  let cluster_input = $('#batch_connect_session_context_cluster');
  cluster_input.change((event) => cluster_change_handler(event));
}

/**
 * Update UI when node_type changes
 */
function node_type_change_handler(event) {
  fix_num_cores();
  toggle_cuda_version_visibility(event.target.value);
}

/**
 * Update UI when node_type changes
 */
function cluster_change_handler(event) {
  fix_num_cores();
  toggle_cuda_version_visibility(event.target.value);
}

/**
 * Main
 */

// Set controls to align with the values of the last session context
fix_num_cores();
toggle_cuda_version_visibility(
  $('#batch_connect_session_context_node_type option:selected').val()
);

// Install event handlers
set_node_type_change_handler();
set_cluster_change_handler();