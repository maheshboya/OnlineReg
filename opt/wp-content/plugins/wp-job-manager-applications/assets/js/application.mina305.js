jQuery(document).ready(function(a){a.isFunction(a.fn.select2)&&"undefined"!=typeof job_manager_select2_args&&a(".application_details select[multiple]").each(function(){void 0===a(this).data("chosen")&&a(this).select2(job_manager_select2_args)}),a(".job-manager-applications-error").size()&&a(".application_button").click(),a("body").on("change",".job-manager-application-form :input",function(){a("input.wp_job_manager_send_application_button").removeAttr("disabled","disabled").removeClass("disabled")}),a("body").on("submit",".job-manager-application-form",function(){var e=a(this),i=!0;return a(".job-manager-applications-error").remove(),a(this).find(":input[required]").each(function(){if(!a(this).val()){var n=job_manager_applications.i18n_required.replace("%s",a(this).closest("fieldset").find("label").text());return e.prepend('<p class="job-manager-error job-manager-applications-error">'+n+"</p>"),i=!1,!1}}),i&&a("input.wp_job_manager_send_application_button").attr("disabled","disabled").addClass("disabled"),i})});