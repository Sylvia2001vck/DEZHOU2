"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentPackageUpgradeCreateRequest = void 0;
/**
 * Request payload for creating a new package upgrade deployment.
 */
class FleetDeploymentPackageUpgradeCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentPackageUpgradeCreateRequest.attributeTypeMap;
    }
}
exports.FleetDeploymentPackageUpgradeCreateRequest = FleetDeploymentPackageUpgradeCreateRequest;
/**
 * @ignore
 */
FleetDeploymentPackageUpgradeCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FleetDeploymentPackageUpgradeCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentPackageUpgradeCreateRequest.js.map