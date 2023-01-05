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
 * @interface AutocompleteRuleGroup
 */
export interface AutocompleteRuleGroup {
    /**
     * 
     * @type {string}
     * @memberof AutocompleteRuleGroup
     */
    id: string;
    /**
     * Name of the rule group found by an auto-complete search.
     * @type {string}
     * @memberof AutocompleteRuleGroup
     */
    name: string;
    /**
     * Description of the rule group found by auto-complete.
     * @type {string}
     * @memberof AutocompleteRuleGroup
     */
    description?: string;
}

export function AutocompleteRuleGroupFromJSON(json: any): AutocompleteRuleGroup {
    return AutocompleteRuleGroupFromJSONTyped(json, false);
}

export function AutocompleteRuleGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutocompleteRuleGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function AutocompleteRuleGroupToJSON(value?: AutocompleteRuleGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
    };
}


