"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentConfigureAttributes = void 0;
/**
 * Attributes for creating a new configuration deployment.
 */
class FleetDeploymentConfigureAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentConfigureAttributes.attributeTypeMap;
    }
}
exports.FleetDeploymentConfigureAttributes = FleetDeploymentConfigureAttributes;
/**
 * @ignore
 */
FleetDeploymentConfigureAttributes.attributeTypeMap = {
    configOperations: {
        baseName: "config_operations",
        type: "Array<FleetDeploymentOperation>",
        required: true,
    },
    filterQuery: {
        baseName: "filter_query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentConfigureAttributes.js.map