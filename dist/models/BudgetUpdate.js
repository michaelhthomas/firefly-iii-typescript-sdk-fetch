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
exports.BudgetUpdateToJSON = exports.BudgetUpdateFromJSONTyped = exports.BudgetUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function BudgetUpdateFromJSON(json) {
    return BudgetUpdateFromJSONTyped(json, false);
}
exports.BudgetUpdateFromJSON = BudgetUpdateFromJSON;
function BudgetUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'active': !(0, runtime_1.exists)(json, 'active') ? undefined : json['active'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'notes': !(0, runtime_1.exists)(json, 'notes') ? undefined : json['notes'],
        'autoBudgetType': !(0, runtime_1.exists)(json, 'auto_budget_type') ? undefined : (0, _1.AutoBudgetTypeFromJSON)(json['auto_budget_type']),
        'autoBudgetCurrencyId': !(0, runtime_1.exists)(json, 'auto_budget_currency_id') ? undefined : json['auto_budget_currency_id'],
        'autoBudgetCurrencyCode': !(0, runtime_1.exists)(json, 'auto_budget_currency_code') ? undefined : json['auto_budget_currency_code'],
        'autoBudgetAmount': !(0, runtime_1.exists)(json, 'auto_budget_amount') ? undefined : json['auto_budget_amount'],
        'autoBudgetPeriod': !(0, runtime_1.exists)(json, 'auto_budget_period') ? undefined : (0, _1.AutoBudgetPeriodFromJSON)(json['auto_budget_period']),
    };
}
exports.BudgetUpdateFromJSONTyped = BudgetUpdateFromJSONTyped;
function BudgetUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'active': value.active,
        'order': value.order,
        'notes': value.notes,
        'auto_budget_type': (0, _1.AutoBudgetTypeToJSON)(value.autoBudgetType),
        'auto_budget_currency_id': value.autoBudgetCurrencyId,
        'auto_budget_currency_code': value.autoBudgetCurrencyCode,
        'auto_budget_amount': value.autoBudgetAmount,
        'auto_budget_period': (0, _1.AutoBudgetPeriodToJSON)(value.autoBudgetPeriod),
    };
}
exports.BudgetUpdateToJSON = BudgetUpdateToJSON;
