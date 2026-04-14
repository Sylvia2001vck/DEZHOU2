"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuiteCreateEditRequest = void 0;
class SuiteCreateEditRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SuiteCreateEditRequest.attributeTypeMap;
    }
}
exports.SuiteCreateEditRequest = SuiteCreateEditRequest;
/**
 * @ignore
 */
SuiteCreateEditRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SuiteCreateEdit",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SuiteCreateEditRequest.js.map