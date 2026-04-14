"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentConfigureCreate = void 0;
/**
 * Data for creating a new configuration deployment.
 */
class FleetDeploymentConfigureCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentConfigureCreate.attributeTypeMap;
    }
}
exports.FleetDeploymentConfigureCreate = FleetDeploymentConfigureCreate;
/**
 * @ignore
 */
FleetDeploymentConfigureCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetDeploymentConfigureAttributes",
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
//# sourceMappingURL=FleetDeploymentConfigureCreate.js.map