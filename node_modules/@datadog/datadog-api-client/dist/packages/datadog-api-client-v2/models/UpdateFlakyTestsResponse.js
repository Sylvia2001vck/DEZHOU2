"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlakyTestsResponse = void 0;
/**
 * Response object for updating flaky test states.
 */
class UpdateFlakyTestsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateFlakyTestsResponse.attributeTypeMap;
    }
}
exports.UpdateFlakyTestsResponse = UpdateFlakyTestsResponse;
/**
 * @ignore
 */
UpdateFlakyTestsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateFlakyTestsResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateFlakyTestsResponse.js.map