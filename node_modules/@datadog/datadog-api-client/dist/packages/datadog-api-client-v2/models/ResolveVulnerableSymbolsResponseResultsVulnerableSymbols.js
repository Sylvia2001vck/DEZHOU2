"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveVulnerableSymbolsResponseResultsVulnerableSymbols = void 0;
class ResolveVulnerableSymbolsResponseResultsVulnerableSymbols {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResolveVulnerableSymbolsResponseResultsVulnerableSymbols.attributeTypeMap;
    }
}
exports.ResolveVulnerableSymbolsResponseResultsVulnerableSymbols = ResolveVulnerableSymbolsResponseResultsVulnerableSymbols;
/**
 * @ignore
 */
ResolveVulnerableSymbolsResponseResultsVulnerableSymbols.attributeTypeMap = {
    advisoryId: {
        baseName: "advisory_id",
        type: "string",
    },
    symbols: {
        baseName: "symbols",
        type: "Array<ResolveVulnerableSymbolsResponseResultsVulnerableSymbolsSymbols>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResolveVulnerableSymbolsResponseResultsVulnerableSymbols.js.map