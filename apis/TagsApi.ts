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
    TagArray,
    TagArrayFromJSON,
    TagArrayToJSON,
    TagModelStore,
    TagModelStoreFromJSON,
    TagModelStoreToJSON,
    TagModelUpdate,
    TagModelUpdateFromJSON,
    TagModelUpdateToJSON,
    TagSingle,
    TagSingleFromJSON,
    TagSingleToJSON,
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

export interface DeleteTagRequest {
    tag: string;
}

export interface GetTagRequest {
    tag: string;
    page?: number;
}

export interface ListAttachmentByTagRequest {
    tag: string;
    page?: number;
}

export interface ListTagRequest {
    page?: number;
}

export interface ListTransactionByTagRequest {
    tag: string;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}

export interface StoreTagRequest {
    tagModelStore: TagModelStore;
}

export interface UpdateTagRequest {
    tag: string;
    tagModelUpdate: TagModelUpdate;
}

/**
 * 
 */
export class TagsApi extends runtime.BaseAPI {

    /**
     * Delete an tag.
     * Delete an tag.
     */
    async deleteTagRaw(requestParameters: DeleteTagRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling deleteTag.');
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
            path: `/api/v1/tags/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an tag.
     * Delete an tag.
     */
    async deleteTag(requestParameters: DeleteTagRequest): Promise<void> {
        await this.deleteTagRaw(requestParameters);
    }

    /**
     * Get a single tag.
     * Get a single tag.
     */
    async getTagRaw(requestParameters: GetTagRequest): Promise<runtime.ApiResponse<TagSingle>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling getTag.');
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
            path: `/api/v1/tags/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagSingleFromJSON(jsonValue));
    }

    /**
     * Get a single tag.
     * Get a single tag.
     */
    async getTag(requestParameters: GetTagRequest): Promise<TagSingle> {
        const response = await this.getTagRaw(requestParameters);
        return await response.value();
    }

    /**
     * Lists all attachments.
     * Lists all attachments.
     */
    async listAttachmentByTagRaw(requestParameters: ListAttachmentByTagRequest): Promise<runtime.ApiResponse<AttachmentArray>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling listAttachmentByTag.');
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
            path: `/api/v1/tags/{tag}/attachments`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
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
    async listAttachmentByTag(requestParameters: ListAttachmentByTagRequest): Promise<AttachmentArray> {
        const response = await this.listAttachmentByTagRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all of the user\'s tags.
     * List all tags.
     */
    async listTagRaw(requestParameters: ListTagRequest): Promise<runtime.ApiResponse<TagArray>> {
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
            path: `/api/v1/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagArrayFromJSON(jsonValue));
    }

    /**
     * List all of the user\'s tags.
     * List all tags.
     */
    async listTag(requestParameters: ListTagRequest): Promise<TagArray> {
        const response = await this.listTagRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all transactions with this tag.
     * List all transactions with this tag.
     */
    async listTransactionByTagRaw(requestParameters: ListTransactionByTagRequest): Promise<runtime.ApiResponse<TransactionArray>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling listTransactionByTag.');
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
            path: `/api/v1/tags/{tag}/transactions`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionArrayFromJSON(jsonValue));
    }

    /**
     * List all transactions with this tag.
     * List all transactions with this tag.
     */
    async listTransactionByTag(requestParameters: ListTransactionByTagRequest): Promise<TransactionArray> {
        const response = await this.listTransactionByTagRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates a new tag. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new tag
     */
    async storeTagRaw(requestParameters: StoreTagRequest): Promise<runtime.ApiResponse<TagSingle>> {
        if (requestParameters.tagModelStore === null || requestParameters.tagModelStore === undefined) {
            throw new runtime.RequiredError('tagModelStore','Required parameter requestParameters.tagModelStore was null or undefined when calling storeTag.');
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
            path: `/api/v1/tags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagModelStoreToJSON(requestParameters.tagModelStore),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagSingleFromJSON(jsonValue));
    }

    /**
     * Creates a new tag. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new tag
     */
    async storeTag(requestParameters: StoreTagRequest): Promise<TagSingle> {
        const response = await this.storeTagRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update existing tag.
     * Update existing tag.
     */
    async updateTagRaw(requestParameters: UpdateTagRequest): Promise<runtime.ApiResponse<TagSingle>> {
        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling updateTag.');
        }

        if (requestParameters.tagModelUpdate === null || requestParameters.tagModelUpdate === undefined) {
            throw new runtime.RequiredError('tagModelUpdate','Required parameter requestParameters.tagModelUpdate was null or undefined when calling updateTag.');
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
            path: `/api/v1/tags/{tag}`.replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TagModelUpdateToJSON(requestParameters.tagModelUpdate),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagSingleFromJSON(jsonValue));
    }

    /**
     * Update existing tag.
     * Update existing tag.
     */
    async updateTag(requestParameters: UpdateTagRequest): Promise<TagSingle> {
        const response = await this.updateTagRaw(requestParameters);
        return await response.value();
    }

}
