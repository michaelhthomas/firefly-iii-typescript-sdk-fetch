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
exports.ValidationErrorErrorsToJSON = exports.ValidationErrorErrorsFromJSONTyped = exports.ValidationErrorErrorsFromJSON = void 0;
const runtime_1 = require("../runtime");
function ValidationErrorErrorsFromJSON(json) {
    return ValidationErrorErrorsFromJSONTyped(json, false);
}
exports.ValidationErrorErrorsFromJSON = ValidationErrorErrorsFromJSON;
function ValidationErrorErrorsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'field1': !(0, runtime_1.exists)(json, 'field1') ? undefined : json['field1'],
        'field2': !(0, runtime_1.exists)(json, 'field2') ? undefined : json['field2'],
    };
}
exports.ValidationErrorErrorsFromJSONTyped = ValidationErrorErrorsFromJSONTyped;
function ValidationErrorErrorsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'field1': value.field1,
        'field2': value.field2,
    };
}
exports.ValidationErrorErrorsToJSON = ValidationErrorErrorsToJSON;
