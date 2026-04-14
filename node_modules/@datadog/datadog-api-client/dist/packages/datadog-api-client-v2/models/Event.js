"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
/**
 * The metadata associated with a request.
 */
class Event {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
}
exports.Event = Event;
/**
 * @ignore
 */
Event.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    sourceId: {
        baseName: "source_id",
        type: "number",
        format: "int64",
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
//# sourceMappingURL=Event.js.map