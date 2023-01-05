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
 * @interface LinkTypeStore
 */
export interface LinkTypeStore {
    /**
     * 
     * @type {string}
     * @memberof LinkTypeStore
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LinkTypeStore
     */
    inward: string;
    /**
     * 
     * @type {string}
     * @memberof LinkTypeStore
     */
    outward: string;
}

export function LinkTypeStoreFromJSON(json: any): LinkTypeStore {
    return LinkTypeStoreFromJSONTyped(json, false);
}

export function LinkTypeStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTypeStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'inward': json['inward'],
        'outward': json['outward'],
    };
}

export function LinkTypeStoreToJSON(value?: LinkTypeStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'inward': value.inward,
        'outward': value.outward,
    };
}


