"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KindObj = void 0;
/**
 * Schema for kind.
 */
class KindObj {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return KindObj.attributeTypeMap;
    }
}
exports.KindObj = KindObj;
/**
 * @ignore
 */
KindObj.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "displayName",
        type: "string",
    },
    kind: {
        baseName: "kind",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=KindObj.js.map