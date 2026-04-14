"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceAccountCreateData = void 0;
/**
 * Object to create a service account User.
 */
class ServiceAccountCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceAccountCreateData.attributeTypeMap;
    }
}
exports.ServiceAccountCreateData = ServiceAccountCreateData;
/**
 * @ignore
 */
ServiceAccountCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceAccountCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "UserRelationships",
    },
    type: {
        baseName: "type",
        type: "UsersType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceAccountCreateData.js.map