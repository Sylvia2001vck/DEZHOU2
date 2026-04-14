"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMMetadataAuthor = void 0;
/**
 * Author of the SBOM.
 */
class SBOMMetadataAuthor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMMetadataAuthor.attributeTypeMap;
    }
}
exports.SBOMMetadataAuthor = SBOMMetadataAuthor;
/**
 * @ignore
 */
SBOMMetadataAuthor.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMMetadataAuthor.js.map