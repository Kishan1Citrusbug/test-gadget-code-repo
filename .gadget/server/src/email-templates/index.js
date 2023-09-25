"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    renderEmailTemplate: function() {
        return renderEmailTemplate;
    },
    renderVerifyEmailTemplate: function() {
        return renderVerifyEmailTemplate;
    },
    renderResetPasswordTemplate: function() {
        return renderResetPasswordTemplate;
    }
});
const _globals = require("../globals");
const _resetpassword = require("./reset-password");
const _verifyemail = require("./verify-email");
const _auth = require("../auth");
const _AppConfigs = require("../AppConfigs");
const _emails = require("../emails");
const _errors = require("../errors");
const renderEmailTemplate = (template, data)=>{
    if (!_AppConfigs.Config.GADGET_APP_NAME && !data.app_name) {
        throw new _errors.GlobalNotSetError("GADGET_APP_NAME is not yet defined");
    }
    if (!_emails.emails) {
        throw new _errors.GlobalNotSetError("emails is not yet defined");
    }
    const app_name = data.app_name ?? _AppConfigs.Config.GADGET_APP_NAME;
    let link;
    if (template === _verifyemail.VERIFY_EMAIL_TEMPLATE) {
        link = (0, _auth.generateVerificationUrl)(data.link || "").url;
    } else if (template === _resetpassword.RESET_PASSWORD_TEMPLATE) {
        link = (0, _auth.generatePasswordResetUrl)(data.link || "").url;
    }
    try {
        return _emails.emails.render(template, {
            ...data,
            app_name,
            link
        });
    } catch (error) {
        _globals.Globals.logger.error({
            error
        }, "[emails] An error occurred rendering your EJS email template");
        throw error;
    }
};
const renderVerifyEmailTemplate = (data)=>{
    return renderEmailTemplate(_verifyemail.VERIFY_EMAIL_TEMPLATE, data);
};
const renderResetPasswordTemplate = (data)=>{
    return renderEmailTemplate(_resetpassword.RESET_PASSWORD_TEMPLATE, data);
};
