"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentResponseMeta = void 0;
/**
 * Metadata for a single deployment response, including pagination information for hosts.
 */
class FleetDeploymentResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentResponseMeta.attributeTypeMap;
    }
}
exports.FleetDeploymentResponseMeta = FleetDeploymentResponseMeta;
/**
 * @ignore
 */
FleetDeploymentResponseMeta.attributeTypeMap = {
    hosts: {
        baseName: "hosts",
        type: "FleetDeploymentHostsPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentResponseMeta.js.map