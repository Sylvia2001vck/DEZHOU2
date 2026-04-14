"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomFrameworkRequest = void 0;
/**
 * Request object to update a custom framework.
 */
class UpdateCustomFrameworkRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateCustomFrameworkRequest.attributeTypeMap;
    }
}
exports.UpdateCustomFrameworkRequest = UpdateCustomFrameworkRequest;
/**
 * @ignore
 */
UpdateCustomFrameworkRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomFrameworkData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateCustomFrameworkRequest.js.map