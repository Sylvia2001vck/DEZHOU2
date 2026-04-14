"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterCreateData = void 0;
/**
 * The new RUM retention filter properties to create.
 */
class RumRetentionFilterCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterCreateData.attributeTypeMap;
    }
}
exports.RumRetentionFilterCreateData = RumRetentionFilterCreateData;
/**
 * @ignore
 */
RumRetentionFilterCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RumRetentionFilterCreateAttributes",
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
//# sourceMappingURL=RumRetentionFilterCreateData.js.map