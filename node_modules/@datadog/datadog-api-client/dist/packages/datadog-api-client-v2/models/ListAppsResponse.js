"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppsResponse = void 0;
/**
 * A paginated list of apps matching the specified filters and sorting.
 */
class ListAppsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAppsResponse.attributeTypeMap;
    }
}
exports.ListAppsResponse = ListAppsResponse;
/**
 * @ignore
 */
ListAppsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ListAppsResponseDataItems>",
    },
    included: {
        baseName: "included",
        type: "Array<Deployment>",
    },
    meta: {
        baseName: "meta",
        type: "ListAppsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAppsResponse.js.map