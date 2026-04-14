"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListItemRequest = void 0;
/**
 * A dashboard within a list.
 */
class DashboardListItemRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListItemRequest.attributeTypeMap;
    }
}
exports.DashboardListItemRequest = DashboardListItemRequest;
/**
 * @ignore
 */
DashboardListItemRequest.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DashboardType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListItemRequest.js.map