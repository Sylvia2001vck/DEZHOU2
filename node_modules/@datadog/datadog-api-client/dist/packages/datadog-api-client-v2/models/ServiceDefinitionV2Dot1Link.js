"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot1Link = void 0;
/**
 * Service's external links.
 */
class ServiceDefinitionV2Dot1Link {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot1Link.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot1Link = ServiceDefinitionV2Dot1Link;
/**
 * @ignore
 */
ServiceDefinitionV2Dot1Link.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    provider: {
        baseName: "provider",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ServiceDefinitionV2Dot1LinkType",
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
//# sourceMappingURL=ServiceDefinitionV2Dot1Link.js.map