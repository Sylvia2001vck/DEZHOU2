"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterCreateResponse = void 0;
/**
 * The retention filters definition.
 */
class RetentionFilterCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterCreateResponse.attributeTypeMap;
    }
}
exports.RetentionFilterCreateResponse = RetentionFilterCreateResponse;
/**
 * @ignore
 */
RetentionFilterCreateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RetentionFilter",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFilterCreateResponse.js.map