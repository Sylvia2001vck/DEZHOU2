"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV1Org = void 0;
/**
 * Org related information about the service.
 */
class ServiceDefinitionV1Org {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV1Org.attributeTypeMap;
    }
}
exports.ServiceDefinitionV1Org = ServiceDefinitionV1Org;
/**
 * @ignore
 */
ServiceDefinitionV1Org.attributeTypeMap = {
    application: {
        baseName: "application",
        type: "string",
    },
    team: {
        baseName: "team",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV1Org.js.map