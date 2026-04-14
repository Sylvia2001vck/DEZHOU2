"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOpenAPIResponseData = void 0;
/**
 * Data envelope for `UpdateOpenAPIResponse`.
 */
class UpdateOpenAPIResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateOpenAPIResponseData.attributeTypeMap;
    }
}
exports.UpdateOpenAPIResponseData = UpdateOpenAPIResponseData;
/**
 * @ignore
 */
UpdateOpenAPIResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateOpenAPIResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateOpenAPIResponseData.js.map