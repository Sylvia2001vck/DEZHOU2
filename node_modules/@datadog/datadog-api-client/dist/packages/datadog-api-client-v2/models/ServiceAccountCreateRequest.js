"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAccountCreateRequest = void 0;
/**
 * Create a service account.
 */
class ServiceAccountCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceAccountCreateRequest.attributeTypeMap;
    }
}
exports.ServiceAccountCreateRequest = ServiceAccountCreateRequest;
/**
 * @ignore
 */
ServiceAccountCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ServiceAccountCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceAccountCreateRequest.js.map