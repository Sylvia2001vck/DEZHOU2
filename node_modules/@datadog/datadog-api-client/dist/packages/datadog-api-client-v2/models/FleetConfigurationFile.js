"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetConfigurationFile = void 0;
/**
 * A configuration file for an integration.
 */
class FleetConfigurationFile {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetConfigurationFile.attributeTypeMap;
    }
}
exports.FleetConfigurationFile = FleetConfigurationFile;
/**
 * @ignore
 */
FleetConfigurationFile.attributeTypeMap = {
    fileContent: {
        baseName: "file_content",
        type: "string",
    },
    filePath: {
        baseName: "file_path",
        type: "string",
    },
    filename: {
        baseName: "filename",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetConfigurationFile.js.map