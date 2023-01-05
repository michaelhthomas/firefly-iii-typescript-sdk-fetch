"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleActionKeywordToJSON = exports.RuleActionKeywordFromJSONTyped = exports.RuleActionKeywordFromJSON = exports.RuleActionKeyword = void 0;
/**
 * The type of thing this action will do. A limited set is possible.
 * @export
 * @enum {string}
 */
var RuleActionKeyword;
(function (RuleActionKeyword) {
    RuleActionKeyword["UserAction"] = "user_action";
    RuleActionKeyword["SetCategory"] = "set_category";
    RuleActionKeyword["ClearCategory"] = "clear_category";
    RuleActionKeyword["SetBudget"] = "set_budget";
    RuleActionKeyword["ClearBudget"] = "clear_budget";
    RuleActionKeyword["AddTag"] = "add_tag";
    RuleActionKeyword["RemoveTag"] = "remove_tag";
    RuleActionKeyword["RemoveAllTags"] = "remove_all_tags";
    RuleActionKeyword["SetDescription"] = "set_description";
    RuleActionKeyword["AppendDescription"] = "append_description";
    RuleActionKeyword["PrependDescription"] = "prepend_description";
    RuleActionKeyword["SetSourceAccount"] = "set_source_account";
    RuleActionKeyword["SetDestinationAccount"] = "set_destination_account";
    RuleActionKeyword["SetNotes"] = "set_notes";
    RuleActionKeyword["AppendNotes"] = "append_notes";
    RuleActionKeyword["PrependNotes"] = "prepend_notes";
    RuleActionKeyword["ClearNotes"] = "clear_notes";
    RuleActionKeyword["LinkToBill"] = "link_to_bill";
    RuleActionKeyword["ConvertWithdrawal"] = "convert_withdrawal";
    RuleActionKeyword["ConvertDeposit"] = "convert_deposit";
    RuleActionKeyword["ConvertTransfer"] = "convert_transfer";
    RuleActionKeyword["DeleteTransaction"] = "delete_transaction";
})(RuleActionKeyword = exports.RuleActionKeyword || (exports.RuleActionKeyword = {}));
function RuleActionKeywordFromJSON(json) {
    return RuleActionKeywordFromJSONTyped(json, false);
}
exports.RuleActionKeywordFromJSON = RuleActionKeywordFromJSON;
function RuleActionKeywordFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RuleActionKeywordFromJSONTyped = RuleActionKeywordFromJSONTyped;
function RuleActionKeywordToJSON(value) {
    return value;
}
exports.RuleActionKeywordToJSON = RuleActionKeywordToJSON;
