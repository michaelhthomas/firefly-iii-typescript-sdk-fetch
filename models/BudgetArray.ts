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
    BudgetRead,
    BudgetReadFromJSON,
    BudgetReadFromJSONTyped,
    BudgetReadToJSON,
    Meta,
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
} from './';

/**
 * 
 * @export
 * @interface BudgetArray
 */
export interface BudgetArray {
    /**
     * 
     * @type {Array<BudgetRead>}
     * @memberof BudgetArray
     */
    data: Array<BudgetRead>;
    /**
     * 
     * @type {Meta}
     * @memberof BudgetArray
     */
    meta: Meta;
}

export function BudgetArrayFromJSON(json: any): BudgetArray {
    return BudgetArrayFromJSONTyped(json, false);
}

export function BudgetArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(BudgetReadFromJSON)),
        'meta': MetaFromJSON(json['meta']),
    };
}

export function BudgetArrayToJSON(value?: BudgetArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(BudgetReadToJSON)),
        'meta': MetaToJSON(value.meta),
    };
}


