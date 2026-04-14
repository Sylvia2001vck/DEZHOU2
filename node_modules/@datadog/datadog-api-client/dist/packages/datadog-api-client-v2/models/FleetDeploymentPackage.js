"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetDeploymentPackage = void 0;
/**
 * A package and its target version for deployment.
 */
class FleetDeploymentPackage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetDeploymentPackage.attributeTypeMap;
    }
}
exports.FleetDeploymentPackage = FleetDeploymentPackage;
/**
 * @ignore
 */
FleetDeploymentPackage.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    version: {
        baseName: "version",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetDeploymentPackage.js.map