"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutcomesResponse = void 0;
/**
 * Scorecard outcomes - the result of a rule for a service.
 */
class OutcomesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OutcomesResponse.attributeTypeMap;
    }
}
exports.OutcomesResponse = OutcomesResponse;
/**
 * @ignore
 */
OutcomesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<OutcomesResponseDataItem>",
    },
    included: {
        baseName: "included",
        type: "Array<OutcomesResponseIncludedItem>",
    },
    links: {
        baseName: "links",
        type: "OutcomesResponseLinks",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OutcomesResponse.js.map