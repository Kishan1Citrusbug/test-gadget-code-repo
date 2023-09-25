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
    generateVerificationUrl: function() {
        return generateVerificationUrl;
    },
    generateVerificationCode: function() {
        return generateVerificationCode;
    },
    generatePasswordResetCode: function() {
        return generatePasswordResetCode;
    },
    generatePasswordResetUrl: function() {
        return generatePasswordResetUrl;
    },
    verifyPasswordResetCode: function() {
        return verifyPasswordResetCode;
    }
});
function _interop_require_default() {
    const data = require("@swc/helpers/_/_interop_require_default");
    _interop_require_default = function() {
        return data;
    };
    return data;
}
function _nodecrypto() {
    const data = /*#__PURE__*/ _interop_require_default()._(require("node:crypto"));
    _nodecrypto = function() {
        return data;
    };
    return data;
}
const generateVerificationUrl = (customUrl)=>{
    // TODO remove and replace url default with GADGET_APP_URL once it exists in gadget-server
    if (!customUrl) throw new Error("Missing customUrl");
    const code = generateVerificationCode();
    const url = new URL(customUrl);
    url.searchParams.append("code", code);
    return {
        url: url.toString(),
        code
    };
};
const generateVerificationCode = ()=>{
    return _nodecrypto().default.randomBytes(64).toString("hex");
};
const generatePasswordResetCode = ()=>{
    return _nodecrypto().default.randomBytes(16).toString("hex");
};
const generatePasswordResetUrl = (customUrl)=>{
    // TODO remove and replace url default with GADGET_APP_URL once it exists in gadget-server
    if (!customUrl) throw new Error("Missing customUrl");
    const code = generatePasswordResetCode();
    const url = new URL(customUrl);
    url.searchParams.append("code", code);
    return {
        url: url.toString(),
        hash: _nodecrypto().default.createHash("sha256").update(code).digest("hex")
    };
};
const verifyPasswordResetCode = (code, hash)=>{
    return _nodecrypto().default.createHash("sha256").update(code).digest("hex") === hash;
};
