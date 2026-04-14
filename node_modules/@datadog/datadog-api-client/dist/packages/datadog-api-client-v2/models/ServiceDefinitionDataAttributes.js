"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionDataAttributes = void 0;
/**
 * Service definition attributes.
 */
class ServiceDefinitionDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionDataAttributes.attributeTypeMap;
    }
}
exports.ServiceDefinitionDataAttributes = ServiceDefinitionDataAttributes;
/**
 * @ignore
 */
ServiceDefinitionDataAttributes.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "ServiceDefinitionMeta",
    },
    schema: {
        baseName: "schema",
        type: "ServiceDefinitionSchema",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionDataAttributes.js.map