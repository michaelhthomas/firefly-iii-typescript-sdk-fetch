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
exports.MetaPaginationToJSON = exports.MetaPaginationFromJSONTyped = exports.MetaPaginationFromJSON = void 0;
const runtime_1 = require("../runtime");
function MetaPaginationFromJSON(json) {
    return MetaPaginationFromJSONTyped(json, false);
}
exports.MetaPaginationFromJSON = MetaPaginationFromJSON;
function MetaPaginationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'total': !(0, runtime_1.exists)(json, 'total') ? undefined : json['total'],
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'perPage': !(0, runtime_1.exists)(json, 'per_page') ? undefined : json['per_page'],
        'currentPage': !(0, runtime_1.exists)(json, 'current_page') ? undefined : json['current_page'],
        'totalPages': !(0, runtime_1.exists)(json, 'total_pages') ? undefined : json['total_pages'],
    };
}
exports.MetaPaginationFromJSONTyped = MetaPaginationFromJSONTyped;
function MetaPaginationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'total': value.total,
        'count': value.count,
        'per_page': value.perPage,
        'current_page': value.currentPage,
        'total_pages': value.totalPages,
    };
}
exports.MetaPaginationToJSON = MetaPaginationToJSON;
