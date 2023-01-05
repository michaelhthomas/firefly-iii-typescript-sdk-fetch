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
import * as runtime from '../runtime';
import { ChartDataSet } from '../models';
export interface GetChartAccountOverviewRequest {
    start: Date;
    end: Date;
}
/**
 *
 */
export declare class ChartsApi extends runtime.BaseAPI {
    /**
     * This endpoint returns the data required to generate a chart with basic asset account balance information.
     * Dashboard chart with asset account balance information.
     */
    getChartAccountOverviewRaw(requestParameters: GetChartAccountOverviewRequest): Promise<runtime.ApiResponse<Array<ChartDataSet>>>;
    /**
     * This endpoint returns the data required to generate a chart with basic asset account balance information.
     * Dashboard chart with asset account balance information.
     */
    getChartAccountOverview(requestParameters: GetChartAccountOverviewRequest): Promise<Array<ChartDataSet>>;
}
