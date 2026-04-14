"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageAttributionTypesResponse = void 0;
/**
 * Usage attribution types response.
 */
class UsageAttributionTypesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageAttributionTypesResponse.attributeTypeMap;
    }
}
exports.UsageAttributionTypesResponse = UsageAttributionTypesResponse;
/**
 * @ignore
 */
UsageAttributionTypesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UsageAttributionTypesBody",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageAttributionTypesResponse.js.map