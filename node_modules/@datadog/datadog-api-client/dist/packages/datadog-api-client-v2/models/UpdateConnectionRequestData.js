"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConnectionRequestData = void 0;
class UpdateConnectionRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateConnectionRequestData.attributeTypeMap;
    }
}
exports.UpdateConnectionRequestData = UpdateConnectionRequestData;
/**
 * @ignore
 */
UpdateConnectionRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateConnectionRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UpdateConnectionRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateConnectionRequestData.js.map