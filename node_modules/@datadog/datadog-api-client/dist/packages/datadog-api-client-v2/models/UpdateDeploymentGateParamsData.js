"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeploymentGateParamsData = void 0;
/**
 * Parameters for updating a deployment gate.
 */
class UpdateDeploymentGateParamsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateDeploymentGateParamsData.attributeTypeMap;
    }
}
exports.UpdateDeploymentGateParamsData = UpdateDeploymentGateParamsData;
/**
 * @ignore
 */
UpdateDeploymentGateParamsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateDeploymentGateParamsDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DeploymentGateDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateDeploymentGateParamsData.js.map