"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAppResponse = void 0;
/**
 * The full app definition response object.
 */
class GetAppResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetAppResponse.attributeTypeMap;
    }
}
exports.GetAppResponse = GetAppResponse;
/**
 * @ignore
 */
GetAppResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GetAppResponseData",
    },
    included: {
        baseName: "included",
        type: "Array<Deployment>",
    },
    meta: {
        baseName: "meta",
        type: "AppMeta",
    },
    relationship: {
        baseName: "relationship",
        type: "AppRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetAppResponse.js.map