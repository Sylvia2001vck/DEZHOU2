"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeConfigCreateRequest = void 0;
/**
 * Custom attribute config create request
 */
class CustomAttributeConfigCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomAttributeConfigCreateRequest.attributeTypeMap;
    }
}
exports.CustomAttributeConfigCreateRequest = CustomAttributeConfigCreateRequest;
/**
 * @ignore
 */
CustomAttributeConfigCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomAttributeConfigCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomAttributeConfigCreateRequest.js.map