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

import { exists, mapValues } from '../runtime';
import {
    AccountTypeProperty,
    AccountTypePropertyFromJSON,
    AccountTypePropertyFromJSONTyped,
    AccountTypePropertyToJSON,
    TransactionTypeProperty,
    TransactionTypePropertyFromJSON,
    TransactionTypePropertyFromJSONTyped,
    TransactionTypePropertyToJSON,
} from './';

/**
 * 
 * @export
 * @interface TransactionSplit
 */
export interface TransactionSplit {
    /**
     * User ID
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly user?: string;
    /**
     * ID of the underlying transaction journal. Each transaction consists of a transaction group (see the top ID) and one or more journals
     * making up the splits of the transaction.
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly transactionJournalId?: string;
    /**
     * 
     * @type {TransactionTypeProperty}
     * @memberof TransactionSplit
     */
    type: TransactionTypeProperty;
    /**
     * Date of the transaction
     * @type {Date}
     * @memberof TransactionSplit
     */
    date: Date;
    /**
     * Order of this entry in the list of transactions.
     * @type {number}
     * @memberof TransactionSplit
     */
    order?: number | null;
    /**
     * Currency ID. Default is the source account's currency, or the user's default currency. Can be used instead of currency_code.
     * @type {string}
     * @memberof TransactionSplit
     */
    currencyId?: string | null;
    /**
     * Currency code. Default is the source account's currency, or the user's default currency. Can be used instead of currency_id.
     * @type {string}
     * @memberof TransactionSplit
     */
    currencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly currencySymbol?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly currencyName?: string;
    /**
     * Number of decimals used in this currency.
     * @type {number}
     * @memberof TransactionSplit
     */
    readonly currencyDecimalPlaces?: number;
    /**
     * Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount.
     * @type {string}
     * @memberof TransactionSplit
     */
    foreignCurrencyId?: string | null;
    /**
     * Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount.
     * @type {string}
     * @memberof TransactionSplit
     */
    foreignCurrencyCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly foreignCurrencySymbol?: string | null;
    /**
     * Number of decimals in the currency
     * @type {number}
     * @memberof TransactionSplit
     */
    readonly foreignCurrencyDecimalPlaces?: number | null;
    /**
     * Amount of the transaction.
     * @type {string}
     * @memberof TransactionSplit
     */
    amount: string;
    /**
     * The amount in a foreign currency.
     * @type {string}
     * @memberof TransactionSplit
     */
    foreignAmount?: string | null;
    /**
     * Description of the transaction.
     * @type {string}
     * @memberof TransactionSplit
     */
    description: string;
    /**
     * ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account.
     * @type {string}
     * @memberof TransactionSplit
     */
    sourceId: string | null;
    /**
     * Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name.
     * @type {string}
     * @memberof TransactionSplit
     */
    sourceName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly sourceIban?: string | null;
    /**
     * 
     * @type {AccountTypeProperty}
     * @memberof TransactionSplit
     */
    sourceType?: AccountTypeProperty;
    /**
     * ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account.
     * @type {string}
     * @memberof TransactionSplit
     */
    destinationId: string | null;
    /**
     * Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough.
     * @type {string}
     * @memberof TransactionSplit
     */
    destinationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly destinationIban?: string | null;
    /**
     * 
     * @type {AccountTypeProperty}
     * @memberof TransactionSplit
     */
    destinationType?: AccountTypeProperty;
    /**
     * The budget ID for this transaction.
     * @type {string}
     * @memberof TransactionSplit
     */
    budgetId?: string | null;
    /**
     * The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly budgetName?: string | null;
    /**
     * The category ID for this transaction.
     * @type {string}
     * @memberof TransactionSplit
     */
    categoryId?: string | null;
    /**
     * The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name.
     * @type {string}
     * @memberof TransactionSplit
     */
    categoryName?: string | null;
    /**
     * Optional. Use either this or the bill_name
     * @type {string}
     * @memberof TransactionSplit
     */
    billId?: string | null;
    /**
     * Optional. Use either this or the bill_id
     * @type {string}
     * @memberof TransactionSplit
     */
    billName?: string | null;
    /**
     * If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user.
     * @type {boolean}
     * @memberof TransactionSplit
     */
    reconciled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TransactionSplit
     */
    notes?: string | null;
    /**
     * Array of tags.
     * @type {Array<string>}
     * @memberof TransactionSplit
     */
    tags?: Array<string> | null;
    /**
     * Reference to internal reference of other systems.
     * @type {string}
     * @memberof TransactionSplit
     */
    internalReference?: string | null;
    /**
     * Reference to external ID in other systems.
     * @type {string}
     * @memberof TransactionSplit
     */
    externalId?: string | null;
    /**
     * External, custom URL for this transaction.
     * @type {string}
     * @memberof TransactionSplit
     */
    externalUrl?: string | null;
    /**
     * System generated identifier for original creator of transaction.
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly originalSource?: string | null;
    /**
     * Reference to recurrence that made the transaction.
     * @type {number}
     * @memberof TransactionSplit
     */
    readonly recurrenceId?: number | null;
    /**
     * Total number of transactions expected to be created by this recurrence repetition. Will be 0 if infinite.
     * @type {number}
     * @memberof TransactionSplit
     */
    readonly recurrenceTotal?: number | null;
    /**
     * The # of the current transaction created under this recurrence.
     * @type {number}
     * @memberof TransactionSplit
     */
    readonly recurrenceCount?: number | null;
    /**
     * Internal ID of bunq transaction. DEPRECATED
     * @type {string}
     * @memberof TransactionSplit
     */
    bunqPaymentId?: string | null;
    /**
     * Hash value of original import transaction (for duplicate detection).
     * @type {string}
     * @memberof TransactionSplit
     */
    readonly importHashV2?: string | null;
    /**
     * SEPA Clearing Code
     * @type {string}
     * @memberof TransactionSplit
     */
    sepaCc?: string | null;
    /**
     * SEPA Opposing Account Identifier
     * @type {string}
     * @memberof TransactionSplit
     */
    sepaCtOp?: string | null;
    /**
     * SEPA end-to-end Identifier
     * @type {string}
     * @memberof TransactionSplit
     */
    sepaCtId?: string | null;
    /**
     * SEPA mandate identifier
     * @type {string}
     * @memberof TransactionSplit
     */
    sepaDb?: string | null;
    /**
     * SEPA Country
     * @type {string}
     * @memberof TransactionSplit
     */
    sepaCountry?: string | null;
    /**
     * SEPA External Purpose indicator
     * @type {string}
     * @memberof TransactionSplit
     */
    sepaEp?: string | null;
    /**
     * SEPA Creditor Identifier
     * @type {string}
     * @memberof TransactionSplit
     */
    sepaCi?: string | null;
    /**
     * SEPA Batch ID
     * @type {string}
     * @memberof TransactionSplit
     */
    sepaBatchId?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplit
     */
    interestDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplit
     */
    bookDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplit
     */
    processDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplit
     */
    dueDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplit
     */
    paymentDate?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof TransactionSplit
     */
    invoiceDate?: Date | null;
    /**
     * Latitude of the transaction's location, if applicable. Can be used to draw a map.
     * @type {number}
     * @memberof TransactionSplit
     */
    latitude?: number | null;
    /**
     * Latitude of the transaction's location, if applicable. Can be used to draw a map.
     * @type {number}
     * @memberof TransactionSplit
     */
    longitude?: number | null;
    /**
     * Zoom level for the map, if drawn. This to set the box right. Unfortunately this is a proprietary value because each map provider has different zoom levels.
     * @type {number}
     * @memberof TransactionSplit
     */
    zoomLevel?: number | null;
    /**
     * If the transaction has attachments.
     * @type {boolean}
     * @memberof TransactionSplit
     */
    hasAttachments?: boolean;
}

export function TransactionSplitFromJSON(json: any): TransactionSplit {
    return TransactionSplitFromJSONTyped(json, false);
}

export function TransactionSplitFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionSplit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': !exists(json, 'user') ? undefined : json['user'],
        'transactionJournalId': !exists(json, 'transaction_journal_id') ? undefined : json['transaction_journal_id'],
        'type': TransactionTypePropertyFromJSON(json['type']),
        'date': (new Date(json['date'])),
        'order': !exists(json, 'order') ? undefined : json['order'],
        'currencyId': !exists(json, 'currency_id') ? undefined : json['currency_id'],
        'currencyCode': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'currencySymbol': !exists(json, 'currency_symbol') ? undefined : json['currency_symbol'],
        'currencyName': !exists(json, 'currency_name') ? undefined : json['currency_name'],
        'currencyDecimalPlaces': !exists(json, 'currency_decimal_places') ? undefined : json['currency_decimal_places'],
        'foreignCurrencyId': !exists(json, 'foreign_currency_id') ? undefined : json['foreign_currency_id'],
        'foreignCurrencyCode': !exists(json, 'foreign_currency_code') ? undefined : json['foreign_currency_code'],
        'foreignCurrencySymbol': !exists(json, 'foreign_currency_symbol') ? undefined : json['foreign_currency_symbol'],
        'foreignCurrencyDecimalPlaces': !exists(json, 'foreign_currency_decimal_places') ? undefined : json['foreign_currency_decimal_places'],
        'amount': json['amount'],
        'foreignAmount': !exists(json, 'foreign_amount') ? undefined : json['foreign_amount'],
        'description': json['description'],
        'sourceId': json['source_id'],
        'sourceName': !exists(json, 'source_name') ? undefined : json['source_name'],
        'sourceIban': !exists(json, 'source_iban') ? undefined : json['source_iban'],
        'sourceType': !exists(json, 'source_type') ? undefined : AccountTypePropertyFromJSON(json['source_type']),
        'destinationId': json['destination_id'],
        'destinationName': !exists(json, 'destination_name') ? undefined : json['destination_name'],
        'destinationIban': !exists(json, 'destination_iban') ? undefined : json['destination_iban'],
        'destinationType': !exists(json, 'destination_type') ? undefined : AccountTypePropertyFromJSON(json['destination_type']),
        'budgetId': !exists(json, 'budget_id') ? undefined : json['budget_id'],
        'budgetName': !exists(json, 'budget_name') ? undefined : json['budget_name'],
        'categoryId': !exists(json, 'category_id') ? undefined : json['category_id'],
        'categoryName': !exists(json, 'category_name') ? undefined : json['category_name'],
        'billId': !exists(json, 'bill_id') ? undefined : json['bill_id'],
        'billName': !exists(json, 'bill_name') ? undefined : json['bill_name'],
        'reconciled': !exists(json, 'reconciled') ? undefined : json['reconciled'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'internalReference': !exists(json, 'internal_reference') ? undefined : json['internal_reference'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'externalUrl': !exists(json, 'external_url') ? undefined : json['external_url'],
        'originalSource': !exists(json, 'original_source') ? undefined : json['original_source'],
        'recurrenceId': !exists(json, 'recurrence_id') ? undefined : json['recurrence_id'],
        'recurrenceTotal': !exists(json, 'recurrence_total') ? undefined : json['recurrence_total'],
        'recurrenceCount': !exists(json, 'recurrence_count') ? undefined : json['recurrence_count'],
        'bunqPaymentId': !exists(json, 'bunq_payment_id') ? undefined : json['bunq_payment_id'],
        'importHashV2': !exists(json, 'import_hash_v2') ? undefined : json['import_hash_v2'],
        'sepaCc': !exists(json, 'sepa_cc') ? undefined : json['sepa_cc'],
        'sepaCtOp': !exists(json, 'sepa_ct_op') ? undefined : json['sepa_ct_op'],
        'sepaCtId': !exists(json, 'sepa_ct_id') ? undefined : json['sepa_ct_id'],
        'sepaDb': !exists(json, 'sepa_db') ? undefined : json['sepa_db'],
        'sepaCountry': !exists(json, 'sepa_country') ? undefined : json['sepa_country'],
        'sepaEp': !exists(json, 'sepa_ep') ? undefined : json['sepa_ep'],
        'sepaCi': !exists(json, 'sepa_ci') ? undefined : json['sepa_ci'],
        'sepaBatchId': !exists(json, 'sepa_batch_id') ? undefined : json['sepa_batch_id'],
        'interestDate': !exists(json, 'interest_date') ? undefined : (json['interest_date'] === null ? null : new Date(json['interest_date'])),
        'bookDate': !exists(json, 'book_date') ? undefined : (json['book_date'] === null ? null : new Date(json['book_date'])),
        'processDate': !exists(json, 'process_date') ? undefined : (json['process_date'] === null ? null : new Date(json['process_date'])),
        'dueDate': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'paymentDate': !exists(json, 'payment_date') ? undefined : (json['payment_date'] === null ? null : new Date(json['payment_date'])),
        'invoiceDate': !exists(json, 'invoice_date') ? undefined : (json['invoice_date'] === null ? null : new Date(json['invoice_date'])),
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'zoomLevel': !exists(json, 'zoom_level') ? undefined : json['zoom_level'],
        'hasAttachments': !exists(json, 'has_attachments') ? undefined : json['has_attachments'],
    };
}

export function TransactionSplitToJSON(value?: TransactionSplit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': TransactionTypePropertyToJSON(value.type),
        'date': (value.date.toISOString()),
        'order': value.order,
        'currency_id': value.currencyId,
        'currency_code': value.currencyCode,
        'foreign_currency_id': value.foreignCurrencyId,
        'foreign_currency_code': value.foreignCurrencyCode,
        'amount': value.amount,
        'foreign_amount': value.foreignAmount,
        'description': value.description,
        'source_id': value.sourceId,
        'source_name': value.sourceName,
        'source_type': AccountTypePropertyToJSON(value.sourceType),
        'destination_id': value.destinationId,
        'destination_name': value.destinationName,
        'destination_type': AccountTypePropertyToJSON(value.destinationType),
        'budget_id': value.budgetId,
        'category_id': value.categoryId,
        'category_name': value.categoryName,
        'bill_id': value.billId,
        'bill_name': value.billName,
        'reconciled': value.reconciled,
        'notes': value.notes,
        'tags': value.tags,
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
        'latitude': value.latitude,
        'longitude': value.longitude,
        'zoom_level': value.zoomLevel,
        'has_attachments': value.hasAttachments,
    };
}


