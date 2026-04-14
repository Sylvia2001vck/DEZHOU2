"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchMaintenanceRequest = void 0;
class PatchMaintenanceRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchMaintenanceRequest.attributeTypeMap;
    }
}
exports.PatchMaintenanceRequest = PatchMaintenanceRequest;
/**
 * @ignore
 */
PatchMaintenanceRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PatchMaintenanceRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchMaintenanceRequest.js.map