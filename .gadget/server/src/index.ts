/**
* This is the Gadget server side types library for:
*
*    ___        _      _      ____  _             _    __     _______   _____         _   
*   / _ \ _   _(_) ___| | __ / ___|| |_ __ _ _ __| |_  \ \   / /___ /  |_   _|__  ___| |_ 
*  | | | | | | | |/ __| |/ / \___ \| __/ _` | '__| __|  \ \ / /  |_ \    | |/ _ \/ __| __|
*  | |_| | |_| | | (__|   <   ___) | || (_| | |  | |_    \ V /  ___) |   | |  __/\__ \ |_ 
*   \__\_\\__,_|_|\___|_|\_\ |____/ \__\__,_|_|   \__|    \_/  |____/    |_|\___||___/\__|
*                                                                                         
*
* Built for environment `"Development"` at version "112"
* Edit this app here: https://"quick-start-v3-test".gadget.dev/edit
*/
import { FastifyLoggerInstance } from "fastify";
import type { Client } from "@gadget-client/quick-start-v3-test";
import type { GadgetMailer } from "./types";
export * from "./routes";
export * from "./types";
export * from "./AppConfiguration";
export * from "./AppConfigs";
export * from "./emails";
export * from "./AppConnections";
export * from "./global-actions";
export * from "./AmbientContext";
export * from "./state-chart";
export { InvalidStateTransitionError } from "./errors";
export * from "./email-templates";
/**
 * @internal
 */
import { Globals, actionContextLocalStorage } from "./globals";
export * from "./models/Gadgemon";
export * from "./models/Session";
export * from "./models/User";
export * from "./models/Product";
export * from "./effects";


/**
 * An instance of the Gadget logger
 */
let logger: FastifyLoggerInstance;
/**
 * An instance of the Gadget API client that has admin permissions
 */
let api: Client;

/**
 * This is used internally to set the rootLogger.
 * @internal
 */
export const setLogger = (rootLogger: FastifyLoggerInstance) => {
  Globals.logger = rootLogger;
  logger = rootLogger;
};

/**
 * This is used internally to set the client Instance
 * @internal
 */
export const setApiClient = (client: Client) => {
  api = client;
}

export {
  logger,
  api
}

/**
 * @internal
 */
export {
  Globals,
  actionContextLocalStorage
};
