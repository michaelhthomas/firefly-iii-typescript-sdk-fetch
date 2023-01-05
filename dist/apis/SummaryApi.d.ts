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
import { BasicSummaryEntry } from '../models';
export interface GetBasicSummaryRequest {
    start: Date;
    end: Date;
    currencyCode?: string;
}
/**
 *
 */
export declare class SummaryApi extends runtime.BaseAPI {
    /**
     * Returns basic sums of the users data, like the net worth, spent and earned amounts. It is multi-currency, and is used in Firefly III to populate the dashboard.
     * Returns basic sums of the users data.
     */
    getBasicSummaryRaw(requestParameters: GetBasicSummaryRequest): Promise<runtime.ApiResponse<Array<BasicSummaryEntry>>>;
    /**
     * Returns basic sums of the users data, like the net worth, spent and earned amounts. It is multi-currency, and is used in Firefly III to populate the dashboard.
     * Returns basic sums of the users data.
     */
    getBasicSummary(requestParameters: GetBasicSummaryRequest): Promise<Array<BasicSummaryEntry>>;
}
