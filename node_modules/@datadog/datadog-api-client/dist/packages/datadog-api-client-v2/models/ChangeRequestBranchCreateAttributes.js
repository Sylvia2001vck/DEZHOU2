"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestBranchCreateAttributes = void 0;
/**
 * Attributes for creating a change request branch.
 */
class ChangeRequestBranchCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestBranchCreateAttributes.attributeTypeMap;
    }
}
exports.ChangeRequestBranchCreateAttributes = ChangeRequestBranchCreateAttributes;
/**
 * @ignore
 */
ChangeRequestBranchCreateAttributes.attributeTypeMap = {
    branchName: {
        baseName: "branch_name",
        type: "string",
        required: true,
    },
    repoId: {
        baseName: "repo_id",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestBranchCreateAttributes.js.map