"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppResponseData = void 0;
/**
 * The data object containing the updated app definition.
 */
class UpdateAppResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppResponseData.attributeTypeMap;
    }
}
exports.UpdateAppResponseData = UpdateAppResponseData;
/**
 * @ignore
 */
UpdateAppResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateAppResponseDataAttributes",
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
        type: "AppDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateAppResponseData.js.map