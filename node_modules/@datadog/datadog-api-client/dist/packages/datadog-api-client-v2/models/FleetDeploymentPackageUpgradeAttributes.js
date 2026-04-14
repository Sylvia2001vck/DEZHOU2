"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentPackageUpgradeAttributes = void 0;
/**
 * Attributes for creating a new package upgrade deployment.
 */
class FleetDeploymentPackageUpgradeAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentPackageUpgradeAttributes.attributeTypeMap;
    }
}
exports.FleetDeploymentPackageUpgradeAttributes = FleetDeploymentPackageUpgradeAttributes;
/**
 * @ignore
 */
FleetDeploymentPackageUpgradeAttributes.attributeTypeMap = {
    filterQuery: {
        baseName: "filter_query",
        type: "string",
    },
    targetPackages: {
        baseName: "target_packages",
        type: "Array<FleetDeploymentPackage>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentPackageUpgradeAttributes.js.map