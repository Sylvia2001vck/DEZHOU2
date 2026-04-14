"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnpublishAppResponse = void 0;
/**
 * The response object after an app is successfully unpublished.
 */
class UnpublishAppResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UnpublishAppResponse.attributeTypeMap;
    }
}
exports.UnpublishAppResponse = UnpublishAppResponse;
/**
 * @ignore
 */
UnpublishAppResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Deployment",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UnpublishAppResponse.js.map