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
import { Meta, WebhookAttemptRead } from './';
/**
 *
 * @export
 * @interface WebhookAttemptArray
 */
export interface WebhookAttemptArray {
    /**
     *
     * @type {Array<WebhookAttemptRead>}
     * @memberof WebhookAttemptArray
     */
    data: Array<WebhookAttemptRead>;
    /**
     *
     * @type {Meta}
     * @memberof WebhookAttemptArray
     */
    meta: Meta;
}
export declare function WebhookAttemptArrayFromJSON(json: any): WebhookAttemptArray;
export declare function WebhookAttemptArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookAttemptArray;
export declare function WebhookAttemptArrayToJSON(value?: WebhookAttemptArray | null): any;
