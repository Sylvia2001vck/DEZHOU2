"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMSearchEventsRequest = void 0;
/**
 * The request for a RUM events list.
 */
class RUMSearchEventsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMSearchEventsRequest.attributeTypeMap;
    }
}
exports.RUMSearchEventsRequest = RUMSearchEventsRequest;
/**
 * @ignore
 */
RUMSearchEventsRequest.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "RUMQueryFilter",
    },
    options: {
        baseName: "options",
        type: "RUMQueryOptions",
    },
    page: {
        baseName: "page",
        type: "RUMQueryPageOptions",
    },
    sort: {
        baseName: "sort",
        type: "RUMSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMSearchEventsRequest.js.map