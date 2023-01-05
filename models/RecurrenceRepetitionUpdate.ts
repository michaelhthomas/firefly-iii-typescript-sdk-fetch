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
    RecurrenceRepetitionType,
    RecurrenceRepetitionTypeFromJSON,
    RecurrenceRepetitionTypeFromJSONTyped,
    RecurrenceRepetitionTypeToJSON,
} from './';

/**
 * 
 * @export
 * @interface RecurrenceRepetitionUpdate
 */
export interface RecurrenceRepetitionUpdate {
    /**
     * 
     * @type {RecurrenceRepetitionType}
     * @memberof RecurrenceRepetitionUpdate
     */
    type?: RecurrenceRepetitionType;
    /**
     * Information that defined the type of repetition.
     * - For 'daily', this is empty.
     * - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday).
     * - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is the week in the month, and the second number is the day in the week (between 1 and 7). '2,3' means: the 2nd Wednesday of the month
     * - For 'monthly' it is the day of the month (1 - 31)
     * - For yearly, it is a full date, ie '2018-09-17'. The year you use does not matter.
     * @type {string}
     * @memberof RecurrenceRepetitionUpdate
     */
    moment?: string;
    /**
     * How many occurrences to skip. 0 means skip nothing. 1 means every other.
     * @type {number}
     * @memberof RecurrenceRepetitionUpdate
     */
    skip?: number;
    /**
     * How to respond when the recurring transaction falls in the weekend. Possible values:
     * 1. Do nothing, just create it
     * 2. Create no transaction.
     * 3. Skip to the previous Friday.
     * 4. Skip to the next Monday.
     * @type {number}
     * @memberof RecurrenceRepetitionUpdate
     */
    weekend?: number;
}

export function RecurrenceRepetitionUpdateFromJSON(json: any): RecurrenceRepetitionUpdate {
    return RecurrenceRepetitionUpdateFromJSONTyped(json, false);
}

export function RecurrenceRepetitionUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurrenceRepetitionUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : RecurrenceRepetitionTypeFromJSON(json['type']),
        'moment': !exists(json, 'moment') ? undefined : json['moment'],
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
        'weekend': !exists(json, 'weekend') ? undefined : json['weekend'],
    };
}

export function RecurrenceRepetitionUpdateToJSON(value?: RecurrenceRepetitionUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': RecurrenceRepetitionTypeToJSON(value.type),
        'moment': value.moment,
        'skip': value.skip,
        'weekend': value.weekend,
    };
}


