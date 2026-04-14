"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFindingsResponse = void 0;
/**
 * The expected response schema when listing findings.
 */
class ListFindingsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListFindingsResponse.attributeTypeMap;
    }
}
exports.ListFindingsResponse = ListFindingsResponse;
/**
 * @ignore
 */
ListFindingsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Finding>",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "ListFindingsMeta",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListFindingsResponse.js.map