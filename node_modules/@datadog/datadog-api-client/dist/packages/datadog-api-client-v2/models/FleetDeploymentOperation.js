"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentOperation = void 0;
/**
 * A single configuration file operation to perform on the target hosts.
 */
class FleetDeploymentOperation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentOperation.attributeTypeMap;
    }
}
exports.FleetDeploymentOperation = FleetDeploymentOperation;
/**
 * @ignore
 */
FleetDeploymentOperation.attributeTypeMap = {
    fileOp: {
        baseName: "file_op",
        type: "FleetDeploymentFileOp",
        required: true,
    },
    filePath: {
        baseName: "file_path",
        type: "string",
        required: true,
    },
    patch: {
        baseName: "patch",
        type: "{ [key: string]: any; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentOperation.js.map