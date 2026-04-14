"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyConfigData = void 0;
class TenancyConfigData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TenancyConfigData.attributeTypeMap;
    }
}
exports.TenancyConfigData = TenancyConfigData;
/**
 * @ignore
 */
TenancyConfigData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TenancyConfigDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=TenancyConfigData.js.map