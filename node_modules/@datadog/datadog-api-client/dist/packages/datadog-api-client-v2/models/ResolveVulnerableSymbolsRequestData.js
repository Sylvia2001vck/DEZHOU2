"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveVulnerableSymbolsRequestData = void 0;
class ResolveVulnerableSymbolsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResolveVulnerableSymbolsRequestData.attributeTypeMap;
    }
}
exports.ResolveVulnerableSymbolsRequestData = ResolveVulnerableSymbolsRequestData;
/**
 * @ignore
 */
ResolveVulnerableSymbolsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ResolveVulnerableSymbolsRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ResolveVulnerableSymbolsRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResolveVulnerableSymbolsRequestData.js.map