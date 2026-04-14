"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionData = void 0;
/**
 * Service definition data.
 */
class ServiceDefinitionData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionData.attributeTypeMap;
    }
}
exports.ServiceDefinitionData = ServiceDefinitionData;
/**
 * @ignore
 */
ServiceDefinitionData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ServiceDefinitionDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionData.js.map