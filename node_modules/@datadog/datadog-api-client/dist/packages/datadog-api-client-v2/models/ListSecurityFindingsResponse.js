"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSecurityFindingsResponse = void 0;
/**
 * The expected response schema when listing security findings.
 */
class ListSecurityFindingsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListSecurityFindingsResponse.attributeTypeMap;
    }
}
exports.ListSecurityFindingsResponse = ListSecurityFindingsResponse;
/**
 * @ignore
 */
ListSecurityFindingsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityFindingsData>",
    },
    links: {
        baseName: "links",
        type: "SecurityFindingsLinks",
    },
    meta: {
        baseName: "meta",
        type: "SecurityFindingsMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListSecurityFindingsResponse.js.map