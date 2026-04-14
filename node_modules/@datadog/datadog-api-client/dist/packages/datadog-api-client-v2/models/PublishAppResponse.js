"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishAppResponse = void 0;
/**
 * The response object after an app is successfully published.
 */
class PublishAppResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PublishAppResponse.attributeTypeMap;
    }
}
exports.PublishAppResponse = PublishAppResponse;
/**
 * @ignore
 */
PublishAppResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Deployment",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PublishAppResponse.js.map