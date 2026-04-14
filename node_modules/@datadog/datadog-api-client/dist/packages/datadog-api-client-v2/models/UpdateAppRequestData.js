"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppRequestData = void 0;
/**
 * The data object containing the new app definition. Any fields not included in the request remain unchanged.
 */
class UpdateAppRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppRequestData.attributeTypeMap;
    }
}
exports.UpdateAppRequestData = UpdateAppRequestData;
/**
 * @ignore
 */
UpdateAppRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateAppRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=UpdateAppRequestData.js.map