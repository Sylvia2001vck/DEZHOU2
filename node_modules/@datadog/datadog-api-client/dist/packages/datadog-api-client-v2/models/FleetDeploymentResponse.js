"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentResponse = void 0;
/**
 * Response containing a single deployment.
 */
class FleetDeploymentResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentResponse.attributeTypeMap;
    }
}
exports.FleetDeploymentResponse = FleetDeploymentResponse;
/**
 * @ignore
 */
FleetDeploymentResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FleetDeployment",
    },
    meta: {
        baseName: "meta",
        type: "FleetDeploymentResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentResponse.js.map