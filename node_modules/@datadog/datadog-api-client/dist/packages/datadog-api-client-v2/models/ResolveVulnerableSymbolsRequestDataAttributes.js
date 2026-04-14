"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveVulnerableSymbolsRequestDataAttributes = void 0;
class ResolveVulnerableSymbolsRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResolveVulnerableSymbolsRequestDataAttributes.attributeTypeMap;
    }
}
exports.ResolveVulnerableSymbolsRequestDataAttributes = ResolveVulnerableSymbolsRequestDataAttributes;
/**
 * @ignore
 */
ResolveVulnerableSymbolsRequestDataAttributes.attributeTypeMap = {
    purls: {
        baseName: "purls",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResolveVulnerableSymbolsRequestDataAttributes.js.map