"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowListInstancesResponseMetaPage = void 0;
/**
 * Page information for the list instances response.
 */
class WorkflowListInstancesResponseMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowListInstancesResponseMetaPage.attributeTypeMap;
    }
}
exports.WorkflowListInstancesResponseMetaPage = WorkflowListInstancesResponseMetaPage;
/**
 * @ignore
 */
WorkflowListInstancesResponseMetaPage.attributeTypeMap = {
    totalCount: {
        baseName: "totalCount",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowListInstancesResponseMetaPage.js.map