"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaRequestDataAttributesRelationsItems = void 0;
class ScaRequestDataAttributesRelationsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScaRequestDataAttributesRelationsItems.attributeTypeMap;
    }
}
exports.ScaRequestDataAttributesRelationsItems = ScaRequestDataAttributesRelationsItems;
/**
 * @ignore
 */
ScaRequestDataAttributesRelationsItems.attributeTypeMap = {
    dependsOn: {
        baseName: "depends_on",
        type: "Array<string>",
    },
    ref: {
        baseName: "ref",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScaRequestDataAttributesRelationsItems.js.map