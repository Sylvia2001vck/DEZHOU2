"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentPackageUpgradeCreate = void 0;
/**
 * Data for creating a new package upgrade deployment.
 */
class FleetDeploymentPackageUpgradeCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentPackageUpgradeCreate.attributeTypeMap;
    }
}
exports.FleetDeploymentPackageUpgradeCreate = FleetDeploymentPackageUpgradeCreate;
/**
 * @ignore
 */
FleetDeploymentPackageUpgradeCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetDeploymentPackageUpgradeAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FleetDeploymentResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentPackageUpgradeCreate.js.map