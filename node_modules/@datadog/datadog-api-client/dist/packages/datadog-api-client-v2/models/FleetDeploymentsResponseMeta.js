"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentsResponseMeta = void 0;
/**
 * Metadata for the list of deployments, including pagination information.
 */
class FleetDeploymentsResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentsResponseMeta.attributeTypeMap;
    }
}
exports.FleetDeploymentsResponseMeta = FleetDeploymentsResponseMeta;
/**
 * @ignore
 */
FleetDeploymentsResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "FleetDeploymentsPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentsResponseMeta.js.map