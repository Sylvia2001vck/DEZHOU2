"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetIntegrationDetails = void 0;
/**
 * Detailed information about a single integration.
 */
class FleetIntegrationDetails {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetIntegrationDetails.attributeTypeMap;
    }
}
exports.FleetIntegrationDetails = FleetIntegrationDetails;
/**
 * @ignore
 */
FleetIntegrationDetails.attributeTypeMap = {
    dataType: {
        baseName: "data_type",
        type: "string",
    },
    errorMessages: {
        baseName: "error_messages",
        type: "Array<string>",
    },
    initConfig: {
        baseName: "init_config",
        type: "string",
    },
    instanceConfig: {
        baseName: "instance_config",
        type: "string",
    },
    isCustomCheck: {
        baseName: "is_custom_check",
        type: "boolean",
    },
    logConfig: {
        baseName: "log_config",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    sourceIndex: {
        baseName: "source_index",
        type: "number",
        format: "int64",
    },
    sourcePath: {
        baseName: "source_path",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetIntegrationDetails.js.map