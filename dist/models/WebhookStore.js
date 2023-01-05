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
exports.WebhookStoreToJSON = exports.WebhookStoreFromJSONTyped = exports.WebhookStoreFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function WebhookStoreFromJSON(json) {
    return WebhookStoreFromJSONTyped(json, false);
}
exports.WebhookStoreFromJSON = WebhookStoreFromJSON;
function WebhookStoreFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'active': !(0, runtime_1.exists)(json, 'active') ? undefined : json['active'],
        'title': json['title'],
        'trigger': (0, _1.WebhookTriggerFromJSON)(json['trigger']),
        'response': (0, _1.WebhookResponseFromJSON)(json['response']),
        'delivery': (0, _1.WebhookDeliveryFromJSON)(json['delivery']),
        'url': json['url'],
    };
}
exports.WebhookStoreFromJSONTyped = WebhookStoreFromJSONTyped;
function WebhookStoreToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'active': value.active,
        'title': value.title,
        'trigger': (0, _1.WebhookTriggerToJSON)(value.trigger),
        'response': (0, _1.WebhookResponseToJSON)(value.response),
        'delivery': (0, _1.WebhookDeliveryToJSON)(value.delivery),
        'url': value.url,
    };
}
exports.WebhookStoreToJSON = WebhookStoreToJSON;
