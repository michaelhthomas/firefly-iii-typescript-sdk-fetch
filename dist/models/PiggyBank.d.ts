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
 * @interface PiggyBank
 */
export interface PiggyBank {
    /**
     *
     * @type {Date}
     * @memberof PiggyBank
     */
    readonly createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof PiggyBank
     */
    readonly updatedAt?: Date;
    /**
     * The ID of the asset account this piggy bank is connected to.
     * @type {string}
     * @memberof PiggyBank
     */
    accountId: string;
    /**
     * The name of the asset account this piggy bank is connected to.
     * @type {string}
     * @memberof PiggyBank
     */
    readonly accountName?: string;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    readonly currencyId?: string;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    readonly currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    readonly currencySymbol?: string;
    /**
     * Number of decimals supported by the currency
     * @type {number}
     * @memberof PiggyBank
     */
    readonly currencyDecimalPlaces?: number;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    targetAmount: string | null;
    /**
     *
     * @type {number}
     * @memberof PiggyBank
     */
    readonly percentage?: number | null;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    currentAmount?: string;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    readonly leftToSave?: string | null;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    readonly savePerMonth?: string | null;
    /**
     * The date you started with this piggy bank.
     * @type {Date}
     * @memberof PiggyBank
     */
    startDate?: Date;
    /**
     * The date you intend to finish saving money.
     * @type {Date}
     * @memberof PiggyBank
     */
    targetDate?: Date | null;
    /**
     *
     * @type {number}
     * @memberof PiggyBank
     */
    order?: number;
    /**
     *
     * @type {boolean}
     * @memberof PiggyBank
     */
    readonly active?: boolean;
    /**
     *
     * @type {string}
     * @memberof PiggyBank
     */
    notes?: string | null;
    /**
     * The group ID of the group this object is part of. NULL if no group.
     * @type {string}
     * @memberof PiggyBank
     */
    objectGroupId?: string | null;
    /**
     * The order of the group. At least 1, for the highest sorting.
     * @type {number}
     * @memberof PiggyBank
     */
    readonly objectGroupOrder?: number | null;
    /**
     * The name of the group. NULL if no group.
     * @type {string}
     * @memberof PiggyBank
     */
    objectGroupTitle?: string | null;
}
export declare function PiggyBankFromJSON(json: any): PiggyBank;
export declare function PiggyBankFromJSONTyped(json: any, ignoreDiscriminator: boolean): PiggyBank;
export declare function PiggyBankToJSON(value?: PiggyBank | null): any;
