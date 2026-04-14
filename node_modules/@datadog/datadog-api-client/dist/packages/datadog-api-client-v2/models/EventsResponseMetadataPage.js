"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsResponseMetadataPage = void 0;
/**
 * Pagination attributes.
 */
class EventsResponseMetadataPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsResponseMetadataPage.attributeTypeMap;
    }
}
exports.EventsResponseMetadataPage = EventsResponseMetadataPage;
/**
 * @ignore
 */
EventsResponseMetadataPage.attributeTypeMap = {
    after: {
        baseName: "after",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsResponseMetadataPage.js.map