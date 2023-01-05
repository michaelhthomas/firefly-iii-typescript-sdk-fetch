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
 *
 * @export
 * @interface AttachmentUpdate
 */
export interface AttachmentUpdate {
    /**
     *
     * @type {string}
     * @memberof AttachmentUpdate
     */
    filename?: string;
    /**
     *
     * @type {string}
     * @memberof AttachmentUpdate
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof AttachmentUpdate
     */
    notes?: string | null;
}
export declare function AttachmentUpdateFromJSON(json: any): AttachmentUpdate;
export declare function AttachmentUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachmentUpdate;
export declare function AttachmentUpdateToJSON(value?: AttachmentUpdate | null): any;
