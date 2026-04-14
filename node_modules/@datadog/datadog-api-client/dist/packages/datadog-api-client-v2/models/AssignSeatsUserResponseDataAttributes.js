"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignSeatsUserResponseDataAttributes = void 0;
class AssignSeatsUserResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AssignSeatsUserResponseDataAttributes.attributeTypeMap;
    }
}
exports.AssignSeatsUserResponseDataAttributes = AssignSeatsUserResponseDataAttributes;
/**
 * @ignore
 */
AssignSeatsUserResponseDataAttributes.attributeTypeMap = {
    assignedIds: {
        baseName: "assigned_ids",
        type: "Array<string>",
    },
    productCode: {
        baseName: "product_code",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AssignSeatsUserResponseDataAttributes.js.map