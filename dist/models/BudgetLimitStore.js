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
exports.BudgetLimitStoreToJSON = exports.BudgetLimitStoreFromJSONTyped = exports.BudgetLimitStoreFromJSON = void 0;
const runtime_1 = require("../runtime");
function BudgetLimitStoreFromJSON(json) {
    return BudgetLimitStoreFromJSONTyped(json, false);
}
exports.BudgetLimitStoreFromJSON = BudgetLimitStoreFromJSON;
function BudgetLimitStoreFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currencyId': !(0, runtime_1.exists)(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currency_code') ? undefined : json['currency_code'],
        'budgetId': json['budget_id'],
        'start': (new Date(json['start'])),
        'period': !(0, runtime_1.exists)(json, 'period') ? undefined : json['period'],
        'end': (new Date(json['end'])),
        'amount': json['amount'],
    };
}
exports.BudgetLimitStoreFromJSONTyped = BudgetLimitStoreFromJSONTyped;
function BudgetLimitStoreToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'start': (value.start.toISOString().substr(0, 10)),
        'end': (value.end.toISOString().substr(0, 10)),
        'amount': value.amount,
    };
}
exports.BudgetLimitStoreToJSON = BudgetLimitStoreToJSON;
