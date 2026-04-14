"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentRelationshipData = void 0;
/**
 * Data object containing the deployment ID.
 */
class DeploymentRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentRelationshipData.attributeTypeMap;
    }
}
exports.DeploymentRelationshipData = DeploymentRelationshipData;
/**
 * @ignore
 */
DeploymentRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "AppDeploymentType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentRelationshipData.js.map