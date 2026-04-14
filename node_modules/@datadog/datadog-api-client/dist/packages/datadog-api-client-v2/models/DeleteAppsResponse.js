"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsResponse = void 0;
/**
 * The response object after multiple apps are successfully deleted.
 */
class DeleteAppsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsResponse.attributeTypeMap;
    }
}
exports.DeleteAppsResponse = DeleteAppsResponse;
/**
 * @ignore
 */
DeleteAppsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DeleteAppsResponseDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteAppsResponse.js.map