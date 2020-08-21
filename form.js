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
 * Simple helper to return the capitalized version of the
 * current select cluster (i.e., Owens and Pitzer).
 */
function current_cluster_capitalized(){
  var cluster = $('#batch_connect_session_context_cluster').val();
  return capitalize(cluster);
}

/**
 * Capitalize a string.
 *
 * @param      {string}  str     The string to capitalize
 */
function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}

/**
 * Fix num cores, allowing blanks to remain
 *
 * @param      {event}  event     A change event (node_type or cluster changes)
 */
function fix_num_cores(event) {
  const num_cores_input = $('#batch_connect_session_context_num_cores');
  const data = $('#batch_connect_session_context_node_type').find(':selected').data();
  const cluster = current_cluster_capitalized();

  // do nothing if num_cores is blank or there's no data for node_type_input
  if(num_cores_input.val() === '' || !data) {
    return;
  }

  if(event.target && event.target.id == 'batch_connect_session_context_cluster'){
    const prev_cluster = event.target.textContent.split("\n")[0];
    shift_num_cores_value(num_cores_input, prev_cluster);
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
 * Shift the number of cores value up or down when the cluster changes.
 *
 * Example: I've set cores to 28, owens maximum. Then I change clusters
 * to pitzer. This value should shift to 40, which is Pitzer's maximum.
 *
 * @param      {element}   num_cores_input     the num_cores element
 * @param      {string}    previous_cluster    the name of the previous cluster
 */
function shift_num_cores_value(num_cores_input, previous_cluster){
  const prev_max_cores = max_cores_for_cluster(previous_cluster);
  const cluster = current_cluster_capitalized();

  if(num_cores_input.val() == prev_max_cores){
    num_cores_input.val(max_cores_for_cluster(cluster));
  }
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
 * Hide or show options of an element based on which cluster is
 * currently selected and the data-option-for-CLUSTER attributes
 * for each option
 *
 * @param      {string}  element_name  The name of the element with options to toggle
 */
function toggle_options(element_name) {
  const cluster = current_cluster_capitalized();
  const search = "#" + element_name + " option"
  const options = $(search);

  options.each(function(_i, option) {
    // the variable 'option' is just a data structure. it has no attr, data, show
    // or hide methods so we have to query for it again
    let option_element = $(search + "[value='" + option.value + "']");
    let data = option_element.data();
    let show = data["optionFor" + cluster];

    if(show) {
      option_element.show();
    } else {
      option_element.hide();

      if(option_element.prop('selected')) {
        option_element.prop('selected', false);

        // when de-selecting something, the default is to fallback to the very first
        // option. But there's an edge case where you want to hide the very first option,
        // and deselecting it does nothing.
        if(option_element.next()){
          option_element.next().prop('selected', true);
        }
      }
    }
  });
}

/**
 * If the user submits a blank value for num_cores, fill in the maximum 
 * value for that cluster & node-type combination
 */
function submit_blank_cores() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  let num_cores_input = $('#batch_connect_session_context_num_cores');

  if(num_cores_input.val() !== '') {
    return;
  } else {
    const data = node_type_input.find(':selected').data();
    const max = data["maxPpn" + current_cluster_capitalized()];
    num_cores_input.val(max);
  }
}

/**
 * Find the max cores for the cluster given node type
 * that's currently selected
 *
 * @param {string}  cluster_name  The name the cluster
 */
function max_cores_for_cluster(cluster_name) {
  if(cluster_name.charAt(0).toUpperCase != cluster_name.charAt(0)){
    cluster_name = capitalize(cluster_name);
  }

  const node_type_input = $('#batch_connect_session_context_node_type');
  const data = node_type_input.find(':selected').data();
  const max = data["maxPpn" + cluster_name];

  if(max) {
    return max.toString();
  } else {
    return "0";
  }
}

/**
 * Toggle the visibility of the CUDA select when the selected
 * node_type changes
 */
function toggle_cuda_version_visibility(selected_node_type) {
  const cuda_element = $('#batch_connect_session_context_cuda_version');
  const choose_gpu = selected_node_type == 'gpu';

  toggle_visibility_of_form_group(cuda_element, choose_gpu);
  if(choose_gpu){
    toggle_options("batch_connect_session_context_cuda_version");
  }
}

/**
 * Sets the change handler for the node_type select.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change((event) => node_type_change_handler(event));
}

/**
 * Sets the change handler for the cluster select.
 */
function set_cluster_change_handler() {
  let cluster_input = $('#batch_connect_session_context_cluster');
  cluster_input.change((event) => cluster_change_handler(event));
}

/**
 * Update UI when node_type changes
 */
function node_type_change_handler(event) {
  fix_num_cores(event);
  toggle_cuda_version_visibility(event.target.value);
}

/**
 * Update UI when the cluster changes
 */
function cluster_change_handler(event) {
  fix_num_cores(event);
  toggle_options("batch_connect_session_context_cuda_version");
}

/**
 * Main
 */

// Set controls to align with the values of the last session context
fix_num_cores({ target: document.querySelector('#batch_connect_session_node_type') });
toggle_cuda_version_visibility(
  $('#batch_connect_session_context_node_type option:selected').val()
);

// Install event handlers
set_node_type_change_handler();
set_cluster_change_handler();

// when users launch, set num_cores if it's a blank value
$(document).on("submit", function() {
  submit_blank_cores();
});
