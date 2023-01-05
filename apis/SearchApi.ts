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


import * as runtime from '../runtime';
import {
    AccountArray,
    AccountArrayFromJSON,
    AccountArrayToJSON,
    AccountSearchFieldFilter,
    AccountSearchFieldFilterFromJSON,
    AccountSearchFieldFilterToJSON,
    AccountTypeFilter,
    AccountTypeFilterFromJSON,
    AccountTypeFilterToJSON,
    TransactionArray,
    TransactionArrayFromJSON,
    TransactionArrayToJSON,
} from '../models';

export interface SearchAccountsRequest {
    query: string;
    field: AccountSearchFieldFilter;
    page?: number;
    type?: AccountTypeFilter;
}

export interface SearchTransactionsRequest {
    query: string;
    page?: number;
}

/**
 * 
 */
export class SearchApi extends runtime.BaseAPI {

    /**
     * Search for accounts
     * Search for accounts
     */
    async searchAccountsRaw(requestParameters: SearchAccountsRequest): Promise<runtime.ApiResponse<AccountArray>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling searchAccounts.');
        }

        if (requestParameters.field === null || requestParameters.field === undefined) {
            throw new runtime.RequiredError('field','Required parameter requestParameters.field was null or undefined when calling searchAccounts.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.field !== undefined) {
            queryParameters['field'] = requestParameters.field;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/search/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountArrayFromJSON(jsonValue));
    }

    /**
     * Search for accounts
     * Search for accounts
     */
    async searchAccounts(requestParameters: SearchAccountsRequest): Promise<AccountArray> {
        const response = await this.searchAccountsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Searches through the users transactions.
     * Search for transactions
     */
    async searchTransactionsRaw(requestParameters: SearchTransactionsRequest): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling searchTransactions.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/search/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * Searches through the users transactions.
     * Search for transactions
     */
    async searchTransactions(requestParameters: SearchTransactionsRequest): Promise<TransactionArray> {
        const response = await this.searchTransactionsRaw(requestParameters);
        return await response.value();
    }

}
