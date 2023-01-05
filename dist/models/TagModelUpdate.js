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
exports.TagModelUpdateToJSON = exports.TagModelUpdateFromJSONTyped = exports.TagModelUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
function TagModelUpdateFromJSON(json) {
    return TagModelUpdateFromJSONTyped(json, false);
}
exports.TagModelUpdateFromJSON = TagModelUpdateFromJSON;
function TagModelUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tag': !(0, runtime_1.exists)(json, 'tag') ? undefined : json['tag'],
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (json['date'] === null ? null : new Date(json['date'])),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'latitude': !(0, runtime_1.exists)(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !(0, runtime_1.exists)(json, 'longitude') ? undefined : json['longitude'],
        'zoomLevel': !(0, runtime_1.exists)(json, 'zoom_level') ? undefined : json['zoom_level'],
    };
}
exports.TagModelUpdateFromJSONTyped = TagModelUpdateFromJSONTyped;
function TagModelUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'tag': value.tag,
        'date': value.date === undefined ? undefined : (value.date === null ? null : value.date.toISOString().substr(0, 10)),
        'description': value.description,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'zoom_level': value.zoomLevel,
    };
}
exports.TagModelUpdateToJSON = TagModelUpdateToJSON;
