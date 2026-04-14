"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deployment = void 0;
/**
 * The version of the app that was published.
 */
class Deployment {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Deployment.attributeTypeMap;
    }
}
exports.Deployment = Deployment;
/**
 * @ignore
 */
Deployment.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeploymentAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    meta: {
        baseName: "meta",
        type: "DeploymentMetadata",
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
//# sourceMappingURL=Deployment.js.map