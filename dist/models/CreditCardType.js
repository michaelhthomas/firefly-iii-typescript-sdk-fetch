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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardTypeToJSON = exports.CreditCardTypeFromJSONTyped = exports.CreditCardTypeFromJSON = exports.CreditCardType = void 0;
/**
 * Mandatory when the account_role is ccAsset. Can only be monthlyFull or null.
 * @export
 * @enum {string}
 */
var CreditCardType;
(function (CreditCardType) {
    CreditCardType["MonthlyFull"] = "monthlyFull";
    CreditCardType["Null"] = "null";
})(CreditCardType = exports.CreditCardType || (exports.CreditCardType = {}));
function CreditCardTypeFromJSON(json) {
    return CreditCardTypeFromJSONTyped(json, false);
}
exports.CreditCardTypeFromJSON = CreditCardTypeFromJSON;
function CreditCardTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CreditCardTypeFromJSONTyped = CreditCardTypeFromJSONTyped;
function CreditCardTypeToJSON(value) {
    return value;
}
exports.CreditCardTypeToJSON = CreditCardTypeToJSON;
