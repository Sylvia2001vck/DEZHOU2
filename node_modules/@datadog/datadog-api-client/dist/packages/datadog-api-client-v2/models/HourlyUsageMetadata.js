"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsageMetadata = void 0;
/**
 * The object containing document metadata.
 */
class HourlyUsageMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsageMetadata.attributeTypeMap;
    }
}
exports.HourlyUsageMetadata = HourlyUsageMetadata;
/**
 * @ignore
 */
HourlyUsageMetadata.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "HourlyUsagePagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsageMetadata.js.map