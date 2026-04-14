"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Link = void 0;
/**
 * Service's external links.
 */
class ServiceDefinitionV2Link {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Link.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Link = ServiceDefinitionV2Link;
/**
 * @ignore
 */
ServiceDefinitionV2Link.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ServiceDefinitionV2LinkType",
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
//# sourceMappingURL=ServiceDefinitionV2Link.js.map