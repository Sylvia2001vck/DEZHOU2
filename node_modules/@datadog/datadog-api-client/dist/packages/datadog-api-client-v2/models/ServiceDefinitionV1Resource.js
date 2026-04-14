"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV1Resource = void 0;
/**
 * Service's external links.
 */
class ServiceDefinitionV1Resource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV1Resource.attributeTypeMap;
    }
}
exports.ServiceDefinitionV1Resource = ServiceDefinitionV1Resource;
/**
 * @ignore
 */
ServiceDefinitionV1Resource.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ServiceDefinitionV1ResourceType",
        required: true,
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV1Resource.js.map