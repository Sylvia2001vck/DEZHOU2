"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationEntity = void 0;
/**
 * Relation entity reference.
 */
class RelationEntity {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationEntity.attributeTypeMap;
    }
}
exports.RelationEntity = RelationEntity;
/**
 * @ignore
 */
RelationEntity.attributeTypeMap = {
    kind: {
        baseName: "kind",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    namespace: {
        baseName: "namespace",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationEntity.js.map