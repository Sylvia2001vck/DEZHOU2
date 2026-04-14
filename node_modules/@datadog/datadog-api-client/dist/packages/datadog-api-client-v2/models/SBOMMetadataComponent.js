"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SBOMMetadataComponent = void 0;
/**
 * The component that the BOM describes.
 */
class SBOMMetadataComponent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SBOMMetadataComponent.attributeTypeMap;
    }
}
exports.SBOMMetadataComponent = SBOMMetadataComponent;
/**
 * @ignore
 */
SBOMMetadataComponent.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SBOMMetadataComponent.js.map