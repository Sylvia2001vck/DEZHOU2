"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveVulnerableSymbolsResponseResults = void 0;
class ResolveVulnerableSymbolsResponseResults {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResolveVulnerableSymbolsResponseResults.attributeTypeMap;
    }
}
exports.ResolveVulnerableSymbolsResponseResults = ResolveVulnerableSymbolsResponseResults;
/**
 * @ignore
 */
ResolveVulnerableSymbolsResponseResults.attributeTypeMap = {
    purl: {
        baseName: "purl",
        type: "string",
    },
    vulnerableSymbols: {
        baseName: "vulnerable_symbols",
        type: "Array<ResolveVulnerableSymbolsResponseResultsVulnerableSymbols>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResolveVulnerableSymbolsResponseResults.js.map