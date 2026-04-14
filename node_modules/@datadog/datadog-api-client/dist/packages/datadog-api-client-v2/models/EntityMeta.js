"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMeta = void 0;
/**
 * Entity metadata.
 */
class EntityMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityMeta.attributeTypeMap;
    }
}
exports.EntityMeta = EntityMeta;
/**
 * @ignore
 */
EntityMeta.attributeTypeMap = {
    createdAt: {
        baseName: "createdAt",
        type: "string",
    },
    ingestionSource: {
        baseName: "ingestionSource",
        type: "string",
    },
    modifiedAt: {
        baseName: "modifiedAt",
        type: "string",
    },
    origin: {
        baseName: "origin",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EntityMeta.js.map