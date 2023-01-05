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
    LinkType,
    LinkTypeFromJSON,
    LinkTypeToJSON,
    LinkTypeArray,
    LinkTypeArrayFromJSON,
    LinkTypeArrayToJSON,
    LinkTypeSingle,
    LinkTypeSingleFromJSON,
    LinkTypeSingleToJSON,
    LinkTypeUpdate,
    LinkTypeUpdateFromJSON,
    LinkTypeUpdateToJSON,
    TransactionArray,
    TransactionArrayFromJSON,
    TransactionArrayToJSON,
    TransactionLinkArray,
    TransactionLinkArrayFromJSON,
    TransactionLinkArrayToJSON,
    TransactionLinkSingle,
    TransactionLinkSingleFromJSON,
    TransactionLinkSingleToJSON,
    TransactionLinkStore,
    TransactionLinkStoreFromJSON,
    TransactionLinkStoreToJSON,
    TransactionLinkUpdate,
    TransactionLinkUpdateFromJSON,
    TransactionLinkUpdateToJSON,
    TransactionTypeFilter,
    TransactionTypeFilterFromJSON,
    TransactionTypeFilterToJSON,
    ValidationError,
    ValidationErrorFromJSON,
    ValidationErrorToJSON,
} from '../models';

export interface DeleteLinkTypeRequest {
    id: string;
}

export interface DeleteTransactionLinkRequest {
    id: string;
}

export interface GetLinkTypeRequest {
    id: string;
}

export interface GetTransactionLinkRequest {
    id: string;
}

export interface ListLinkTypeRequest {
    page?: number;
}

export interface ListTransactionByLinkTypeRequest {
    id: string;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface ListTransactionLinkRequest {
    page?: number;
}

export interface StoreLinkTypeRequest {
    linkType: LinkType;
}

export interface StoreTransactionLinkRequest {
    transactionLinkStore: TransactionLinkStore;
}

export interface UpdateLinkTypeRequest {
    id: string;
    linkTypeUpdate: LinkTypeUpdate;
}

export interface UpdateTransactionLinkRequest {
    id: string;
    transactionLinkUpdate: TransactionLinkUpdate;
}

/**
 * 
 */
export class LinksApi extends runtime.BaseAPI {

    /**
     * Will permanently delete a link type. The links between transactions will be removed. The transactions themselves remain. You cannot delete some of the system provided link types, indicated by the editable=false flag when you list it. 
     * Permanently delete link type.
     */
    async deleteLinkTypeRaw(requestParameters: DeleteLinkTypeRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteLinkType.');
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
            path: `/api/v1/link_types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Will permanently delete a link type. The links between transactions will be removed. The transactions themselves remain. You cannot delete some of the system provided link types, indicated by the editable=false flag when you list it. 
     * Permanently delete link type.
     */
    async deleteLinkType(requestParameters: DeleteLinkTypeRequest): Promise<void> {
        await this.deleteLinkTypeRaw(requestParameters);
    }

    /**
     * Will permanently delete link. Transactions remain. 
     * Permanently delete link between transactions.
     */
    async deleteTransactionLinkRaw(requestParameters: DeleteTransactionLinkRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteTransactionLink.');
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
            path: `/api/v1/transaction_links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Will permanently delete link. Transactions remain. 
     * Permanently delete link between transactions.
     */
    async deleteTransactionLink(requestParameters: DeleteTransactionLinkRequest): Promise<void> {
        await this.deleteTransactionLinkRaw(requestParameters);
    }

    /**
     * Returns a single link type by its ID. 
     * Get single a link type.
     */
    async getLinkTypeRaw(requestParameters: GetLinkTypeRequest): Promise<runtime.ApiResponse<LinkTypeSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getLinkType.');
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
            path: `/api/v1/link_types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkTypeSingleFromJSON(jsonValue));
    }

    /**
     * Returns a single link type by its ID. 
     * Get single a link type.
     */
    async getLinkType(requestParameters: GetLinkTypeRequest): Promise<LinkTypeSingle> {
        const response = await this.getLinkTypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a single link by its ID. 
     * Get a single link.
     */
    async getTransactionLinkRaw(requestParameters: GetTransactionLinkRequest): Promise<runtime.ApiResponse<TransactionLinkSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getTransactionLink.');
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
            path: `/api/v1/transaction_links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionLinkSingleFromJSON(jsonValue));
    }

    /**
     * Returns a single link by its ID. 
     * Get a single link.
     */
    async getTransactionLink(requestParameters: GetTransactionLinkRequest): Promise<TransactionLinkSingle> {
        const response = await this.getTransactionLinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all the link types the system has. These include the default ones as well as any new ones. 
     * List all types of links.
     */
    async listLinkTypeRaw(requestParameters: ListLinkTypeRequest): Promise<runtime.ApiResponse<LinkTypeArray>> {
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
            path: `/api/v1/link_types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkTypeArrayFromJSON(jsonValue));
    }

    /**
     * List all the link types the system has. These include the default ones as well as any new ones. 
     * List all types of links.
     */
    async listLinkType(requestParameters: ListLinkTypeRequest): Promise<LinkTypeArray> {
        const response = await this.listLinkTypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all transactions under this link type, both the inward and outward transactions. 
     * List all transactions under this link type.
     */
    async listTransactionByLinkTypeRaw(requestParameters: ListTransactionByLinkTypeRequest): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listTransactionByLinkType.');
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
            path: `/api/v1/link_types/{id}/transactions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * List all transactions under this link type, both the inward and outward transactions. 
     * List all transactions under this link type.
     */
    async listTransactionByLinkType(requestParameters: ListTransactionByLinkTypeRequest): Promise<TransactionArray> {
        const response = await this.listTransactionByLinkTypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all the transaction links. 
     * List all transaction links.
     */
    async listTransactionLinkRaw(requestParameters: ListTransactionLinkRequest): Promise<runtime.ApiResponse<TransactionLinkArray>> {
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
            path: `/api/v1/transaction_links`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionLinkArrayFromJSON(jsonValue));
    }

    /**
     * List all the transaction links. 
     * List all transaction links.
     */
    async listTransactionLink(requestParameters: ListTransactionLinkRequest): Promise<TransactionLinkArray> {
        const response = await this.listTransactionLinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a new link type. The data required can be submitted as a JSON body or as a list of parameters (in key=value pairs, like a webform).
     * Create a new link type
     */
    async storeLinkTypeRaw(requestParameters: StoreLinkTypeRequest): Promise<runtime.ApiResponse<LinkTypeSingle>> {
        if (requestParameters.linkType === null || requestParameters.linkType === undefined) {
            throw new runtime.RequiredError('linkType','Required parameter requestParameters.linkType was null or undefined when calling storeLinkType.');
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
            path: `/api/v1/link_types`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: LinkTypeToJSON(requestParameters.linkType),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkTypeSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new link type. The data required can be submitted as a JSON body or as a list of parameters (in key=value pairs, like a webform).
     * Create a new link type
     */
    async storeLinkType(requestParameters: StoreLinkTypeRequest): Promise<LinkTypeSingle> {
        const response = await this.storeLinkTypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Store a new link between two transactions. For this end point you need the journal_id from a transaction.
     * Create a new link between transactions
     */
    async storeTransactionLinkRaw(requestParameters: StoreTransactionLinkRequest): Promise<runtime.ApiResponse<TransactionLinkSingle>> {
        if (requestParameters.transactionLinkStore === null || requestParameters.transactionLinkStore === undefined) {
            throw new runtime.RequiredError('transactionLinkStore','Required parameter requestParameters.transactionLinkStore was null or undefined when calling storeTransactionLink.');
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
            path: `/api/v1/transaction_links`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionLinkStoreToJSON(requestParameters.transactionLinkStore),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionLinkSingleFromJSON(jsonValue));
    }

    /**
     * Store a new link between two transactions. For this end point you need the journal_id from a transaction.
     * Create a new link between transactions
     */
    async storeTransactionLink(requestParameters: StoreTransactionLinkRequest): Promise<TransactionLinkSingle> {
        const response = await this.storeTransactionLinkRaw(requestParameters);
        return await response.value();
    }

    /**
     * Used to update a single link type. All fields that are not submitted will be cleared (set to NULL). The model will tell you which fields are mandatory. You cannot update some of the system provided link types, indicated by the editable=false flag when you list it. 
     * Update existing link type.
     */
    async updateLinkTypeRaw(requestParameters: UpdateLinkTypeRequest): Promise<runtime.ApiResponse<LinkTypeSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateLinkType.');
        }

        if (requestParameters.linkTypeUpdate === null || requestParameters.linkTypeUpdate === undefined) {
            throw new runtime.RequiredError('linkTypeUpdate','Required parameter requestParameters.linkTypeUpdate was null or undefined when calling updateLinkType.');
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
            path: `/api/v1/link_types/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: LinkTypeUpdateToJSON(requestParameters.linkTypeUpdate),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LinkTypeSingleFromJSON(jsonValue));
    }

    /**
     * Used to update a single link type. All fields that are not submitted will be cleared (set to NULL). The model will tell you which fields are mandatory. You cannot update some of the system provided link types, indicated by the editable=false flag when you list it. 
     * Update existing link type.
     */
    async updateLinkType(requestParameters: UpdateLinkTypeRequest): Promise<LinkTypeSingle> {
        const response = await this.updateLinkTypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * Used to update a single existing link. 
     * Update an existing link between transactions.
     */
    async updateTransactionLinkRaw(requestParameters: UpdateTransactionLinkRequest): Promise<runtime.ApiResponse<TransactionLinkSingle>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateTransactionLink.');
        }

        if (requestParameters.transactionLinkUpdate === null || requestParameters.transactionLinkUpdate === undefined) {
            throw new runtime.RequiredError('transactionLinkUpdate','Required parameter requestParameters.transactionLinkUpdate was null or undefined when calling updateTransactionLink.');
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
            path: `/api/v1/transaction_links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionLinkUpdateToJSON(requestParameters.transactionLinkUpdate),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionLinkSingleFromJSON(jsonValue));
    }

    /**
     * Used to update a single existing link. 
     * Update an existing link between transactions.
     */
    async updateTransactionLink(requestParameters: UpdateTransactionLinkRequest): Promise<TransactionLinkSingle> {
        const response = await this.updateTransactionLinkRaw(requestParameters);
        return await response.value();
    }

}
