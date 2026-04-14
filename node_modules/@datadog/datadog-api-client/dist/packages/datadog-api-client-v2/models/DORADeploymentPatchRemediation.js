"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentPatchRemediation = void 0;
/**
 * Remediation details for the deployment. Optional, but required to calculate failed deployment recovery time.
 */
class DORADeploymentPatchRemediation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentPatchRemediation.attributeTypeMap;
    }
}
exports.DORADeploymentPatchRemediation = DORADeploymentPatchRemediation;
/**
 * @ignore
 */
DORADeploymentPatchRemediation.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DORADeploymentPatchRemediationType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentPatchRemediation.js.map