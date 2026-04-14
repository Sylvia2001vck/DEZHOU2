"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAppsRequest = void 0;
/**
 * A request object for deleting multiple apps by ID.
 */
class DeleteAppsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeleteAppsRequest.attributeTypeMap;
    }
}
exports.DeleteAppsRequest = DeleteAppsRequest;
/**
 * @ignore
 */
DeleteAppsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DeleteAppsRequestDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeleteAppsRequest.js.map