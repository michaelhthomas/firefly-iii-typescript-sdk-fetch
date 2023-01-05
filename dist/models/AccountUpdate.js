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
exports.AccountUpdateToJSON = exports.AccountUpdateFromJSONTyped = exports.AccountUpdateFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function AccountUpdateFromJSON(json) {
    return AccountUpdateFromJSONTyped(json, false);
}
exports.AccountUpdateFromJSON = AccountUpdateFromJSON;
function AccountUpdateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'iban': !(0, runtime_1.exists)(json, 'iban') ? undefined : json['iban'],
        'bic': !(0, runtime_1.exists)(json, 'bic') ? undefined : json['bic'],
        'accountNumber': !(0, runtime_1.exists)(json, 'account_number') ? undefined : json['account_number'],
        'openingBalance': !(0, runtime_1.exists)(json, 'opening_balance') ? undefined : json['opening_balance'],
        'openingBalanceDate': !(0, runtime_1.exists)(json, 'opening_balance_date') ? undefined : (json['opening_balance_date'] === null ? null : new Date(json['opening_balance_date'])),
        'virtualBalance': !(0, runtime_1.exists)(json, 'virtual_balance') ? undefined : json['virtual_balance'],
        'currencyId': !(0, runtime_1.exists)(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currency_code') ? undefined : json['currency_code'],
        'active': !(0, runtime_1.exists)(json, 'active') ? undefined : json['active'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'includeNetWorth': !(0, runtime_1.exists)(json, 'include_net_worth') ? undefined : json['include_net_worth'],
        'accountRole': !(0, runtime_1.exists)(json, 'account_role') ? undefined : (0, _1.AccountRolePropertyFromJSON)(json['account_role']),
        'creditCardType': !(0, runtime_1.exists)(json, 'credit_card_type') ? undefined : (0, _1.CreditCardTypeFromJSON)(json['credit_card_type']),
        'monthlyPaymentDate': !(0, runtime_1.exists)(json, 'monthly_payment_date') ? undefined : (json['monthly_payment_date'] === null ? null : new Date(json['monthly_payment_date'])),
        'liabilityType': !(0, runtime_1.exists)(json, 'liability_type') ? undefined : (0, _1.LiabilityTypeFromJSON)(json['liability_type']),
        'interest': !(0, runtime_1.exists)(json, 'interest') ? undefined : json['interest'],
        'interestPeriod': !(0, runtime_1.exists)(json, 'interest_period') ? undefined : (0, _1.InterestPeriodFromJSON)(json['interest_period']),
        'notes': !(0, runtime_1.exists)(json, 'notes') ? undefined : json['notes'],
        'latitude': !(0, runtime_1.exists)(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !(0, runtime_1.exists)(json, 'longitude') ? undefined : json['longitude'],
        'zoomLevel': !(0, runtime_1.exists)(json, 'zoom_level') ? undefined : json['zoom_level'],
    };
}
exports.AccountUpdateFromJSONTyped = AccountUpdateFromJSONTyped;
function AccountUpdateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'iban': value.iban,
        'bic': value.bic,
        'account_number': value.accountNumber,
        'opening_balance': value.openingBalance,
        'opening_balance_date': value.openingBalanceDate === undefined ? undefined : (value.openingBalanceDate === null ? null : value.openingBalanceDate.toISOString().substr(0, 10)),
        'virtual_balance': value.virtualBalance,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'active': value.active,
        'order': value.order,
        'include_net_worth': value.includeNetWorth,
        'account_role': (0, _1.AccountRolePropertyToJSON)(value.accountRole),
        'credit_card_type': (0, _1.CreditCardTypeToJSON)(value.creditCardType),
        'monthly_payment_date': value.monthlyPaymentDate === undefined ? undefined : (value.monthlyPaymentDate === null ? null : value.monthlyPaymentDate.toISOString().substr(0, 10)),
        'liability_type': (0, _1.LiabilityTypeToJSON)(value.liabilityType),
        'interest': value.interest,
        'interest_period': (0, _1.InterestPeriodToJSON)(value.interestPeriod),
        'notes': value.notes,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'zoom_level': value.zoomLevel,
    };
}
exports.AccountUpdateToJSON = AccountUpdateToJSON;
