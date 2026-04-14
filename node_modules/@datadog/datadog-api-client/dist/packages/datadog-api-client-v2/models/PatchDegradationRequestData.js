"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchDegradationRequestData = void 0;
class PatchDegradationRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchDegradationRequestData.attributeTypeMap;
    }
}
exports.PatchDegradationRequestData = PatchDegradationRequestData;
/**
 * @ignore
 */
PatchDegradationRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PatchDegradationRequestDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=PatchDegradationRequestData.js.map