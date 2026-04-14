"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionsListResponse = void 0;
/**
 * Create service definitions response.
 */
class ServiceDefinitionsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionsListResponse.attributeTypeMap;
    }
}
exports.ServiceDefinitionsListResponse = ServiceDefinitionsListResponse;
/**
 * @ignore
 */
ServiceDefinitionsListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ServiceDefinitionData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionsListResponse.js.map