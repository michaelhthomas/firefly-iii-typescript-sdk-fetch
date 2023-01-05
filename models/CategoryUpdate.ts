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
 * @interface CategoryUpdate
 */
export interface CategoryUpdate {
    /**
     * 
     * @type {string}
     * @memberof CategoryUpdate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryUpdate
     */
    notes?: string | null;
}

export function CategoryUpdateFromJSON(json: any): CategoryUpdate {
    return CategoryUpdateFromJSONTyped(json, false);
}

export function CategoryUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
    };
}

export function CategoryUpdateToJSON(value?: CategoryUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'notes': value.notes,
    };
}


