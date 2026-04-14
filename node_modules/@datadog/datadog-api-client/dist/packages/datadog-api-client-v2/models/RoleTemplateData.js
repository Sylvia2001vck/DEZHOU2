"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTemplateData = void 0;
/**
 * The definition of `RoleTemplateData` object.
 */
class RoleTemplateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleTemplateData.attributeTypeMap;
    }
}
exports.RoleTemplateData = RoleTemplateData;
/**
 * @ignore
 */
RoleTemplateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RoleTemplateDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RoleTemplateDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleTemplateData.js.map