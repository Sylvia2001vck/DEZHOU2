"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateResponsePayloadLinks = void 0;
/**
 * Links to the event.
 */
class EventCreateResponsePayloadLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateResponsePayloadLinks.attributeTypeMap;
    }
}
exports.EventCreateResponsePayloadLinks = EventCreateResponsePayloadLinks;
/**
 * @ignore
 */
EventCreateResponsePayloadLinks.attributeTypeMap = {
    self: {
        baseName: "self",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateResponsePayloadLinks.js.map