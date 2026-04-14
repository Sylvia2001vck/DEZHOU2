"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Email = void 0;
/**
 * Service owner's email.
 */
class ServiceDefinitionV2Email {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Email.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Email = ServiceDefinitionV2Email;
/**
 * @ignore
 */
ServiceDefinitionV2Email.attributeTypeMap = {
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
        type: "ServiceDefinitionV2EmailType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Email.js.map