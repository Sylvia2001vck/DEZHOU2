"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentHost = void 0;
/**
 * A host that is part of a deployment with its current status.
 */
class FleetDeploymentHost {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentHost.attributeTypeMap;
    }
}
exports.FleetDeploymentHost = FleetDeploymentHost;
/**
 * @ignore
 */
FleetDeploymentHost.attributeTypeMap = {
    error: {
        baseName: "error",
        type: "string",
    },
    hostname: {
        baseName: "hostname",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    versions: {
        baseName: "versions",
        type: "Array<FleetDeploymentHostPackage>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentHost.js.map