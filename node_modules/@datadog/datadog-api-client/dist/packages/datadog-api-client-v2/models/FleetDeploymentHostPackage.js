"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentHostPackage = void 0;
/**
 * Package version information for a host, showing the initial version before deployment,
 * the target version to deploy, and the current version on the host.
 */
class FleetDeploymentHostPackage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentHostPackage.attributeTypeMap;
    }
}
exports.FleetDeploymentHostPackage = FleetDeploymentHostPackage;
/**
 * @ignore
 */
FleetDeploymentHostPackage.attributeTypeMap = {
    currentVersion: {
        baseName: "current_version",
        type: "string",
    },
    initialVersion: {
        baseName: "initial_version",
        type: "string",
    },
    packageName: {
        baseName: "package_name",
        type: "string",
    },
    targetVersion: {
        baseName: "target_version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentHostPackage.js.map