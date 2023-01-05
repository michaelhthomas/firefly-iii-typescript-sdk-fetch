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
    DataDestroyObject,
    DataDestroyObjectFromJSON,
    DataDestroyObjectToJSON,
    ExportFileFilter,
    ExportFileFilterFromJSON,
    ExportFileFilterToJSON,
} from '../models';

export interface BulkUpdateTransactionsRequest {
    query: string;
}

export interface DestroyDataRequest {
    objects: DataDestroyObject;
}

export interface ExportAccountsRequest {
    type?: ExportFileFilter;
}

export interface ExportBillsRequest {
    type?: ExportFileFilter;
}

export interface ExportBudgetsRequest {
    type?: ExportFileFilter;
}

export interface ExportCategoriesRequest {
    type?: ExportFileFilter;
}

export interface ExportPiggiesRequest {
    type?: ExportFileFilter;
}

export interface ExportRecurringRequest {
    type?: ExportFileFilter;
}

export interface ExportRulesRequest {
    type?: ExportFileFilter;
}

export interface ExportTagsRequest {
    type?: ExportFileFilter;
}

export interface ExportTransactionsRequest {
    start: Date;
    end: Date;
    accounts?: string;
    type?: ExportFileFilter;
}

/**
 * 
 */
export class DataApi extends runtime.BaseAPI {

    /**
     * Allows you to update transactions in bulk. 
     * Bulk update transaction properties. For more information, see https://docs.firefly-iii.org/firefly-iii/api/specials
     */
    async bulkUpdateTransactionsRaw(requestParameters: BulkUpdateTransactionsRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling bulkUpdateTransactions.');
        }

        const queryParameters: any = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
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
            path: `/api/v1/data/bulk/transactions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Allows you to update transactions in bulk. 
     * Bulk update transaction properties. For more information, see https://docs.firefly-iii.org/firefly-iii/api/specials
     */
    async bulkUpdateTransactions(requestParameters: BulkUpdateTransactionsRequest): Promise<void> {
        await this.bulkUpdateTransactionsRaw(requestParameters);
    }

    /**
     * A call to this endpoint permanently destroys the requested data type. Use it with care and always with user permission. The demo user is incapable of using this endpoint. 
     * Endpoint to destroy user data
     */
    async destroyDataRaw(requestParameters: DestroyDataRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.objects === null || requestParameters.objects === undefined) {
            throw new runtime.RequiredError('objects','Required parameter requestParameters.objects was null or undefined when calling destroyData.');
        }

        const queryParameters: any = {};

        if (requestParameters.objects !== undefined) {
            queryParameters['objects'] = requestParameters.objects;
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
            path: `/api/v1/data/destroy`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * A call to this endpoint permanently destroys the requested data type. Use it with care and always with user permission. The demo user is incapable of using this endpoint. 
     * Endpoint to destroy user data
     */
    async destroyData(requestParameters: DestroyDataRequest): Promise<void> {
        await this.destroyDataRaw(requestParameters);
    }

    /**
     * This endpoint allows you to export your accounts from Firefly III into a file. Currently supports CSV exports only. 
     * Export account data from Firefly III
     */
    async exportAccountsRaw(requestParameters: ExportAccountsRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

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
            path: `/api/v1/data/export/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export your accounts from Firefly III into a file. Currently supports CSV exports only. 
     * Export account data from Firefly III
     */
    async exportAccounts(requestParameters: ExportAccountsRequest): Promise<Blob> {
        const response = await this.exportAccountsRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint allows you to export your bills from Firefly III into a file. Currently supports CSV exports only. 
     * Export bills from Firefly III
     */
    async exportBillsRaw(requestParameters: ExportBillsRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

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
            path: `/api/v1/data/export/bills`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export your bills from Firefly III into a file. Currently supports CSV exports only. 
     * Export bills from Firefly III
     */
    async exportBills(requestParameters: ExportBillsRequest): Promise<Blob> {
        const response = await this.exportBillsRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint allows you to export your budgets and associated budget data from Firefly III into a file. Currently supports CSV exports only. 
     * Export budgets and budget amount data from Firefly III
     */
    async exportBudgetsRaw(requestParameters: ExportBudgetsRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

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
            path: `/api/v1/data/export/budgets`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export your budgets and associated budget data from Firefly III into a file. Currently supports CSV exports only. 
     * Export budgets and budget amount data from Firefly III
     */
    async exportBudgets(requestParameters: ExportBudgetsRequest): Promise<Blob> {
        const response = await this.exportBudgetsRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint allows you to export your categories from Firefly III into a file. Currently supports CSV exports only. 
     * Export category data from Firefly III
     */
    async exportCategoriesRaw(requestParameters: ExportCategoriesRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

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
            path: `/api/v1/data/export/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export your categories from Firefly III into a file. Currently supports CSV exports only. 
     * Export category data from Firefly III
     */
    async exportCategories(requestParameters: ExportCategoriesRequest): Promise<Blob> {
        const response = await this.exportCategoriesRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint allows you to export your piggy banks from Firefly III into a file. Currently supports CSV exports only. 
     * Export piggy banks from Firefly III
     */
    async exportPiggiesRaw(requestParameters: ExportPiggiesRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

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
            path: `/api/v1/data/export/piggy-banks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export your piggy banks from Firefly III into a file. Currently supports CSV exports only. 
     * Export piggy banks from Firefly III
     */
    async exportPiggies(requestParameters: ExportPiggiesRequest): Promise<Blob> {
        const response = await this.exportPiggiesRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint allows you to export your recurring transactions from Firefly III into a file. Currently supports CSV exports only. 
     * Export recurring transaction data from Firefly III
     */
    async exportRecurringRaw(requestParameters: ExportRecurringRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

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
            path: `/api/v1/data/export/recurring`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export your recurring transactions from Firefly III into a file. Currently supports CSV exports only. 
     * Export recurring transaction data from Firefly III
     */
    async exportRecurring(requestParameters: ExportRecurringRequest): Promise<Blob> {
        const response = await this.exportRecurringRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint allows you to export your rules and rule groups from Firefly III into a file. Currently supports CSV exports only. 
     * Export rule groups and rule data from Firefly III
     */
    async exportRulesRaw(requestParameters: ExportRulesRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

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
            path: `/api/v1/data/export/rules`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export your rules and rule groups from Firefly III into a file. Currently supports CSV exports only. 
     * Export rule groups and rule data from Firefly III
     */
    async exportRules(requestParameters: ExportRulesRequest): Promise<Blob> {
        const response = await this.exportRulesRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint allows you to export your tags from Firefly III into a file. Currently supports CSV exports only. 
     * Export tag data from Firefly III
     */
    async exportTagsRaw(requestParameters: ExportTagsRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

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
            path: `/api/v1/data/export/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export your tags from Firefly III into a file. Currently supports CSV exports only. 
     * Export tag data from Firefly III
     */
    async exportTags(requestParameters: ExportTagsRequest): Promise<Blob> {
        const response = await this.exportTagsRaw(requestParameters);
        return await response.value();
    }

    /**
     * This endpoint allows you to export transactions from Firefly III into a file. Currently supports CSV exports only. 
     * Export transaction data from Firefly III
     */
    async exportTransactionsRaw(requestParameters: ExportTransactionsRequest): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.start === null || requestParameters.start === undefined) {
            throw new runtime.RequiredError('start','Required parameter requestParameters.start was null or undefined when calling exportTransactions.');
        }

        if (requestParameters.end === null || requestParameters.end === undefined) {
            throw new runtime.RequiredError('end','Required parameter requestParameters.end was null or undefined when calling exportTransactions.');
        }

        const queryParameters: any = {};

        if (requestParameters.start !== undefined) {
            queryParameters['start'] = (requestParameters.start as any).toISOString().substr(0,10);
        }

        if (requestParameters.end !== undefined) {
            queryParameters['end'] = (requestParameters.end as any).toISOString().substr(0,10);
        }

        if (requestParameters.accounts !== undefined) {
            queryParameters['accounts'] = requestParameters.accounts;
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
            path: `/api/v1/data/export/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.BlobApiResponse(response);
    }

    /**
     * This endpoint allows you to export transactions from Firefly III into a file. Currently supports CSV exports only. 
     * Export transaction data from Firefly III
     */
    async exportTransactions(requestParameters: ExportTransactionsRequest): Promise<Blob> {
        const response = await this.exportTransactionsRaw(requestParameters);
        return await response.value();
    }

}
