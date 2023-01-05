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
    ModelConfiguration,
    ModelConfigurationFromJSON,
    ModelConfigurationFromJSONTyped,
    ModelConfigurationToJSON,
} from './';

/**
 * 
 * @export
 * @interface ConfigurationSingle
 */
export interface ConfigurationSingle {
    /**
     * 
     * @type {ModelConfiguration}
     * @memberof ConfigurationSingle
     */
    data: ModelConfiguration;
}

export function ConfigurationSingleFromJSON(json: any): ConfigurationSingle {
    return ConfigurationSingleFromJSONTyped(json, false);
}

export function ConfigurationSingleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationSingle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ModelConfigurationFromJSON(json['data']),
    };
}

export function ConfigurationSingleToJSON(value?: ConfigurationSingle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ModelConfigurationToJSON(value.data),
    };
}


