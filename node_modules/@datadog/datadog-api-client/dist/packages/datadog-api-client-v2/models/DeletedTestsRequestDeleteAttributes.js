"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedTestsRequestDeleteAttributes = void 0;
class DeletedTestsRequestDeleteAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeletedTestsRequestDeleteAttributes.attributeTypeMap;
    }
}
exports.DeletedTestsRequestDeleteAttributes = DeletedTestsRequestDeleteAttributes;
/**
 * @ignore
 */
DeletedTestsRequestDeleteAttributes.attributeTypeMap = {
    forceDeleteDependencies: {
        baseName: "force_delete_dependencies",
        type: "boolean",
    },
    publicIds: {
        baseName: "public_ids",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeletedTestsRequestDeleteAttributes.js.map