"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAppResponse = void 0;
/**
 * The response object after an app is successfully updated.
 */
class UpdateAppResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateAppResponse.attributeTypeMap;
    }
}
exports.UpdateAppResponse = UpdateAppResponse;
/**
 * @ignore
 */
UpdateAppResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateAppResponseData",
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
//# sourceMappingURL=UpdateAppResponse.js.map