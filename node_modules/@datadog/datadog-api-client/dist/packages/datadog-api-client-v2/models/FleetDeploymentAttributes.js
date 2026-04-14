"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentAttributes = void 0;
/**
 * Attributes of a deployment in the response.
 */
class FleetDeploymentAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentAttributes.attributeTypeMap;
    }
}
exports.FleetDeploymentAttributes = FleetDeploymentAttributes;
/**
 * @ignore
 */
FleetDeploymentAttributes.attributeTypeMap = {
    configOperations: {
        baseName: "config_operations",
        type: "Array<FleetDeploymentOperation>",
    },
    estimatedEndTimeUnix: {
        baseName: "estimated_end_time_unix",
        type: "number",
        format: "int64",
    },
    filterQuery: {
        baseName: "filter_query",
        type: "string",
    },
    highLevelStatus: {
        baseName: "high_level_status",
        type: "string",
    },
    hosts: {
        baseName: "hosts",
        type: "Array<FleetDeploymentHost>",
    },
    packages: {
        baseName: "packages",
        type: "Array<FleetDeploymentPackage>",
    },
    totalHosts: {
        baseName: "total_hosts",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentAttributes.js.map