"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentUserAttributes = void 0;
/**
 * Attributes of user object returned by the API.
 */
class IncidentUserAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentUserAttributes.attributeTypeMap;
    }
}
exports.IncidentUserAttributes = IncidentUserAttributes;
/**
 * @ignore
 */
IncidentUserAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    icon: {
        baseName: "icon",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    uuid: {
        baseName: "uuid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentUserAttributes.js.map