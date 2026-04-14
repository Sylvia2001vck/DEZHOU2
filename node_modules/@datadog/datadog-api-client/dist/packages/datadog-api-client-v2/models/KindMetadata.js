"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindMetadata = void 0;
/**
 * Kind metadata.
 */
class KindMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return KindMetadata.attributeTypeMap;
    }
}
exports.KindMetadata = KindMetadata;
/**
 * @ignore
 */
KindMetadata.attributeTypeMap = {
    createdAt: {
        baseName: "createdAt",
        type: "string",
    },
    modifiedAt: {
        baseName: "modifiedAt",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=KindMetadata.js.map