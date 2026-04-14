"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaRequestData = void 0;
class ScaRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScaRequestData.attributeTypeMap;
    }
}
exports.ScaRequestData = ScaRequestData;
/**
 * @ignore
 */
ScaRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ScaRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ScaRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScaRequestData.js.map