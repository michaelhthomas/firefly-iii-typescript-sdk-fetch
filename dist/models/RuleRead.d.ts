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
import { ObjectLink, Rule } from './';
/**
 *
 * @export
 * @interface RuleRead
 */
export interface RuleRead {
    /**
     * Immutable value
     * @type {string}
     * @memberof RuleRead
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof RuleRead
     */
    id: string;
    /**
     *
     * @type {Rule}
     * @memberof RuleRead
     */
    attributes: Rule;
    /**
     *
     * @type {ObjectLink}
     * @memberof RuleRead
     */
    links: ObjectLink;
}
export declare function RuleReadFromJSON(json: any): RuleRead;
export declare function RuleReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleRead;
export declare function RuleReadToJSON(value?: RuleRead | null): any;
