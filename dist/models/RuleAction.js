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
exports.RuleActionToJSON = exports.RuleActionFromJSONTyped = exports.RuleActionFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function RuleActionFromJSON(json) {
    return RuleActionFromJSONTyped(json, false);
}
exports.RuleActionFromJSON = RuleActionFromJSON;
function RuleActionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'type': (0, _1.RuleActionKeywordFromJSON)(json['type']),
        'value': json['value'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'active': !(0, runtime_1.exists)(json, 'active') ? undefined : json['active'],
        'stopProcessing': !(0, runtime_1.exists)(json, 'stop_processing') ? undefined : json['stop_processing'],
    };
}
exports.RuleActionFromJSONTyped = RuleActionFromJSONTyped;
function RuleActionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': (0, _1.RuleActionKeywordToJSON)(value.type),
        'value': value.value,
        'order': value.order,
        'active': value.active,
        'stop_processing': value.stopProcessing,
    };
}
exports.RuleActionToJSON = RuleActionToJSON;
