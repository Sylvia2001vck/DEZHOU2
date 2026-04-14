"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameworkHandleAndVersionResponseData = void 0;
/**
 * Contains type and attributes for custom frameworks.
 */
class FrameworkHandleAndVersionResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FrameworkHandleAndVersionResponseData.attributeTypeMap;
    }
}
exports.FrameworkHandleAndVersionResponseData = FrameworkHandleAndVersionResponseData;
/**
 * @ignore
 */
FrameworkHandleAndVersionResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomFrameworkDataHandleAndVersion",
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
//# sourceMappingURL=FrameworkHandleAndVersionResponseData.js.map