import { Globals } from "../globals";
import { RESET_PASSWORD_TEMPLATE } from "./reset-password";
import { VERIFY_EMAIL_TEMPLATE } from "./verify-email";
import { generatePasswordResetUrl, generateVerificationUrl } from "../auth";
import { Config } from "../AppConfigs";
import { emails } from "../emails";
import { GlobalNotSetError } from "../errors";

interface templateData {
  name?: string | null;
  app_name?: string;
  link?: string;
}

/**
 * Renders an email template using EJS.
 * @param {string} template - The EJS template content
 * @param {object} data - The data to be passed to the template
 * @returns {string} - The rendered email template
 */
export const renderEmailTemplate = (template: string, data: templateData) => {
  if (!Config.GADGET_APP_NAME && !data.app_name) {
    throw new GlobalNotSetError("GADGET_APP_NAME is not yet defined");
  }

  if (!emails) {
    throw new GlobalNotSetError("emails is not yet defined");
  }

  const app_name = data.app_name ?? Config.GADGET_APP_NAME;

  let link;
  if (template === VERIFY_EMAIL_TEMPLATE) {
    link = generateVerificationUrl(data.link || "").url;
  } else if (template === RESET_PASSWORD_TEMPLATE) {
    link = generatePasswordResetUrl(data.link || "").url;
  }

  try {
    return emails.render(template, { ...data, app_name, link });
  } catch (error) {
    Globals.logger.error({ error }, "[emails] An error occurred rendering your EJS email template");
    throw error;
  }
};

/**
 * Renders the "Verify Email" template.
 * @param {string} [name] - The `name` of the user you wish to address the email to (optional)
 * @param {string} [app_name] - The name of your app, defaults to GADGET_APP_NAME (optional)
 * @param {string} [link] - The link the user has to click in order to verify their account, defaults to GADGET_APP_URL (optional)
 * @returns {string} - The rendered html of the email template
 */
export const renderVerifyEmailTemplate = (data: templateData) => {
  return renderEmailTemplate(VERIFY_EMAIL_TEMPLATE, data);
};

/**
 * Renders the "Reset Password" template.
 * @param {string} [name] - The `name` of the user you wish to address the email to (optional)
 * @param {string} [app_name] - The name of your app, defaults to GADGET_APP_NAME (optional)
 * @param {string} [link] - The link the user has to click in order to reset their password, defaults to GADGET_APP_URL (optional)
 * @returns {string} - The rendered html of the email template
 */
export const renderResetPasswordTemplate = (data: templateData) => {
  return renderEmailTemplate(RESET_PASSWORD_TEMPLATE, data);
};
