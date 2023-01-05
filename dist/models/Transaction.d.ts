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
import { TransactionSplit } from './';
/**
 *
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     *
     * @type {Date}
     * @memberof Transaction
     */
    readonly createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Transaction
     */
    readonly updatedAt?: Date;
    /**
     * User ID
     * @type {string}
     * @memberof Transaction
     */
    readonly user?: string;
    /**
     * Title of the transaction if it has been split in more than one piece. Empty otherwise.
     * @type {string}
     * @memberof Transaction
     */
    groupTitle?: string | null;
    /**
     *
     * @type {Array<TransactionSplit>}
     * @memberof Transaction
     */
    transactions: Array<TransactionSplit>;
}
export declare function TransactionFromJSON(json: any): Transaction;
export declare function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction;
export declare function TransactionToJSON(value?: Transaction | null): any;
