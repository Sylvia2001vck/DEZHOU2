"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAPIsResponse = void 0;
/**
 * Response for `ListAPIs`.
 */
class ListAPIsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAPIsResponse.attributeTypeMap;
    }
}
exports.ListAPIsResponse = ListAPIsResponse;
/**
 * @ignore
 */
ListAPIsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ListAPIsResponseData>",
    },
    meta: {
        baseName: "meta",
        type: "ListAPIsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAPIsResponse.js.map