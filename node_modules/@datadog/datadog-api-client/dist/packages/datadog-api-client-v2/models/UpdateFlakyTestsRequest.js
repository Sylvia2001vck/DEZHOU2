"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlakyTestsRequest = void 0;
/**
 * Request to update the state of multiple flaky tests.
 */
class UpdateFlakyTestsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateFlakyTestsRequest.attributeTypeMap;
    }
}
exports.UpdateFlakyTestsRequest = UpdateFlakyTestsRequest;
/**
 * @ignore
 */
UpdateFlakyTestsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateFlakyTestsRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateFlakyTestsRequest.js.map