"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppResponse = void 0;
/**
 * The response object after an app is successfully deleted.
 */
class DeleteAppResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppResponse.attributeTypeMap;
    }
}
exports.DeleteAppResponse = DeleteAppResponse;
/**
 * @ignore
 */
DeleteAppResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DeleteAppResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteAppResponse.js.map