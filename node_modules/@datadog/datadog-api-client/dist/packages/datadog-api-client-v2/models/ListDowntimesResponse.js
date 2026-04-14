"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDowntimesResponse = void 0;
/**
 * Response for retrieving all downtimes.
 */
class ListDowntimesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListDowntimesResponse.attributeTypeMap;
    }
}
exports.ListDowntimesResponse = ListDowntimesResponse;
/**
 * @ignore
 */
ListDowntimesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DowntimeResponseData>",
    },
    included: {
        baseName: "included",
        type: "Array<DowntimeResponseIncludedItem>",
    },
    meta: {
        baseName: "meta",
        type: "DowntimeMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListDowntimesResponse.js.map