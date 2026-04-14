"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveVulnerableSymbolsResponseData = void 0;
class ResolveVulnerableSymbolsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResolveVulnerableSymbolsResponseData.attributeTypeMap;
    }
}
exports.ResolveVulnerableSymbolsResponseData = ResolveVulnerableSymbolsResponseData;
/**
 * @ignore
 */
ResolveVulnerableSymbolsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ResolveVulnerableSymbolsResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ResolveVulnerableSymbolsResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResolveVulnerableSymbolsResponseData.js.map