import crypto from "node:crypto";

export const generateVerificationUrl = (customUrl?: string) => {
  // TODO remove and replace url default with GADGET_APP_URL once it exists in gadget-server
  if (!customUrl) throw new Error("Missing customUrl");

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

export const generatePasswordResetUrl = (customUrl?: string) => {
  // TODO remove and replace url default with GADGET_APP_URL once it exists in gadget-server
  if (!customUrl) throw new Error("Missing customUrl");

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
