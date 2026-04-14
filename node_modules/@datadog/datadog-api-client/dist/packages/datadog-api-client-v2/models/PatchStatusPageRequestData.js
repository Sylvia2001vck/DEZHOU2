"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchStatusPageRequestData = void 0;
class PatchStatusPageRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchStatusPageRequestData.attributeTypeMap;
    }
}
exports.PatchStatusPageRequestData = PatchStatusPageRequestData;
/**
 * @ignore
 */
PatchStatusPageRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PatchStatusPageRequestDataAttributes",
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
        type: "StatusPageDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchStatusPageRequestData.js.map