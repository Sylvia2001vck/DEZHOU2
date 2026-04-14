"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemCellDefinition = void 0;
/**
 * Definition of a postmortem cell
 */
class PostmortemCellDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemCellDefinition.attributeTypeMap;
    }
}
exports.PostmortemCellDefinition = PostmortemCellDefinition;
/**
 * @ignore
 */
PostmortemCellDefinition.attributeTypeMap = {
    content: {
        baseName: "content",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemCellDefinition.js.map