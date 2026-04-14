"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMEventsResponse = void 0;
/**
 * Response object with all events matching the request and pagination information.
 */
class RUMEventsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMEventsResponse.attributeTypeMap;
    }
}
exports.RUMEventsResponse = RUMEventsResponse;
/**
 * @ignore
 */
RUMEventsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RUMEvent>",
    },
    links: {
        baseName: "links",
        type: "RUMResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "RUMResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMEventsResponse.js.map