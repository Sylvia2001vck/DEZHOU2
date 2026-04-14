"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentRelationship = void 0;
/**
 * Information pointing to the app's publication status.
 */
class DeploymentRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentRelationship.attributeTypeMap;
    }
}
exports.DeploymentRelationship = DeploymentRelationship;
/**
 * @ignore
 */
DeploymentRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DeploymentRelationshipData",
    },
    meta: {
        baseName: "meta",
        type: "DeploymentMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentRelationship.js.map