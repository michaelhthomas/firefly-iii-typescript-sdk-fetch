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
 * @interface TransactionLinkUpdate
 */
export interface TransactionLinkUpdate {
    /**
     * The link type ID to use. Use this field OR use the link_type_name field.
     * @type {string}
     * @memberof TransactionLinkUpdate
     */
    linkTypeId?: string;
    /**
     * The link type name to use. Use this field OR use the link_type_id field.
     * @type {string}
     * @memberof TransactionLinkUpdate
     */
    linkTypeName?: string;
    /**
     * The inward transaction transaction_journal_id for the link. This becomes the 'is paid by' transaction of the set.
     * @type {string}
     * @memberof TransactionLinkUpdate
     */
    inwardId?: string;
    /**
     * The outward transaction transaction_journal_id for the link. This becomes the 'pays for' transaction of the set.
     * @type {string}
     * @memberof TransactionLinkUpdate
     */
    outwardId?: string;
    /**
     * Optional. Some notes. If you submit an empty string the current notes will be removed
     * @type {string}
     * @memberof TransactionLinkUpdate
     */
    notes?: string | null;
}

export function TransactionLinkUpdateFromJSON(json: any): TransactionLinkUpdate {
    return TransactionLinkUpdateFromJSONTyped(json, false);
}

export function TransactionLinkUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionLinkUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linkTypeId': !exists(json, 'link_type_id') ? undefined : json['link_type_id'],
        'linkTypeName': !exists(json, 'link_type_name') ? undefined : json['link_type_name'],
        'inwardId': !exists(json, 'inward_id') ? undefined : json['inward_id'],
        'outwardId': !exists(json, 'outward_id') ? undefined : json['outward_id'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
    };
}

export function TransactionLinkUpdateToJSON(value?: TransactionLinkUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'link_type_id': value.linkTypeId,
        'link_type_name': value.linkTypeName,
        'inward_id': value.inwardId,
        'outward_id': value.outwardId,
        'notes': value.notes,
    };
}


