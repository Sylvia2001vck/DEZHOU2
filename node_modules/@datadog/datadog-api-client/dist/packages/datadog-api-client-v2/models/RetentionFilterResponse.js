"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterResponse = void 0;
/**
 * The retention filters definition.
 */
class RetentionFilterResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterResponse.attributeTypeMap;
    }
}
exports.RetentionFilterResponse = RetentionFilterResponse;
/**
 * @ignore
 */
RetentionFilterResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RetentionFilterAll",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFilterResponse.js.map