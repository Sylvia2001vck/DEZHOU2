"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFiltersResponse = void 0;
/**
 * All RUM retention filters for a RUM application.
 */
class RumRetentionFiltersResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFiltersResponse.attributeTypeMap;
    }
}
exports.RumRetentionFiltersResponse = RumRetentionFiltersResponse;
/**
 * @ignore
 */
RumRetentionFiltersResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RumRetentionFilterData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFiltersResponse.js.map