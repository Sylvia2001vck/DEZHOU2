"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentsResponse = void 0;
/**
 * Response containing a paginated list of deployments.
 */
class FleetDeploymentsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentsResponse.attributeTypeMap;
    }
}
exports.FleetDeploymentsResponse = FleetDeploymentsResponse;
/**
 * @ignore
 */
FleetDeploymentsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<FleetDeployment>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "FleetDeploymentsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentsResponse.js.map