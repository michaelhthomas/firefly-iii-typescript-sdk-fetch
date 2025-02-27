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
exports.SummaryApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class SummaryApi extends runtime.BaseAPI {
    /**
     * Returns basic sums of the users data, like the net worth, spent and earned amounts. It is multi-currency, and is used in Firefly III to populate the dashboard.
     * Returns basic sums of the users data.
     */
    async getBasicSummaryRaw(requestParameters) {
        if (requestParameters.start === null || requestParameters.start === undefined) {
            throw new runtime.RequiredError('start', 'Required parameter requestParameters.start was null or undefined when calling getBasicSummary.');
        }
        if (requestParameters.end === null || requestParameters.end === undefined) {
            throw new runtime.RequiredError('end', 'Required parameter requestParameters.end was null or undefined when calling getBasicSummary.');
        }
        const queryParameters = {};
        if (requestParameters.start !== undefined) {
            queryParameters['start'] = requestParameters.start.toISOString().substr(0, 10);
        }
        if (requestParameters.end !== undefined) {
            queryParameters['end'] = requestParameters.end.toISOString().substr(0, 10);
        }
        if (requestParameters.currencyCode !== undefined) {
            queryParameters['currency_code'] = requestParameters.currencyCode;
        }
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
            path: `/api/v1/summary/basic`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => Object.values(jsonValue).map(models_1.BasicSummaryEntryFromJSON));
    }
    /**
     * Returns basic sums of the users data, like the net worth, spent and earned amounts. It is multi-currency, and is used in Firefly III to populate the dashboard.
     * Returns basic sums of the users data.
     */
    async getBasicSummary(requestParameters) {
        const response = await this.getBasicSummaryRaw(requestParameters);
        return await response.value();
    }
}
exports.SummaryApi = SummaryApi;
