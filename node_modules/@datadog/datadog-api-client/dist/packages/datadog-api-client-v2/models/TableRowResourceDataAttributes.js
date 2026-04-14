"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRowResourceDataAttributes = void 0;
/**
 * Column values for this row in the reference table.
 */
class TableRowResourceDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableRowResourceDataAttributes.attributeTypeMap;
    }
}
exports.TableRowResourceDataAttributes = TableRowResourceDataAttributes;
/**
 * @ignore
 */
TableRowResourceDataAttributes.attributeTypeMap = {
    values: {
        baseName: "values",
        type: "any",
    },
};
//# sourceMappingURL=TableRowResourceDataAttributes.js.map