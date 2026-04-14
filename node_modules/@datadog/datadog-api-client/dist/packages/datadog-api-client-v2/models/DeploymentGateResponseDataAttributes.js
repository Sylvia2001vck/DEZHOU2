"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentGateResponseDataAttributes = void 0;
/**
 * Basic information about a deployment gate.
 */
class DeploymentGateResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentGateResponseDataAttributes.attributeTypeMap;
    }
}
exports.DeploymentGateResponseDataAttributes = DeploymentGateResponseDataAttributes;
/**
 * @ignore
 */
DeploymentGateResponseDataAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "DeploymentGateResponseDataAttributesCreatedBy",
        required: true,
    },
    dryRun: {
        baseName: "dry_run",
        type: "boolean",
        required: true,
    },
    env: {
        baseName: "env",
        type: "string",
        required: true,
    },
    identifier: {
        baseName: "identifier",
        type: "string",
        required: true,
    },
    service: {
        baseName: "service",
        type: "string",
        required: true,
    },
    updatedAt: {
        baseName: "updated_at",
        type: "Date",
        format: "date-time",
    },
    updatedBy: {
        baseName: "updated_by",
        type: "DeploymentGateResponseDataAttributesUpdatedBy",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentGateResponseDataAttributes.js.map