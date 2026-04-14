"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnDemandConcurrencyCap = void 0;
/**
 * On-demand concurrency cap.
 */
class OnDemandConcurrencyCap {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnDemandConcurrencyCap.attributeTypeMap;
    }
}
exports.OnDemandConcurrencyCap = OnDemandConcurrencyCap;
/**
 * @ignore
 */
OnDemandConcurrencyCap.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OnDemandConcurrencyCapAttributes",
    },
    type: {
        baseName: "type",
        type: "OnDemandConcurrencyCapType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnDemandConcurrencyCap.js.map