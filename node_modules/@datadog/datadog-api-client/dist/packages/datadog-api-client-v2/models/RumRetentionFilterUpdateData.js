"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterUpdateData = void 0;
/**
 * The new RUM retention filter properties to update.
 */
class RumRetentionFilterUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterUpdateData.attributeTypeMap;
    }
}
exports.RumRetentionFilterUpdateData = RumRetentionFilterUpdateData;
/**
 * @ignore
 */
RumRetentionFilterUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RumRetentionFilterUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "RumRetentionFilterType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFilterUpdateData.js.map