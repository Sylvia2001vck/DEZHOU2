"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboundEdge = void 0;
/**
 * The definition of `OutboundEdge` object.
 */
class OutboundEdge {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutboundEdge.attributeTypeMap;
    }
}
exports.OutboundEdge = OutboundEdge;
/**
 * @ignore
 */
OutboundEdge.attributeTypeMap = {
    branchName: {
        baseName: "branchName",
        type: "string",
        required: true,
    },
    nextStepName: {
        baseName: "nextStepName",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutboundEdge.js.map