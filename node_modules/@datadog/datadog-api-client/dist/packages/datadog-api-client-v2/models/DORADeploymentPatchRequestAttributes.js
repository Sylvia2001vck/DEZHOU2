"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentPatchRequestAttributes = void 0;
/**
 * Attributes for patching a DORA deployment event.
 */
class DORADeploymentPatchRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentPatchRequestAttributes.attributeTypeMap;
    }
}
exports.DORADeploymentPatchRequestAttributes = DORADeploymentPatchRequestAttributes;
/**
 * @ignore
 */
DORADeploymentPatchRequestAttributes.attributeTypeMap = {
    changeFailure: {
        baseName: "change_failure",
        type: "boolean",
    },
    remediation: {
        baseName: "remediation",
        type: "DORADeploymentPatchRemediation",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentPatchRequestAttributes.js.map