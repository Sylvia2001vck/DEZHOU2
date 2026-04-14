"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveVulnerableSymbolsResponseDataAttributes = void 0;
class ResolveVulnerableSymbolsResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResolveVulnerableSymbolsResponseDataAttributes.attributeTypeMap;
    }
}
exports.ResolveVulnerableSymbolsResponseDataAttributes = ResolveVulnerableSymbolsResponseDataAttributes;
/**
 * @ignore
 */
ResolveVulnerableSymbolsResponseDataAttributes.attributeTypeMap = {
    results: {
        baseName: "results",
        type: "Array<ResolveVulnerableSymbolsResponseResults>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResolveVulnerableSymbolsResponseDataAttributes.js.map