"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeatUserMeta = void 0;
class SeatUserMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SeatUserMeta.attributeTypeMap;
    }
}
exports.SeatUserMeta = SeatUserMeta;
/**
 * @ignore
 */
SeatUserMeta.attributeTypeMap = {
    cursor: {
        baseName: "cursor",
        type: "string",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    nextCursor: {
        baseName: "next_cursor",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SeatUserMeta.js.map