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
import { ChartDataPoint } from './';
/**
 *
 * @export
 * @interface ChartDataSet
 */
export interface ChartDataSet {
    /**
     * This is the title of the current set. It can refer to an account, a budget or another object (by name).
     * @type {string}
     * @memberof ChartDataSet
     */
    label?: string;
    /**
     * The currency ID of the currency associated to the data in the entries.
     * @type {string}
     * @memberof ChartDataSet
     */
    currencyId?: string;
    /**
     *
     * @type {string}
     * @memberof ChartDataSet
     */
    currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof ChartDataSet
     */
    currencySymbol?: string;
    /**
     * Number of decimals for the currency associated to the data in the entries.
     * @type {number}
     * @memberof ChartDataSet
     */
    currencyDecimalPlaces?: number;
    /**
     *
     * @type {Date}
     * @memberof ChartDataSet
     */
    startDate?: Date;
    /**
     *
     * @type {Date}
     * @memberof ChartDataSet
     */
    endDate?: Date;
    /**
     * Indicated the type of chart that is expected to be rendered. You can safely ignore this if you want.
     * @type {string}
     * @memberof ChartDataSet
     */
    type?: string;
    /**
     * Used to indicate the Y axis for this data set. Is usually between 0 and 1 (left and right side of the chart).
     * @type {number}
     * @memberof ChartDataSet
     */
    yAxisID?: number;
    /**
     * The actual entries for this data set. They 'key' value is the label for the data point. The value is the actual (numerical) value.
     * @type {Array<ChartDataPoint>}
     * @memberof ChartDataSet
     */
    entries?: Array<ChartDataPoint>;
}
export declare function ChartDataSetFromJSON(json: any): ChartDataSet;
export declare function ChartDataSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChartDataSet;
export declare function ChartDataSetToJSON(value?: ChartDataSet | null): any;
