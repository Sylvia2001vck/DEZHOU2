"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceListDataAttributesMetadataItems = void 0;
class ServiceListDataAttributesMetadataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceListDataAttributesMetadataItems.attributeTypeMap;
    }
}
exports.ServiceListDataAttributesMetadataItems = ServiceListDataAttributesMetadataItems;
/**
 * @ignore
 */
ServiceListDataAttributesMetadataItems.attributeTypeMap = {
    isTraced: {
        baseName: "isTraced",
        type: "boolean",
    },
    isUsm: {
        baseName: "isUsm",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceListDataAttributesMetadataItems.js.map