jQuery(document).ready(function(a){function t(){return"undefined"!=typeof tinymce&&null!=tinymce.get("job_description")}a(document.body).on("click",".job-manager-remove-uploaded-file",function(){var i=a(this).closest(".fieldset-type-file").find("input[type=file][multiple][data-file_limit]");return a(this).closest(".job-manager-uploaded-file").remove(),i.trigger("update_status"),!1}),a(document.body).on("update_status",".fieldset-type-file input[type=file][multiple][data-file_limit]",function(){var i=parseInt(a(this).data("file_limit"),10)-parseInt(a(this).siblings(".job-manager-uploaded-files").first().children(".job-manager-uploaded-file").length,10);0<i?a(this).prop("disabled",!1):a(this).prop("disabled",!0),a(this).data("file_limit_left",i)}),a(document.body).on("change",".fieldset-type-file input[type=file][multiple][data-file_limit]",function(){var i,e,t=parseInt(a(this).data("file_limit"),10),s=t-parseInt(a(this).siblings(".job-manager-uploaded-files").first().children(".job-manager-uploaded-file").length,10),n=a(this).get(0);return void 0!==n.files&&(i=parseInt(n.files.length,10),t&&s<i?(e=job_manager_job_submission.i18n_over_upload_limit,a(this).data("file_limit_message")&&"string"==typeof a(this).data("file_limit_message")&&(e=a(this).data("file_limit_message")),e=e.replace("%d",t),n.setCustomValidity(e)):n.setCustomValidity(""),n.reportValidity()),!0}),a(".fieldset-type-file input[type=file][multiple][data-file_limit]").trigger("update_status"),a(document.body).on("click","#submit-job-form .button.save_draft",function(){var i=a(this).closest("#submit-job-form"),e=!0;return i.addClass("disable-validation"),setTimeout(function(){i.removeClass("disable-validation")},1e3),i.find("div.draft-required input[required]").each(function(){if(a(this).get(0).reportValidity(),a(this).is(":invalid"))return e=!1}),e}),a(document.body).on("submit",".job-manager-form",function(i){a(this).hasClass("disable-validation")||!function(){if(function(){var i=a("#job_category");return i.length&&!i.val()&&i.parent().hasClass("required-field")&&i.next().hasClass("select2")}()){a(this).find("input[type=submit]").blur();var i=a(".select2-search__field")[0];return i.setCustomValidity(job_manager_job_submission.i18n_required_field),i.reportValidity(),!0}if(function(){if(!t())return!1;var i=tinymce.get("job_description").getContent(),e=a("#job_description");return 0===i.length&&e.parents(".required-field").length&&e.parents(".required-field").is(":visible")}()){a(this).find("input[type=submit]").blur();var e=a("#job_description");return e.css({height:1,resize:"none",padding:0}),e.show(),e[0].setCustomValidity(job_manager_job_submission.i18n_required_field),e[0].reportValidity(),!0}return!1}()?a(this).hasClass("prevent-spinner-behavior")||(a(this).find(".spinner").addClass("is-active"),a(this).find("input[type=submit]").addClass("disabled").on("click",function(){return!1})):i.preventDefault()}),a("#job_category").on("select2:select",function(){var i=a(".select2-search__field")[0];i.setCustomValidity(""),i.reportValidity()}),setTimeout(function(){t()&&tinymce.get("job_description").on("Change",function(){var i=a("#job_description");i.hide(),i[0].setCustomValidity(""),i[0].reportValidity()})},1e3)});