"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchComponentRequestData = void 0;
class PatchComponentRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchComponentRequestData.attributeTypeMap;
    }
}
exports.PatchComponentRequestData = PatchComponentRequestData;
/**
 * @ignore
 */
PatchComponentRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PatchComponentRequestDataAttributes",
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
        type: "StatusPagesComponentGroupType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchComponentRequestData.js.map