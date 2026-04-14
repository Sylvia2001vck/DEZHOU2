"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVulnerabilitiesResponse = void 0;
/**
 * The expected response schema when listing vulnerabilities.
 */
class ListVulnerabilitiesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListVulnerabilitiesResponse.attributeTypeMap;
    }
}
exports.ListVulnerabilitiesResponse = ListVulnerabilitiesResponse;
/**
 * @ignore
 */
ListVulnerabilitiesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Vulnerability>",
        required: true,
    },
    links: {
        baseName: "links",
        type: "Links",
    },
    meta: {
        baseName: "meta",
        type: "Metadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListVulnerabilitiesResponse.js.map