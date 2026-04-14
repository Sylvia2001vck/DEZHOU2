"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterCreateData = void 0;
/**
 * The body of the retention filter to be created.
 */
class RetentionFilterCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterCreateData.attributeTypeMap;
    }
}
exports.RetentionFilterCreateData = RetentionFilterCreateData;
/**
 * @ignore
 */
RetentionFilterCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RetentionFilterCreateAttributes",
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
//# sourceMappingURL=RetentionFilterCreateData.js.map