"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class ConfigurationApi extends runtime.BaseAPI {
    /**
     * Returns all editable and not-editable configuration values for this Firefly III installation
     * Get Firefly III system configuration values.
     */
    async getConfigurationRaw() {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/configuration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(models_1.ModelConfigurationFromJSON));
    }
    /**
     * Returns all editable and not-editable configuration values for this Firefly III installation
     * Get Firefly III system configuration values.
     */
    async getConfiguration() {
        const response = await this.getConfigurationRaw();
        return await response.value();
    }
    /**
     * Returns one configuration variable for this Firefly III installation
     * Get a single Firefly III system configuration value
     */
    async getSingleConfigurationRaw(requestParameters) {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling getSingleConfiguration.');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const response = await this.request({
            path: `/api/v1/configuration/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ConfigurationSingleFromJSON)(jsonValue));
    }
    /**
     * Returns one configuration variable for this Firefly III installation
     * Get a single Firefly III system configuration value
     */
    async getSingleConfiguration(requestParameters) {
        const response = await this.getSingleConfigurationRaw(requestParameters);
        return await response.value();
    }
    /**
     * Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.
     * Update configuration value
     */
    async setConfigurationRaw(requestParameters) {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name', 'Required parameter requestParameters.name was null or undefined when calling setConfiguration.');
        }
        if (requestParameters.value === null || requestParameters.value === undefined) {
            throw new runtime.RequiredError('value', 'Required parameter requestParameters.value was null or undefined when calling setConfiguration.');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            }
            else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }
        const consumes = [
            { contentType: 'application/x-www-form-urlencoded' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);
        let formParams;
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        }
        else {
            formParams = new URLSearchParams();
        }
        if (requestParameters.value !== undefined) {
            formParams.append('value', requestParameters.value);
        }
        const response = await this.request({
            path: `/api/v1/configuration/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ConfigurationSingleFromJSON)(jsonValue));
    }
    /**
     * Set a single configuration value. Not all configuration values can be updated so the list of accepted configuration variables is small.
     * Update configuration value
     */
    async setConfiguration(requestParameters) {
        const response = await this.setConfigurationRaw(requestParameters);
        return await response.value();
    }
}
exports.ConfigurationApi = ConfigurationApi;
