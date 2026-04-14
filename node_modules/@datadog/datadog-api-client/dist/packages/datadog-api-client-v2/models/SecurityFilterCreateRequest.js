"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterCreateRequest = void 0;
/**
 * Request object that includes the security filter that you would like to create.
 */
class SecurityFilterCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterCreateRequest.attributeTypeMap;
    }
}
exports.SecurityFilterCreateRequest = SecurityFilterCreateRequest;
/**
 * @ignore
 */
SecurityFilterCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityFilterCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFilterCreateRequest.js.map