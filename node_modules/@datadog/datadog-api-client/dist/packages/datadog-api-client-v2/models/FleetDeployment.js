"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeployment = void 0;
/**
 * A deployment that defines automated configuration changes for a fleet of hosts.
 */
class FleetDeployment {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeployment.attributeTypeMap;
    }
}
exports.FleetDeployment = FleetDeployment;
/**
 * @ignore
 */
FleetDeployment.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetDeploymentAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=FleetDeployment.js.map