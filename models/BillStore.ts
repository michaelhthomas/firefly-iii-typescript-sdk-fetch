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
    BillRepeatFrequency,
    BillRepeatFrequencyFromJSON,
    BillRepeatFrequencyFromJSONTyped,
    BillRepeatFrequencyToJSON,
} from './';

/**
 * 
 * @export
 * @interface BillStore
 */
export interface BillStore {
    /**
     * Use either currency_id or currency_code
     * @type {string}
     * @memberof BillStore
     */
    currencyId?: string;
    /**
     * Use either currency_id or currency_code
     * @type {string}
     * @memberof BillStore
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BillStore
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof BillStore
     */
    amountMin: string;
    /**
     * 
     * @type {string}
     * @memberof BillStore
     */
    amountMax: string;
    /**
     * 
     * @type {Date}
     * @memberof BillStore
     */
    date: Date;
    /**
     * The date after which this bill is no longer valid or applicable
     * @type {Date}
     * @memberof BillStore
     */
    endDate?: Date;
    /**
     * The date before which the bill must be renewed (or cancelled)
     * @type {Date}
     * @memberof BillStore
     */
    extensionDate?: Date;
    /**
     * 
     * @type {BillRepeatFrequency}
     * @memberof BillStore
     */
    repeatFreq: BillRepeatFrequency;
    /**
     * How often the bill must be skipped. 1 means a bi-monthly bill.
     * @type {number}
     * @memberof BillStore
     */
    skip?: number;
    /**
     * If the bill is active.
     * @type {boolean}
     * @memberof BillStore
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillStore
     */
    notes?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof BillStore
     */
    objectGroupId?: string | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof BillStore
     */
    objectGroupTitle?: string | null;
}

export function BillStoreFromJSON(json: any): BillStore {
    return BillStoreFromJSONTyped(json, false);
}

export function BillStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillStore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'name': json['name'],
        'amountMin': json['amount_min'],
        'amountMax': json['amount_max'],
        'date': (new Date(json['date'])),
        'endDate': !exists(json, 'end_date') ? undefined : (new Date(json['end_date'])),
        'extensionDate': !exists(json, 'extension_date') ? undefined : (new Date(json['extension_date'])),
        'repeatFreq': BillRepeatFrequencyFromJSON(json['repeat_freq']),
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'objectGroupId': !exists(json, 'object_group_id') ? undefined : json['object_group_id'],
        'objectGroupTitle': !exists(json, 'object_group_title') ? undefined : json['object_group_title'],
    };
}

export function BillStoreToJSON(value?: BillStore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'name': value.name,
        'amount_min': value.amountMin,
        'amount_max': value.amountMax,
        'date': (value.date.toISOString()),
        'end_date': value.endDate === undefined ? undefined : (value.endDate.toISOString()),
        'extension_date': value.extensionDate === undefined ? undefined : (value.extensionDate.toISOString()),
        'repeat_freq': BillRepeatFrequencyToJSON(value.repeatFreq),
        'skip': value.skip,
        'active': value.active,
        'notes': value.notes,
        'object_group_id': value.objectGroupId,
        'object_group_title': value.objectGroupTitle,
    };
}


