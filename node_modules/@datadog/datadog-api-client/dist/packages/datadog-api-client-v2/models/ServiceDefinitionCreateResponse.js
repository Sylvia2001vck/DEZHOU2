"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionCreateResponse = void 0;
/**
 * Create service definitions response.
 */
class ServiceDefinitionCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionCreateResponse.attributeTypeMap;
    }
}
exports.ServiceDefinitionCreateResponse = ServiceDefinitionCreateResponse;
/**
 * @ignore
 */
ServiceDefinitionCreateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ServiceDefinitionData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionCreateResponse.js.map