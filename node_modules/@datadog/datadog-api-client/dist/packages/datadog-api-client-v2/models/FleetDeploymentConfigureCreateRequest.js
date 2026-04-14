"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentConfigureCreateRequest = void 0;
/**
 * Request payload for creating a new configuration deployment.
 */
class FleetDeploymentConfigureCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentConfigureCreateRequest.attributeTypeMap;
    }
}
exports.FleetDeploymentConfigureCreateRequest = FleetDeploymentConfigureCreateRequest;
/**
 * @ignore
 */
FleetDeploymentConfigureCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FleetDeploymentConfigureCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentConfigureCreateRequest.js.map