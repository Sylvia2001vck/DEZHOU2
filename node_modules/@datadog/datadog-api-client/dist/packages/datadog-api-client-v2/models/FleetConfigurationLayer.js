"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetConfigurationLayer = void 0;
/**
 * Configuration information organized by layers.
 */
class FleetConfigurationLayer {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetConfigurationLayer.attributeTypeMap;
    }
}
exports.FleetConfigurationLayer = FleetConfigurationLayer;
/**
 * @ignore
 */
FleetConfigurationLayer.attributeTypeMap = {
    compiledConfiguration: {
        baseName: "compiled_configuration",
        type: "string",
    },
    envConfiguration: {
        baseName: "env_configuration",
        type: "string",
    },
    fileConfiguration: {
        baseName: "file_configuration",
        type: "string",
    },
    parsedConfiguration: {
        baseName: "parsed_configuration",
        type: "string",
    },
    remoteConfiguration: {
        baseName: "remote_configuration",
        type: "string",
    },
    runtimeConfiguration: {
        baseName: "runtime_configuration",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetConfigurationLayer.js.map