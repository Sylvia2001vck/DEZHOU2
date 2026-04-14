"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVulnerableAssetsResponse = void 0;
/**
 * The expected response schema when listing vulnerable assets.
 */
class ListVulnerableAssetsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListVulnerableAssetsResponse.attributeTypeMap;
    }
}
exports.ListVulnerableAssetsResponse = ListVulnerableAssetsResponse;
/**
 * @ignore
 */
ListVulnerableAssetsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Asset>",
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
//# sourceMappingURL=ListVulnerableAssetsResponse.js.map