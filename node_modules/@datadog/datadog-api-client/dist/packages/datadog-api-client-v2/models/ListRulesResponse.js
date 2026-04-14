"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRulesResponse = void 0;
/**
 * Scorecard rules response.
 */
class ListRulesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListRulesResponse.attributeTypeMap;
    }
}
exports.ListRulesResponse = ListRulesResponse;
/**
 * @ignore
 */
ListRulesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ListRulesResponseDataItem>",
    },
    links: {
        baseName: "links",
        type: "ListRulesResponseLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListRulesResponse.js.map