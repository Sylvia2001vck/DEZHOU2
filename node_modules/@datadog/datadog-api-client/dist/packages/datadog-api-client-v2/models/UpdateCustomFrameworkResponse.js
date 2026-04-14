"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomFrameworkResponse = void 0;
/**
 * Response object to update a custom framework.
 */
class UpdateCustomFrameworkResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateCustomFrameworkResponse.attributeTypeMap;
    }
}
exports.UpdateCustomFrameworkResponse = UpdateCustomFrameworkResponse;
/**
 * @ignore
 */
UpdateCustomFrameworkResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FrameworkHandleAndVersionResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateCustomFrameworkResponse.js.map