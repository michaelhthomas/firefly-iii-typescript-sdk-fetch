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
 * @interface AutocompleteTransactionType
 */
export interface AutocompleteTransactionType {
    /**
     *
     * @type {string}
     * @memberof AutocompleteTransactionType
     */
    id: string;
    /**
     * Type of the object found by an auto-complete search.
     * @type {string}
     * @memberof AutocompleteTransactionType
     */
    name: string;
    /**
     * Name of the object found by an auto-complete search.
     * @type {string}
     * @memberof AutocompleteTransactionType
     */
    type: string;
}
export declare function AutocompleteTransactionTypeFromJSON(json: any): AutocompleteTransactionType;
export declare function AutocompleteTransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteTransactionType;
export declare function AutocompleteTransactionTypeToJSON(value?: AutocompleteTransactionType | null): any;
