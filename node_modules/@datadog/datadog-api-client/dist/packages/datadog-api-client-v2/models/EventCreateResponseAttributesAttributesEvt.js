"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventCreateResponseAttributesAttributesEvt = void 0;
/**
 * JSON object of event system attributes.
 */
class EventCreateResponseAttributesAttributesEvt {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventCreateResponseAttributesAttributesEvt.attributeTypeMap;
    }
}
exports.EventCreateResponseAttributesAttributesEvt = EventCreateResponseAttributesAttributesEvt;
/**
 * @ignore
 */
EventCreateResponseAttributesAttributesEvt.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    uid: {
        baseName: "uid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventCreateResponseAttributesAttributesEvt.js.map