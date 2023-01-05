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
import { Meta, PageLink, RecurrenceRead } from './';
/**
 *
 * @export
 * @interface RecurrenceArray
 */
export interface RecurrenceArray {
    /**
     *
     * @type {Array<RecurrenceRead>}
     * @memberof RecurrenceArray
     */
    data: Array<RecurrenceRead>;
    /**
     *
     * @type {Meta}
     * @memberof RecurrenceArray
     */
    meta: Meta;
    /**
     *
     * @type {PageLink}
     * @memberof RecurrenceArray
     */
    links: PageLink;
}
export declare function RecurrenceArrayFromJSON(json: any): RecurrenceArray;
export declare function RecurrenceArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurrenceArray;
export declare function RecurrenceArrayToJSON(value?: RecurrenceArray | null): any;
