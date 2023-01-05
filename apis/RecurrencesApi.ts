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
    RecurrenceArray,
    RecurrenceArrayFromJSON,
    RecurrenceArrayToJSON,
    RecurrenceSingle,
    RecurrenceSingleFromJSON,
    RecurrenceSingleToJSON,
    RecurrenceStore,
    RecurrenceStoreFromJSON,
    RecurrenceStoreToJSON,
    RecurrenceUpdate,
    RecurrenceUpdateFromJSON,
    RecurrenceUpdateToJSON,
    TransactionArray,
    TransactionArrayFromJSON,
    TransactionArrayToJSON,
    TransactionTypeFilter,
    TransactionTypeFilterFromJSON,
    TransactionTypeFilterToJSON,
    ValidationError,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface DeleteRecurrenceRequest {
    id: string;
}

export interface GetRecurrenceRequest {
    id: string;
}

export interface ListRecurrenceRequest {
    page?: number;
}

export interface ListTransactionByRecurrenceRequest {
    id: string;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface StoreRecurrenceRequest {
    recurrenceStore: RecurrenceStore;
}

export interface UpdateRecurrenceRequest {
    id: string;
    recurrenceUpdate: RecurrenceUpdate;
}

/**
 * 
 */
export class RecurrencesApi extends runtime.BaseAPI {

    /**
     * Delete a recurring transaction. Transactions created by the recurring transaction will not be deleted.
     * Delete a recurring transaction.
     */
    async deleteRecurrenceRaw(requestParameters: DeleteRecurrenceRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRecurrence.');
        }

        const queryParameters: any = {};

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
            path: `/api/v1/recurrences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a recurring transaction. Transactions created by the recurring transaction will not be deleted.
     * Delete a recurring transaction.
     */
    async deleteRecurrence(requestParameters: DeleteRecurrenceRequest): Promise<void> {
        await this.deleteRecurrenceRaw(requestParameters);
    }

    /**
     * Get a single recurring transaction.
     * Get a single recurring transaction.
     */
    async getRecurrenceRaw(requestParameters: GetRecurrenceRequest): Promise<runtime.ApiResponse<RecurrenceSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRecurrence.');
        }

        const queryParameters: any = {};

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
            path: `/api/v1/recurrences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecurrenceSingleFromJSON(jsonValue));
    }

    /**
     * Get a single recurring transaction.
     * Get a single recurring transaction.
     */
    async getRecurrence(requestParameters: GetRecurrenceRequest): Promise<RecurrenceSingle> {
        const response = await this.getRecurrenceRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all recurring transactions.
     * List all recurring transactions.
     */
    async listRecurrenceRaw(requestParameters: ListRecurrenceRequest): Promise<runtime.ApiResponse<RecurrenceArray>> {
        const queryParameters: any = {};

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
            path: `/api/v1/recurrences`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecurrenceArrayFromJSON(jsonValue));
    }

    /**
     * List all recurring transactions.
     * List all recurring transactions.
     */
    async listRecurrence(requestParameters: ListRecurrenceRequest): Promise<RecurrenceArray> {
        const response = await this.listRecurrenceRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all transactions created by a recurring transaction, optionally limited to the date ranges specified.
     * List all transactions created by a recurring transaction.
     */
    async listTransactionByRecurrenceRaw(requestParameters: ListTransactionByRecurrenceRequest): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listTransactionByRecurrence.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
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
            path: `/api/v1/recurrences/{id}/transactions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * List all transactions created by a recurring transaction, optionally limited to the date ranges specified.
     * List all transactions created by a recurring transaction.
     */
    async listTransactionByRecurrence(requestParameters: ListTransactionByRecurrenceRequest): Promise<TransactionArray> {
        const response = await this.listTransactionByRecurrenceRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a new recurring transaction. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new recurring transaction
     */
    async storeRecurrenceRaw(requestParameters: StoreRecurrenceRequest): Promise<runtime.ApiResponse<RecurrenceSingle>> {
        if (requestParameters.recurrenceStore === null || requestParameters.recurrenceStore === undefined) {
            throw new runtime.RequiredError('recurrenceStore','Required parameter requestParameters.recurrenceStore was null or undefined when calling storeRecurrence.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/recurrences`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecurrenceStoreToJSON(requestParameters.recurrenceStore),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecurrenceSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new recurring transaction. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new recurring transaction
     */
    async storeRecurrence(requestParameters: StoreRecurrenceRequest): Promise<RecurrenceSingle> {
        const response = await this.storeRecurrenceRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update existing recurring transaction.
     * Update existing recurring transaction.
     */
    async updateRecurrenceRaw(requestParameters: UpdateRecurrenceRequest): Promise<runtime.ApiResponse<RecurrenceSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateRecurrence.');
        }

        if (requestParameters.recurrenceUpdate === null || requestParameters.recurrenceUpdate === undefined) {
            throw new runtime.RequiredError('recurrenceUpdate','Required parameter requestParameters.recurrenceUpdate was null or undefined when calling updateRecurrence.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("firefly_iii_auth", []);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/api/v1/recurrences/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RecurrenceUpdateToJSON(requestParameters.recurrenceUpdate),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RecurrenceSingleFromJSON(jsonValue));
    }

    /**
     * Update existing recurring transaction.
     * Update existing recurring transaction.
     */
    async updateRecurrence(requestParameters: UpdateRecurrenceRequest): Promise<RecurrenceSingle> {
        const response = await this.updateRecurrenceRaw(requestParameters);
        return await response.value();
    }

}
