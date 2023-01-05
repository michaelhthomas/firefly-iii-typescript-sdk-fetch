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
exports.TransactionSplitStoreToJSON = exports.TransactionSplitStoreFromJSONTyped = exports.TransactionSplitStoreFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function TransactionSplitStoreFromJSON(json) {
    return TransactionSplitStoreFromJSONTyped(json, false);
}
exports.TransactionSplitStoreFromJSON = TransactionSplitStoreFromJSON;
function TransactionSplitStoreFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': (0, _1.TransactionTypePropertyFromJSON)(json['type']),
        'date': (new Date(json['date'])),
        'amount': json['amount'],
        'description': json['description'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'currencyId': !(0, runtime_1.exists)(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currency_code') ? undefined : json['currency_code'],
        'foreignAmount': !(0, runtime_1.exists)(json, 'foreign_amount') ? undefined : json['foreign_amount'],
        'foreignCurrencyId': !(0, runtime_1.exists)(json, 'foreign_currency_id') ? undefined : json['foreign_currency_id'],
        'foreignCurrencyCode': !(0, runtime_1.exists)(json, 'foreign_currency_code') ? undefined : json['foreign_currency_code'],
        'budgetId': !(0, runtime_1.exists)(json, 'budget_id') ? undefined : json['budget_id'],
        'budgetName': !(0, runtime_1.exists)(json, 'budget_name') ? undefined : json['budget_name'],
        'categoryId': !(0, runtime_1.exists)(json, 'category_id') ? undefined : json['category_id'],
        'categoryName': !(0, runtime_1.exists)(json, 'category_name') ? undefined : json['category_name'],
        'sourceId': !(0, runtime_1.exists)(json, 'source_id') ? undefined : json['source_id'],
        'sourceName': !(0, runtime_1.exists)(json, 'source_name') ? undefined : json['source_name'],
        'destinationId': !(0, runtime_1.exists)(json, 'destination_id') ? undefined : json['destination_id'],
        'destinationName': !(0, runtime_1.exists)(json, 'destination_name') ? undefined : json['destination_name'],
        'reconciled': !(0, runtime_1.exists)(json, 'reconciled') ? undefined : json['reconciled'],
        'piggyBankId': !(0, runtime_1.exists)(json, 'piggy_bank_id') ? undefined : json['piggy_bank_id'],
        'piggyBankName': !(0, runtime_1.exists)(json, 'piggy_bank_name') ? undefined : json['piggy_bank_name'],
        'billId': !(0, runtime_1.exists)(json, 'bill_id') ? undefined : json['bill_id'],
        'billName': !(0, runtime_1.exists)(json, 'bill_name') ? undefined : json['bill_name'],
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        'notes': !(0, runtime_1.exists)(json, 'notes') ? undefined : json['notes'],
        'internalReference': !(0, runtime_1.exists)(json, 'internal_reference') ? undefined : json['internal_reference'],
        'externalId': !(0, runtime_1.exists)(json, 'external_id') ? undefined : json['external_id'],
        'externalUrl': !(0, runtime_1.exists)(json, 'external_url') ? undefined : json['external_url'],
        'bunqPaymentId': !(0, runtime_1.exists)(json, 'bunq_payment_id') ? undefined : json['bunq_payment_id'],
        'sepaCc': !(0, runtime_1.exists)(json, 'sepa_cc') ? undefined : json['sepa_cc'],
        'sepaCtOp': !(0, runtime_1.exists)(json, 'sepa_ct_op') ? undefined : json['sepa_ct_op'],
        'sepaCtId': !(0, runtime_1.exists)(json, 'sepa_ct_id') ? undefined : json['sepa_ct_id'],
        'sepaDb': !(0, runtime_1.exists)(json, 'sepa_db') ? undefined : json['sepa_db'],
        'sepaCountry': !(0, runtime_1.exists)(json, 'sepa_country') ? undefined : json['sepa_country'],
        'sepaEp': !(0, runtime_1.exists)(json, 'sepa_ep') ? undefined : json['sepa_ep'],
        'sepaCi': !(0, runtime_1.exists)(json, 'sepa_ci') ? undefined : json['sepa_ci'],
        'sepaBatchId': !(0, runtime_1.exists)(json, 'sepa_batch_id') ? undefined : json['sepa_batch_id'],
        'interestDate': !(0, runtime_1.exists)(json, 'interest_date') ? undefined : (json['interest_date'] === null ? null : new Date(json['interest_date'])),
        'bookDate': !(0, runtime_1.exists)(json, 'book_date') ? undefined : (json['book_date'] === null ? null : new Date(json['book_date'])),
        'processDate': !(0, runtime_1.exists)(json, 'process_date') ? undefined : (json['process_date'] === null ? null : new Date(json['process_date'])),
        'dueDate': !(0, runtime_1.exists)(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'paymentDate': !(0, runtime_1.exists)(json, 'payment_date') ? undefined : (json['payment_date'] === null ? null : new Date(json['payment_date'])),
        'invoiceDate': !(0, runtime_1.exists)(json, 'invoice_date') ? undefined : (json['invoice_date'] === null ? null : new Date(json['invoice_date'])),
    };
}
exports.TransactionSplitStoreFromJSONTyped = TransactionSplitStoreFromJSONTyped;
function TransactionSplitStoreToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': (0, _1.TransactionTypePropertyToJSON)(value.type),
        'date': (value.date.toISOString()),
        'amount': value.amount,
        'description': value.description,
        'order': value.order,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'foreign_amount': value.foreignAmount,
        'foreign_currency_id': value.foreignCurrencyId,
        'foreign_currency_code': value.foreignCurrencyCode,
        'budget_id': value.budgetId,
        'category_id': value.categoryId,
        'category_name': value.categoryName,
        'source_id': value.sourceId,
        'source_name': value.sourceName,
        'destination_id': value.destinationId,
        'destination_name': value.destinationName,
        'reconciled': value.reconciled,
        'piggy_bank_id': value.piggyBankId,
        'piggy_bank_name': value.piggyBankName,
        'bill_id': value.billId,
        'bill_name': value.billName,
        'tags': value.tags,
        'notes': value.notes,
        'internal_reference': value.internalReference,
        'external_id': value.externalId,
        'external_url': value.externalUrl,
        'bunq_payment_id': value.bunqPaymentId,
        'sepa_cc': value.sepaCc,
        'sepa_ct_op': value.sepaCtOp,
        'sepa_ct_id': value.sepaCtId,
        'sepa_db': value.sepaDb,
        'sepa_country': value.sepaCountry,
        'sepa_ep': value.sepaEp,
        'sepa_ci': value.sepaCi,
        'sepa_batch_id': value.sepaBatchId,
        'interest_date': value.interestDate === undefined ? undefined : (value.interestDate === null ? null : value.interestDate.toISOString()),
        'book_date': value.bookDate === undefined ? undefined : (value.bookDate === null ? null : value.bookDate.toISOString()),
        'process_date': value.processDate === undefined ? undefined : (value.processDate === null ? null : value.processDate.toISOString()),
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate === null ? null : value.dueDate.toISOString()),
        'payment_date': value.paymentDate === undefined ? undefined : (value.paymentDate === null ? null : value.paymentDate.toISOString()),
        'invoice_date': value.invoiceDate === undefined ? undefined : (value.invoiceDate === null ? null : value.invoiceDate.toISOString()),
    };
}
exports.TransactionSplitStoreToJSON = TransactionSplitStoreToJSON;
