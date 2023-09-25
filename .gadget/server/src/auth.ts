import crypto from "node:crypto";
import { Config } from "./AppConfigs";
import { GlobalNotSetError } from "./errors";

/**
 * Generates a verification url and code
 * @param {string} [customUrl] - The verifcation url for verifying the user for the app (optional)
 * @returns {Object} - An object with the url and code properties
 */
export const generateVerificationUrl = (customUrl?: string) => {
  if (!Config.GADGET_APP_URL && !customUrl) {
    throw new GlobalNotSetError("GADGET_APP_URL is not yet defined");
  }

  if (!customUrl) {
    customUrl = Config.GADGET_APP_URL;
  }

  const code = generateVerificationCode();
  const url = new URL(customUrl);

  url.searchParams.append("code", code);

  return {
    url: url.toString(),
    code,
  };
};

export const generateVerificationCode = (): string => {
  return crypto.randomBytes(64).toString("hex");
};

export const generatePasswordResetCode = (): string => {
  return crypto.randomBytes(16).toString("hex");
};

/**
 * Generates a password reset url and code
 * @param {string} [customUrl] - The password reset url for users to reset their password (optional)
 * @returns {Object} - An object with the url and code properties
 */
export const generatePasswordResetUrl = (customUrl?: string) => {
  if (!Config.GADGET_APP_URL && !customUrl) {
    throw new GlobalNotSetError("GADGET_APP_URL is not yet defined");
  }

  if (!customUrl) {
    customUrl = Config.GADGET_APP_URL;
  }
  const code = generatePasswordResetCode();
  const url = new URL(customUrl);

  url.searchParams.append("code", code);

  return {
    url: url.toString(),
    hash: crypto.createHash("sha256").update(code).digest("hex"),
  };
};

export const verifyPasswordResetCode = (code: string, hash: string) => {
  return crypto.createHash("sha256").update(code).digest("hex") === hash;
};
