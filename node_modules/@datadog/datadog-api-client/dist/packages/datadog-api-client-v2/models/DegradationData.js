"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationData = void 0;
class DegradationData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationData.attributeTypeMap;
    }
}
exports.DegradationData = DegradationData;
/**
 * @ignore
 */
DegradationData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DegradationDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "DegradationDataRelationships",
    },
    type: {
        baseName: "type",
        type: "PatchDegradationRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DegradationData.js.map