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
exports.RecurrenceRepetitionToJSON = exports.RecurrenceRepetitionFromJSONTyped = exports.RecurrenceRepetitionFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function RecurrenceRepetitionFromJSON(json) {
    return RecurrenceRepetitionFromJSONTyped(json, false);
}
exports.RecurrenceRepetitionFromJSON = RecurrenceRepetitionFromJSON;
function RecurrenceRepetitionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'type': (0, _1.RecurrenceRepetitionTypeFromJSON)(json['type']),
        'moment': json['moment'],
        'skip': !(0, runtime_1.exists)(json, 'skip') ? undefined : json['skip'],
        'weekend': !(0, runtime_1.exists)(json, 'weekend') ? undefined : json['weekend'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'occurrences': !(0, runtime_1.exists)(json, 'occurrences') ? undefined : json['occurrences'],
    };
}
exports.RecurrenceRepetitionFromJSONTyped = RecurrenceRepetitionFromJSONTyped;
function RecurrenceRepetitionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': (0, _1.RecurrenceRepetitionTypeToJSON)(value.type),
        'moment': value.moment,
        'skip': value.skip,
        'weekend': value.weekend,
    };
}
exports.RecurrenceRepetitionToJSON = RecurrenceRepetitionToJSON;
