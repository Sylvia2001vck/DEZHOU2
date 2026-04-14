"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeConfigResponse = void 0;
/**
 * Custom attribute config response.
 */
class CustomAttributeConfigResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomAttributeConfigResponse.attributeTypeMap;
    }
}
exports.CustomAttributeConfigResponse = CustomAttributeConfigResponse;
/**
 * @ignore
 */
CustomAttributeConfigResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomAttributeConfig",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomAttributeConfigResponse.js.map