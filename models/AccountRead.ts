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
import {
    Account,
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
} from './';

/**
 * 
 * @export
 * @interface AccountRead
 */
export interface AccountRead {
    /**
     * Immutable value
     * @type {string}
     * @memberof AccountRead
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof AccountRead
     */
    id: string;
    /**
     * 
     * @type {Account}
     * @memberof AccountRead
     */
    attributes: Account;
}

export function AccountReadFromJSON(json: any): AccountRead {
    return AccountReadFromJSONTyped(json, false);
}

export function AccountReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': AccountFromJSON(json['attributes']),
    };
}

export function AccountReadToJSON(value?: AccountRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AccountToJSON(value.attributes),
    };
}


