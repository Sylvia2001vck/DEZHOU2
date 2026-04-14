"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOpenAPIResponseAttributes = void 0;
/**
 * Attributes for `UpdateOpenAPI`.
 */
class UpdateOpenAPIResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateOpenAPIResponseAttributes.attributeTypeMap;
    }
}
exports.UpdateOpenAPIResponseAttributes = UpdateOpenAPIResponseAttributes;
/**
 * @ignore
 */
UpdateOpenAPIResponseAttributes.attributeTypeMap = {
    failedEndpoints: {
        baseName: "failed_endpoints",
        type: "Array<OpenAPIEndpoint>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateOpenAPIResponseAttributes.js.map