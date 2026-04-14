"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAggregateRequest = void 0;
/**
 * The object sent with the request to retrieve a list of aggregated spans from your organization.
 */
class SpansAggregateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAggregateRequest.attributeTypeMap;
    }
}
exports.SpansAggregateRequest = SpansAggregateRequest;
/**
 * @ignore
 */
SpansAggregateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SpansAggregateData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansAggregateRequest.js.map