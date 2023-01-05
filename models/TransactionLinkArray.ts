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
    Meta,
    MetaFromJSON,
    MetaFromJSONTyped,
    MetaToJSON,
    PageLink,
    PageLinkFromJSON,
    PageLinkFromJSONTyped,
    PageLinkToJSON,
    TransactionLinkRead,
    TransactionLinkReadFromJSON,
    TransactionLinkReadFromJSONTyped,
    TransactionLinkReadToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransactionLinkArray
 */
export interface TransactionLinkArray {
    /**
     * 
     * @type {Array<TransactionLinkRead>}
     * @memberof TransactionLinkArray
     */
    data: Array<TransactionLinkRead>;
    /**
     * 
     * @type {Meta}
     * @memberof TransactionLinkArray
     */
    meta: Meta;
    /**
     * 
     * @type {PageLink}
     * @memberof TransactionLinkArray
     */
    links: PageLink;
}

export function TransactionLinkArrayFromJSON(json: any): TransactionLinkArray {
    return TransactionLinkArrayFromJSONTyped(json, false);
}

export function TransactionLinkArrayFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionLinkArray {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(TransactionLinkReadFromJSON)),
        'meta': MetaFromJSON(json['meta']),
        'links': PageLinkFromJSON(json['links']),
    };
}

export function TransactionLinkArrayToJSON(value?: TransactionLinkArray | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(TransactionLinkReadToJSON)),
        'meta': MetaToJSON(value.meta),
        'links': PageLinkToJSON(value.links),
    };
}


