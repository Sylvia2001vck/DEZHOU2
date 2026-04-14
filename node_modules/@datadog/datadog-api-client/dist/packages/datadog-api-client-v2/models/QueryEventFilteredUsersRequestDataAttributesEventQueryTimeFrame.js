"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame = void 0;
class QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame.attributeTypeMap;
    }
}
exports.QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame = QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame;
/**
 * @ignore
 */
QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "number",
        format: "int64",
    },
    start: {
        baseName: "start",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryEventFilteredUsersRequestDataAttributesEventQueryTimeFrame.js.map