"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFilterUpdateRequest = void 0;
/**
 * The new security filter body.
 */
class SecurityFilterUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFilterUpdateRequest.attributeTypeMap;
    }
}
exports.SecurityFilterUpdateRequest = SecurityFilterUpdateRequest;
/**
 * @ignore
 */
SecurityFilterUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SecurityFilterUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFilterUpdateRequest.js.map