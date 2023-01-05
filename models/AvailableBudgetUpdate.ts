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
 * @interface AvailableBudgetUpdate
 */
export interface AvailableBudgetUpdate {
    /**
     * Use either currency_id or currency_code.
     * @type {string}
     * @memberof AvailableBudgetUpdate
     */
    currencyId?: string;
    /**
     * Use either currency_id or currency_code.
     * @type {string}
     * @memberof AvailableBudgetUpdate
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AvailableBudgetUpdate
     */
    amount?: string;
    /**
     * Start date of the available budget.
     * @type {Date}
     * @memberof AvailableBudgetUpdate
     */
    start?: Date;
    /**
     * End date of the available budget.
     * @type {Date}
     * @memberof AvailableBudgetUpdate
     */
    end?: Date;
}

export function AvailableBudgetUpdateFromJSON(json: any): AvailableBudgetUpdate {
    return AvailableBudgetUpdateFromJSONTyped(json, false);
}

export function AvailableBudgetUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailableBudgetUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
    };
}

export function AvailableBudgetUpdateToJSON(value?: AvailableBudgetUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'amount': value.amount,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0,10)),
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0,10)),
    };
}


