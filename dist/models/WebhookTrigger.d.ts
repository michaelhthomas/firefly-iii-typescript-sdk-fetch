/**
 * Firefly III API v1.5.6
 * This is the documentation of the Firefly III API. You can find accompanying documentation on the website of Firefly III itself (see below). Please report any bugs or issues. You may use the \"Authorize\" button to try the API below. This file was last generated on 2022-04-04T03:54:41+00:00
 *
 * The version of the OpenAPI document: 1.5.6
 * Contact: james@firefly-iii.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * The trigger for the webhook.
 * @export
 * @enum {string}
 */
export declare enum WebhookTrigger {
    STORETRANSACTION = "TRIGGER_STORE_TRANSACTION",
    UPDATETRANSACTION = "TRIGGER_UPDATE_TRANSACTION",
    DESTROYTRANSACTION = "TRIGGER_DESTROY_TRANSACTION"
}
export declare function WebhookTriggerFromJSON(json: any): WebhookTrigger;
export declare function WebhookTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookTrigger;
export declare function WebhookTriggerToJSON(value?: WebhookTrigger | null): any;
