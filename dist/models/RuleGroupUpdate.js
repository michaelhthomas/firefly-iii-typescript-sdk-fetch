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
exports.RuleGroupUpdateToJSON = exports.RuleGroupUpdateFromJSONTyped = exports.RuleGroupUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
function RuleGroupUpdateFromJSON(json) {
    return RuleGroupUpdateFromJSONTyped(json, false);
}
exports.RuleGroupUpdateFromJSON = RuleGroupUpdateFromJSON;
function RuleGroupUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'active': !(0, runtime_1.exists)(json, 'active') ? undefined : json['active'],
    };
}
exports.RuleGroupUpdateFromJSONTyped = RuleGroupUpdateFromJSONTyped;
function RuleGroupUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'title': value.title,
        'description': value.description,
        'order': value.order,
        'active': value.active,
    };
}
exports.RuleGroupUpdateToJSON = RuleGroupUpdateToJSON;
