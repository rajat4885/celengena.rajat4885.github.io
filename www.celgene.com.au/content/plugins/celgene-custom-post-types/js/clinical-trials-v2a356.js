var _clinical_trials={PLUGIN_PATH:_celgene_clinical_trials_plugin_path.path,document_init:function(){_clinical_trials.bind_filters();_clinical_trials.stripe_table();},window_init:function(){},bind_filters:function(){$("#clinical-trial-disease-state-filter").change(function(){if($(this).val()!="All"){$(".clinical-trial-data").addClass("disease-hide");$("."+$(this).val()).not(".status-hide").removeClass("disease-hide");}else{_clinical_trials.set_to_current_filters();}
_clinical_trials.count_visible_results();_clinical_trials.stripe_table();});$("#clinical-trial-status-filter").change(function(){if($(this).val()!="All"){$(".clinical-trial-data").addClass("status-hide");$("."+$(this).val()).not(".disease-hide").removeClass("status-hide");}else{_clinical_trials.set_to_current_filters();}
_clinical_trials.count_visible_results();_clinical_trials.stripe_table();});},set_to_current_filters:function(){$(".clinical-trial-data").removeClass("disease-hide");$(".clinical-trial-data").removeClass("status-hide");if($("#clinical-trial-disease-state-filter").val()!="All"){$("#clinical-trial-disease-state-filter").trigger("change");}
if($("#clinical-trial-status-filter").val()!="All"){$("#clinical-trial-status-filter").trigger("change");}},count_visible_results:function(){var count=$(".clinical-trial-data").not(".status-hide, .disease-hide").length;_clinical_trials.change_result_count(count);},change_result_count:function(count){var COUNT_HTML=count+" trial";if(count>1||count==0){COUNT_HTML+="s";}
COUNT_HTML+=" found";$("#celgene-clinical-trials-data-count").html(COUNT_HTML);if(count==0){$("#clinical-trials-no-results").show();}else{$("#clinical-trials-no-results").hide();}},stripe_table:function(){$(".clinical-trial-data").removeClass("on");$(".clinical-trial-data").removeClass("off");var on=true;$(".clinical-trial-data").not(".status-hide, .disease-hide").each(function(){if(on){on=false;$(this).addClass("on");}else{on=true;$(this).addClass("off");}});}}
$(document).ready(function(){_clinical_trials.document_init();$(window).load(function(){_clinical_trials.window_init();});});