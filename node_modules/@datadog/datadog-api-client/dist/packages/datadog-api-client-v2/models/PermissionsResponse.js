"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsResponse = void 0;
/**
 * Payload with API-returned permissions.
 */
class PermissionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PermissionsResponse.attributeTypeMap;
    }
}
exports.PermissionsResponse = PermissionsResponse;
/**
 * @ignore
 */
PermissionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Permission>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PermissionsResponse.js.map