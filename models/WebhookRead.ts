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
    ObjectLink,
    ObjectLinkFromJSON,
    ObjectLinkFromJSONTyped,
    ObjectLinkToJSON,
    Webhook,
    WebhookFromJSON,
    WebhookFromJSONTyped,
    WebhookToJSON,
} from './';

/**
 * 
 * @export
 * @interface WebhookRead
 */
export interface WebhookRead {
    /**
     * Immutable value
     * @type {string}
     * @memberof WebhookRead
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof WebhookRead
     */
    id: string;
    /**
     * 
     * @type {Webhook}
     * @memberof WebhookRead
     */
    attributes: Webhook;
    /**
     * 
     * @type {ObjectLink}
     * @memberof WebhookRead
     */
    links: ObjectLink;
}

export function WebhookReadFromJSON(json: any): WebhookRead {
    return WebhookReadFromJSONTyped(json, false);
}

export function WebhookReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': WebhookFromJSON(json['attributes']),
        'links': ObjectLinkFromJSON(json['links']),
    };
}

export function WebhookReadToJSON(value?: WebhookRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': WebhookToJSON(value.attributes),
        'links': ObjectLinkToJSON(value.links),
    };
}


