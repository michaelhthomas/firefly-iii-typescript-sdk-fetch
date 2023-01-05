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
import { AttachmentArray, BudgetArray, BudgetLimit, BudgetLimitArray, BudgetLimitSingle, BudgetLimitStore, BudgetSingle, BudgetStore, BudgetUpdate, TransactionArray, TransactionTypeFilter } from '../models';
export interface DeleteBudgetRequest {
    id: string;
}
export interface DeleteBudgetLimitRequest {
    id: string;
    limitId: string;
}
export interface GetBudgetRequest {
    id: string;
    start?: Date;
    end?: Date;
}
export interface GetBudgetLimitRequest {
    id: string;
    limitId: number;
}
export interface ListAttachmentByBudgetRequest {
    id: string;
    page?: number;
}
export interface ListBudgetRequest {
    page?: number;
    start?: Date;
    end?: Date;
}
export interface ListBudgetLimitRequest {
    start: Date;
    end: Date;
}
export interface ListBudgetLimitByBudgetRequest {
    id: string;
    start?: Date;
    end?: Date;
}
export interface ListTransactionByBudgetRequest {
    id: string;
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}
export interface ListTransactionByBudgetLimitRequest {
    id: string;
    limitId: string;
    page?: number;
    type?: TransactionTypeFilter;
}
export interface ListTransactionWithoutBudgetRequest {
    limit?: number;
    page?: number;
    start?: Date;
    end?: Date;
    type?: TransactionTypeFilter;
}
export interface StoreBudgetRequest {
    budgetStore: BudgetStore;
}
export interface StoreBudgetLimitRequest {
    id: string;
    budgetLimitStore: BudgetLimitStore;
}
export interface UpdateBudgetRequest {
    id: string;
    budgetUpdate: BudgetUpdate;
}
export interface UpdateBudgetLimitRequest {
    id: string;
    limitId: string;
    budgetLimit: BudgetLimit;
}
/**
 *
 */
export declare class BudgetsApi extends runtime.BaseAPI {
    /**
     * Delete a budget. Transactions will not be deleted.
     * Delete a budget.
     */
    deleteBudgetRaw(requestParameters: DeleteBudgetRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a budget. Transactions will not be deleted.
     * Delete a budget.
     */
    deleteBudget(requestParameters: DeleteBudgetRequest): Promise<void>;
    /**
     * Delete a budget limit.
     * Delete a budget limit.
     */
    deleteBudgetLimitRaw(requestParameters: DeleteBudgetLimitRequest): Promise<runtime.ApiResponse<void>>;
    /**
     * Delete a budget limit.
     * Delete a budget limit.
     */
    deleteBudgetLimit(requestParameters: DeleteBudgetLimitRequest): Promise<void>;
    /**
     * Get a single budget. If the start date and end date are submitted as well, the \"spent\" array will be updated accordingly.
     * Get a single budget.
     */
    getBudgetRaw(requestParameters: GetBudgetRequest): Promise<runtime.ApiResponse<BudgetSingle>>;
    /**
     * Get a single budget. If the start date and end date are submitted as well, the \"spent\" array will be updated accordingly.
     * Get a single budget.
     */
    getBudget(requestParameters: GetBudgetRequest): Promise<BudgetSingle>;
    /**
     * Get single budget limit.
     */
    getBudgetLimitRaw(requestParameters: GetBudgetLimitRequest): Promise<runtime.ApiResponse<BudgetLimitSingle>>;
    /**
     * Get single budget limit.
     */
    getBudgetLimit(requestParameters: GetBudgetLimitRequest): Promise<BudgetLimitSingle>;
    /**
     * Lists all attachments.
     * Lists all attachments of a budget.
     */
    listAttachmentByBudgetRaw(requestParameters: ListAttachmentByBudgetRequest): Promise<runtime.ApiResponse<AttachmentArray>>;
    /**
     * Lists all attachments.
     * Lists all attachments of a budget.
     */
    listAttachmentByBudget(requestParameters: ListAttachmentByBudgetRequest): Promise<AttachmentArray>;
    /**
     * List all the budgets the user has made. If the start date and end date are submitted as well, the \"spent\" array will be updated accordingly.
     * List all budgets.
     */
    listBudgetRaw(requestParameters: ListBudgetRequest): Promise<runtime.ApiResponse<BudgetArray>>;
    /**
     * List all the budgets the user has made. If the start date and end date are submitted as well, the \"spent\" array will be updated accordingly.
     * List all budgets.
     */
    listBudget(requestParameters: ListBudgetRequest): Promise<BudgetArray>;
    /**
     * Get all budget limits for for this date range.
     * Get list of budget limits by date
     */
    listBudgetLimitRaw(requestParameters: ListBudgetLimitRequest): Promise<runtime.ApiResponse<BudgetLimitArray>>;
    /**
     * Get all budget limits for for this date range.
     * Get list of budget limits by date
     */
    listBudgetLimit(requestParameters: ListBudgetLimitRequest): Promise<BudgetLimitArray>;
    /**
     * Get all budget limits for this budget and the money spent, and money left. You can limit the list by submitting a date range as well. The \"spent\" array for each budget limit is NOT influenced by the start and end date of your query, but by the start and end date of the budget limit itself.
     * Get all limits for a budget.
     */
    listBudgetLimitByBudgetRaw(requestParameters: ListBudgetLimitByBudgetRequest): Promise<runtime.ApiResponse<BudgetLimitArray>>;
    /**
     * Get all budget limits for this budget and the money spent, and money left. You can limit the list by submitting a date range as well. The \"spent\" array for each budget limit is NOT influenced by the start and end date of your query, but by the start and end date of the budget limit itself.
     * Get all limits for a budget.
     */
    listBudgetLimitByBudget(requestParameters: ListBudgetLimitByBudgetRequest): Promise<BudgetLimitArray>;
    /**
     * Get all transactions linked to a budget, possibly limited by start and end
     * All transactions to a budget.
     */
    listTransactionByBudgetRaw(requestParameters: ListTransactionByBudgetRequest): Promise<runtime.ApiResponse<TransactionArray>>;
    /**
     * Get all transactions linked to a budget, possibly limited by start and end
     * All transactions to a budget.
     */
    listTransactionByBudget(requestParameters: ListTransactionByBudgetRequest): Promise<TransactionArray>;
    /**
     * List all the transactions within one budget limit. The start and end date are dictated by the budget limit.
     * List all transactions by a budget limit ID.
     */
    listTransactionByBudgetLimitRaw(requestParameters: ListTransactionByBudgetLimitRequest): Promise<runtime.ApiResponse<TransactionArray>>;
    /**
     * List all the transactions within one budget limit. The start and end date are dictated by the budget limit.
     * List all transactions by a budget limit ID.
     */
    listTransactionByBudgetLimit(requestParameters: ListTransactionByBudgetLimitRequest): Promise<TransactionArray>;
    /**
     * Get all transactions without a budget, possibly limited by start and end
     * All transactions without a budget.
     */
    listTransactionWithoutBudgetRaw(requestParameters: ListTransactionWithoutBudgetRequest): Promise<runtime.ApiResponse<TransactionArray>>;
    /**
     * Get all transactions without a budget, possibly limited by start and end
     * All transactions without a budget.
     */
    listTransactionWithoutBudget(requestParameters: ListTransactionWithoutBudgetRequest): Promise<TransactionArray>;
    /**
     * Creates a new budget. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new budget
     */
    storeBudgetRaw(requestParameters: StoreBudgetRequest): Promise<runtime.ApiResponse<BudgetSingle>>;
    /**
     * Creates a new budget. The data required can be submitted as a JSON body or as a list of parameters.
     * Store a new budget
     */
    storeBudget(requestParameters: StoreBudgetRequest): Promise<BudgetSingle>;
    /**
     * Store a new budget limit under this budget.
     * Store new budget limit.
     */
    storeBudgetLimitRaw(requestParameters: StoreBudgetLimitRequest): Promise<runtime.ApiResponse<BudgetLimitSingle>>;
    /**
     * Store a new budget limit under this budget.
     * Store new budget limit.
     */
    storeBudgetLimit(requestParameters: StoreBudgetLimitRequest): Promise<BudgetLimitSingle>;
    /**
     * Update existing budget. This endpoint cannot be used to set budget amount limits.
     * Update existing budget.
     */
    updateBudgetRaw(requestParameters: UpdateBudgetRequest): Promise<runtime.ApiResponse<BudgetSingle>>;
    /**
     * Update existing budget. This endpoint cannot be used to set budget amount limits.
     * Update existing budget.
     */
    updateBudget(requestParameters: UpdateBudgetRequest): Promise<BudgetSingle>;
    /**
     * Update existing budget limit.
     * Update existing budget limit.
     */
    updateBudgetLimitRaw(requestParameters: UpdateBudgetLimitRequest): Promise<runtime.ApiResponse<BudgetLimitSingle>>;
    /**
     * Update existing budget limit.
     * Update existing budget limit.
     */
    updateBudgetLimit(requestParameters: UpdateBudgetLimitRequest): Promise<BudgetLimitSingle>;
}
