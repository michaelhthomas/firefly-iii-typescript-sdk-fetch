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
    AttachmentArray,
    AttachmentArrayFromJSON,
    AttachmentArrayToJSON,
    PiggyBankArray,
    PiggyBankArrayFromJSON,
    PiggyBankArrayToJSON,
    PiggyBankEventArray,
    PiggyBankEventArrayFromJSON,
    PiggyBankEventArrayToJSON,
    PiggyBankSingle,
    PiggyBankSingleFromJSON,
    PiggyBankSingleToJSON,
    PiggyBankStore,
    PiggyBankStoreFromJSON,
    PiggyBankStoreToJSON,
    PiggyBankUpdate,
    PiggyBankUpdateFromJSON,
    PiggyBankUpdateToJSON,
    ValidationError,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface DeletePiggyBankRequest {
    id: string;
}

export interface GetPiggyBankRequest {
    id: string;
}

export interface ListAttachmentByPiggyBankRequest {
    id: string;
    page?: number;
}

export interface ListEventByPiggyBankRequest {
    id: string;
    page?: number;
}

export interface ListPiggyBankRequest {
    page?: number;
}

export interface StorePiggyBankRequest {
    piggyBankStore: PiggyBankStore;
}

export interface UpdatePiggyBankRequest {
    id: string;
    piggyBankUpdate: PiggyBankUpdate;
}

/**
 * 
 */
export class PiggyBanksApi extends runtime.BaseAPI {

    /**
     * Delete a piggy bank.
     * Delete a piggy bank.
     */
    async deletePiggyBankRaw(requestParameters: DeletePiggyBankRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePiggyBank.');
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
            path: `/api/v1/piggy_banks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a piggy bank.
     * Delete a piggy bank.
     */
    async deletePiggyBank(requestParameters: DeletePiggyBankRequest): Promise<void> {
        await this.deletePiggyBankRaw(requestParameters);
    }

    /**
     * Get a single piggy bank.
     * Get a single piggy bank.
     */
    async getPiggyBankRaw(requestParameters: GetPiggyBankRequest): Promise<runtime.ApiResponse<PiggyBankSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPiggyBank.');
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
            path: `/api/v1/piggy_banks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PiggyBankSingleFromJSON(jsonValue));
    }

    /**
     * Get a single piggy bank.
     * Get a single piggy bank.
     */
    async getPiggyBank(requestParameters: GetPiggyBankRequest): Promise<PiggyBankSingle> {
        const response = await this.getPiggyBankRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByPiggyBankRaw(requestParameters: ListAttachmentByPiggyBankRequest): Promise<runtime.ApiResponse<AttachmentArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listAttachmentByPiggyBank.');
        }

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
            path: `/api/v1/piggy_banks/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentArrayFromJSON(jsonValue));
    }

    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByPiggyBank(requestParameters: ListAttachmentByPiggyBankRequest): Promise<AttachmentArray> {
        const response = await this.listAttachmentByPiggyBankRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all events linked to a piggy bank (adding and removing money).
     * List all events linked to a piggy bank.
     */
    async listEventByPiggyBankRaw(requestParameters: ListEventByPiggyBankRequest): Promise<runtime.ApiResponse<PiggyBankEventArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listEventByPiggyBank.');
        }

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
            path: `/api/v1/piggy_banks/{id}/events`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PiggyBankEventArrayFromJSON(jsonValue));
    }

    /**
     * List all events linked to a piggy bank (adding and removing money).
     * List all events linked to a piggy bank.
     */
    async listEventByPiggyBank(requestParameters: ListEventByPiggyBankRequest): Promise<PiggyBankEventArray> {
        const response = await this.listEventByPiggyBankRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all piggy banks.
     * List all piggy banks.
     */
    async listPiggyBankRaw(requestParameters: ListPiggyBankRequest): Promise<runtime.ApiResponse<PiggyBankArray>> {
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
            path: `/api/v1/piggy_banks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PiggyBankArrayFromJSON(jsonValue));
    }

    /**
     * List all piggy banks.
     * List all piggy banks.
     */
    async listPiggyBank(requestParameters: ListPiggyBankRequest): Promise<PiggyBankArray> {
        const response = await this.listPiggyBankRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a new piggy bank. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new piggy bank
     */
    async storePiggyBankRaw(requestParameters: StorePiggyBankRequest): Promise<runtime.ApiResponse<PiggyBankSingle>> {
        if (requestParameters.piggyBankStore === null || requestParameters.piggyBankStore === undefined) {
            throw new runtime.RequiredError('piggyBankStore','Required parameter requestParameters.piggyBankStore was null or undefined when calling storePiggyBank.');
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
            path: `/api/v1/piggy_banks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PiggyBankStoreToJSON(requestParameters.piggyBankStore),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PiggyBankSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new piggy bank. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new piggy bank
     */
    async storePiggyBank(requestParameters: StorePiggyBankRequest): Promise<PiggyBankSingle> {
        const response = await this.storePiggyBankRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update existing piggy bank.
     * Update existing piggy bank.
     */
    async updatePiggyBankRaw(requestParameters: UpdatePiggyBankRequest): Promise<runtime.ApiResponse<PiggyBankSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updatePiggyBank.');
        }

        if (requestParameters.piggyBankUpdate === null || requestParameters.piggyBankUpdate === undefined) {
            throw new runtime.RequiredError('piggyBankUpdate','Required parameter requestParameters.piggyBankUpdate was null or undefined when calling updatePiggyBank.');
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
            path: `/api/v1/piggy_banks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PiggyBankUpdateToJSON(requestParameters.piggyBankUpdate),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PiggyBankSingleFromJSON(jsonValue));
    }

    /**
     * Update existing piggy bank.
     * Update existing piggy bank.
     */
    async updatePiggyBank(requestParameters: UpdatePiggyBankRequest): Promise<PiggyBankSingle> {
        const response = await this.updatePiggyBankRaw(requestParameters);
        return await response.value();
    }

}
