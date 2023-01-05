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
    WebhookMessageRead,
    WebhookMessageReadFromJSON,
    WebhookMessageReadFromJSONTyped,
    WebhookMessageReadToJSON,
} from './';

/**
 * 
 * @export
 * @interface WebhookMessageSingle
 */
export interface WebhookMessageSingle {
    /**
     * 
     * @type {WebhookMessageRead}
     * @memberof WebhookMessageSingle
     */
    data: WebhookMessageRead;
}

export function WebhookMessageSingleFromJSON(json: any): WebhookMessageSingle {
    return WebhookMessageSingleFromJSONTyped(json, false);
}

export function WebhookMessageSingleFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookMessageSingle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': WebhookMessageReadFromJSON(json['data']),
    };
}

export function WebhookMessageSingleToJSON(value?: WebhookMessageSingle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': WebhookMessageReadToJSON(value.data),
    };
}


