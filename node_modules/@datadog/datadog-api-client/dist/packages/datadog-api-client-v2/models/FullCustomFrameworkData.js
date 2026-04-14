"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullCustomFrameworkData = void 0;
/**
 * Contains type and attributes for custom frameworks.
 */
class FullCustomFrameworkData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FullCustomFrameworkData.attributeTypeMap;
    }
}
exports.FullCustomFrameworkData = FullCustomFrameworkData;
/**
 * @ignore
 */
FullCustomFrameworkData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FullCustomFrameworkDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomFrameworkType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FullCustomFrameworkData.js.map