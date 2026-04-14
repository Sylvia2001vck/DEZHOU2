"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterWithoutAttributes = void 0;
/**
 * The retention filter object .
 */
class RetentionFilterWithoutAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterWithoutAttributes.attributeTypeMap;
    }
}
exports.RetentionFilterWithoutAttributes = RetentionFilterWithoutAttributes;
/**
 * @ignore
 */
RetentionFilterWithoutAttributes.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ApmRetentionFilterType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFilterWithoutAttributes.js.map