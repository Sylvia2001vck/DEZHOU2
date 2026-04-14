"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeploymentGateParams = void 0;
/**
 * Parameters for updating a deployment gate.
 */
class UpdateDeploymentGateParams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateDeploymentGateParams.attributeTypeMap;
    }
}
exports.UpdateDeploymentGateParams = UpdateDeploymentGateParams;
/**
 * @ignore
 */
UpdateDeploymentGateParams.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateDeploymentGateParamsData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateDeploymentGateParams.js.map