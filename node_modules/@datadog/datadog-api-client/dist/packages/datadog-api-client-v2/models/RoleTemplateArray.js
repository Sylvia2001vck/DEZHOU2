"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTemplateArray = void 0;
/**
 * The definition of `RoleTemplateArray` object.
 */
class RoleTemplateArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RoleTemplateArray.attributeTypeMap;
    }
}
exports.RoleTemplateArray = RoleTemplateArray;
/**
 * @ignore
 */
RoleTemplateArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RoleTemplateData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RoleTemplateArray.js.map