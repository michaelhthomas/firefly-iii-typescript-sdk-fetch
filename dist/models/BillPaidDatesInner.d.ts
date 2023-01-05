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
/**
 *
 * @export
 * @interface BillPaidDatesInner
 */
export interface BillPaidDatesInner {
    /**
     * Transaction group ID of the paid bill.
     * @type {string}
     * @memberof BillPaidDatesInner
     */
    readonly transactionGroupId?: string;
    /**
     * Transaction journal ID of the paid bill.
     * @type {string}
     * @memberof BillPaidDatesInner
     */
    readonly transactionJournalId?: string;
    /**
     * Date the bill was paid.
     * @type {Date}
     * @memberof BillPaidDatesInner
     */
    readonly date?: Date;
}
/**
 * Check if a given object implements the BillPaidDatesInner interface.
 */
export declare function instanceOfBillPaidDatesInner(value: object): boolean;
export declare function BillPaidDatesInnerFromJSON(json: any): BillPaidDatesInner;
export declare function BillPaidDatesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillPaidDatesInner;
export declare function BillPaidDatesInnerToJSON(value?: BillPaidDatesInner | null): any;
