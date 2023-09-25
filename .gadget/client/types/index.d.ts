/**
* This is the Gadget API client library for:
*
*    ___        _      _      ____  _             _    __     _______   _____         _
*   / _ \ _   _(_) ___| | __ / ___|| |_ __ _ _ __| |_  \ \   / /___ /  |_   _|__  ___| |_
*  | | | | | | | |/ __| |/ / \___ \| __/ _` | '__| __|  \ \ / /  |_ \    | |/ _ \/ __| __|
*  | |_| | |_| | | (__|   <   ___) | || (_| | |  | |_    \ V /  ___) |   | |  __/\__ \ |_
*   \__\_\\__,_|_|\___|_|\_\ |____/ \__\__,_|_|   \__|    \_/  |____/    |_|\___||___/\__|
*
*
* Built for environment "Development" at version 3
* API docs: https://docs.gadget.dev/api/quick-start-v3-test
* Edit this app here: https://quick-start-v3-test.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
        };
    }
}
