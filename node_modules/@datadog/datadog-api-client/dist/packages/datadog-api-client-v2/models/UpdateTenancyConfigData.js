"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenancyConfigData = void 0;
class UpdateTenancyConfigData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateTenancyConfigData.attributeTypeMap;
    }
}
exports.UpdateTenancyConfigData = UpdateTenancyConfigData;
/**
 * @ignore
 */
UpdateTenancyConfigData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateTenancyConfigDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UpdateTenancyConfigDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateTenancyConfigData.js.map