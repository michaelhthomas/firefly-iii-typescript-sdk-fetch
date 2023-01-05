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
import { AutoBudgetPeriod, AutoBudgetType } from './';
/**
 *
 * @export
 * @interface BudgetUpdate
 */
export interface BudgetUpdate {
    /**
     *
     * @type {string}
     * @memberof BudgetUpdate
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof BudgetUpdate
     */
    active?: boolean;
    /**
     *
     * @type {number}
     * @memberof BudgetUpdate
     */
    order?: number;
    /**
     *
     * @type {string}
     * @memberof BudgetUpdate
     */
    notes?: string | null;
    /**
     *
     * @type {AutoBudgetType}
     * @memberof BudgetUpdate
     */
    autoBudgetType?: AutoBudgetType | null;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof BudgetUpdate
     */
    autoBudgetCurrencyId?: string | null;
    /**
     * Use either currency_id or currency_code. Defaults to the user's default currency.
     * @type {string}
     * @memberof BudgetUpdate
     */
    autoBudgetCurrencyCode?: string | null;
    /**
     *
     * @type {string}
     * @memberof BudgetUpdate
     */
    autoBudgetAmount?: string | null;
    /**
     *
     * @type {AutoBudgetPeriod}
     * @memberof BudgetUpdate
     */
    autoBudgetPeriod?: AutoBudgetPeriod | null;
}
export declare function BudgetUpdateFromJSON(json: any): BudgetUpdate;
export declare function BudgetUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BudgetUpdate;
export declare function BudgetUpdateToJSON(value?: BudgetUpdate | null): any;
