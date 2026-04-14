"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionGetResponse = void 0;
/**
 * Get service definition response.
 */
class ServiceDefinitionGetResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionGetResponse.attributeTypeMap;
    }
}
exports.ServiceDefinitionGetResponse = ServiceDefinitionGetResponse;
/**
 * @ignore
 */
ServiceDefinitionGetResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ServiceDefinitionData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionGetResponse.js.map