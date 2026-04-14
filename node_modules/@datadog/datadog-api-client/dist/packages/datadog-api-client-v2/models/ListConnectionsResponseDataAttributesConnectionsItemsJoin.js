"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListConnectionsResponseDataAttributesConnectionsItemsJoin = void 0;
class ListConnectionsResponseDataAttributesConnectionsItemsJoin {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListConnectionsResponseDataAttributesConnectionsItemsJoin.attributeTypeMap;
    }
}
exports.ListConnectionsResponseDataAttributesConnectionsItemsJoin = ListConnectionsResponseDataAttributesConnectionsItemsJoin;
/**
 * @ignore
 */
ListConnectionsResponseDataAttributesConnectionsItemsJoin.attributeTypeMap = {
    attribute: {
        baseName: "attribute",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListConnectionsResponseDataAttributesConnectionsItemsJoin.js.map