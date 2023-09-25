/**
 * An object containing the app's base configuration variables
 */
export let Config: AppConfigs;

/**
 * This is used internally to set the apps config names
 * @internal
 */
export const setAppConfigs = (configs: AppConfigs) => {
  Config = configs;
};

/**
 * Contains the app's base name configurations
 */
export interface AppConfigs {
  /** The name of your app */
  GADGET_APP_NAME: string;
  /** The primary domain from the URL of your app. */
  GADGET_PRIMARY_DOMAIN: string;
  /** The url of your app */
  GADGET_APP_URL: string;
}
