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
exports.WebhookAttemptToJSON = exports.WebhookAttemptFromJSONTyped = exports.WebhookAttemptFromJSON = void 0;
const runtime_1 = require("../runtime");
function WebhookAttemptFromJSON(json) {
    return WebhookAttemptFromJSONTyped(json, false);
}
exports.WebhookAttemptFromJSON = WebhookAttemptFromJSON;
function WebhookAttemptFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'webhookMessageId': !(0, runtime_1.exists)(json, 'webhook_message_id') ? undefined : json['webhook_message_id'],
        'statusCode': !(0, runtime_1.exists)(json, 'status_code') ? undefined : json['status_code'],
        'logs': !(0, runtime_1.exists)(json, 'logs') ? undefined : json['logs'],
        'response': !(0, runtime_1.exists)(json, 'response') ? undefined : json['response'],
    };
}
exports.WebhookAttemptFromJSONTyped = WebhookAttemptFromJSONTyped;
function WebhookAttemptToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'webhook_message_id': value.webhookMessageId,
        'status_code': value.statusCode,
        'logs': value.logs,
        'response': value.response,
    };
}
exports.WebhookAttemptToJSON = WebhookAttemptToJSON;
