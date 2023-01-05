/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AutocompleteCategory
 */
export interface AutocompleteCategory {
    /**
     * 
     * @type {string}
     * @memberof AutocompleteCategory
     */
    id: string;
    /**
     * Name of the category found by an auto-complete search.
     * @type {string}
     * @memberof AutocompleteCategory
     */
    name: string;
}

export function AutocompleteCategoryFromJSON(json: any): AutocompleteCategory {
    return AutocompleteCategoryFromJSONTyped(json, false);
}

export function AutocompleteCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function AutocompleteCategoryToJSON(value?: AutocompleteCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


