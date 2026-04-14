"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomAttributeConfigsResponse = void 0;
/**
 * Custom attribute configs response.
 */
class CustomAttributeConfigsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomAttributeConfigsResponse.attributeTypeMap;
    }
}
exports.CustomAttributeConfigsResponse = CustomAttributeConfigsResponse;
/**
 * @ignore
 */
CustomAttributeConfigsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CustomAttributeConfig>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomAttributeConfigsResponse.js.map