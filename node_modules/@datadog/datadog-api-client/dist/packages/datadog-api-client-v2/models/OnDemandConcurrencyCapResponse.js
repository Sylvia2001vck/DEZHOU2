"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnDemandConcurrencyCapResponse = void 0;
/**
 * On-demand concurrency cap response.
 */
class OnDemandConcurrencyCapResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnDemandConcurrencyCapResponse.attributeTypeMap;
    }
}
exports.OnDemandConcurrencyCapResponse = OnDemandConcurrencyCapResponse;
/**
 * @ignore
 */
OnDemandConcurrencyCapResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OnDemandConcurrencyCap",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnDemandConcurrencyCapResponse.js.map