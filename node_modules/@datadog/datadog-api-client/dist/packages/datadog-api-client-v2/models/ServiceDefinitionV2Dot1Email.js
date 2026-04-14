"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot1Email = void 0;
/**
 * Service owner's email.
 */
class ServiceDefinitionV2Dot1Email {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot1Email.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot1Email = ServiceDefinitionV2Dot1Email;
/**
 * @ignore
 */
ServiceDefinitionV2Dot1Email.attributeTypeMap = {
    contact: {
        baseName: "contact",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ServiceDefinitionV2Dot1EmailType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Dot1Email.js.map