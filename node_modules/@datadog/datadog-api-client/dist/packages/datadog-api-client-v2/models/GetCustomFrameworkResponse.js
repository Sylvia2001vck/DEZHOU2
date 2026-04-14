"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCustomFrameworkResponse = void 0;
/**
 * Response object to get a custom framework.
 */
class GetCustomFrameworkResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetCustomFrameworkResponse.attributeTypeMap;
    }
}
exports.GetCustomFrameworkResponse = GetCustomFrameworkResponse;
/**
 * @ignore
 */
GetCustomFrameworkResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FullCustomFrameworkData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetCustomFrameworkResponse.js.map