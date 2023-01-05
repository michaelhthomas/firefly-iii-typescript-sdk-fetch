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
exports.AccountSearchFieldFilterToJSON = exports.AccountSearchFieldFilterFromJSONTyped = exports.AccountSearchFieldFilterFromJSON = exports.AccountSearchFieldFilter = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var AccountSearchFieldFilter;
(function (AccountSearchFieldFilter) {
    AccountSearchFieldFilter["All"] = "all";
    AccountSearchFieldFilter["Iban"] = "iban";
    AccountSearchFieldFilter["Name"] = "name";
    AccountSearchFieldFilter["Number"] = "number";
    AccountSearchFieldFilter["Id"] = "id";
})(AccountSearchFieldFilter = exports.AccountSearchFieldFilter || (exports.AccountSearchFieldFilter = {}));
function AccountSearchFieldFilterFromJSON(json) {
    return AccountSearchFieldFilterFromJSONTyped(json, false);
}
exports.AccountSearchFieldFilterFromJSON = AccountSearchFieldFilterFromJSON;
function AccountSearchFieldFilterFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AccountSearchFieldFilterFromJSONTyped = AccountSearchFieldFilterFromJSONTyped;
function AccountSearchFieldFilterToJSON(value) {
    return value;
}
exports.AccountSearchFieldFilterToJSON = AccountSearchFieldFilterToJSON;
