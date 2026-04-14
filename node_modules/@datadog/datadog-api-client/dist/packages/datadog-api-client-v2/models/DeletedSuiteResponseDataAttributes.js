"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedSuiteResponseDataAttributes = void 0;
class DeletedSuiteResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeletedSuiteResponseDataAttributes.attributeTypeMap;
    }
}
exports.DeletedSuiteResponseDataAttributes = DeletedSuiteResponseDataAttributes;
/**
 * @ignore
 */
DeletedSuiteResponseDataAttributes.attributeTypeMap = {
    deletedAt: {
        baseName: "deleted_at",
        type: "string",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeletedSuiteResponseDataAttributes.js.map