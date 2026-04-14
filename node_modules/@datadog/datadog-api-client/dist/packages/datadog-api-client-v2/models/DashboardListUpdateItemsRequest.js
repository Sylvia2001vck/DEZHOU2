"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListUpdateItemsRequest = void 0;
/**
 * Request containing the list of dashboards to update to.
 */
class DashboardListUpdateItemsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListUpdateItemsRequest.attributeTypeMap;
    }
}
exports.DashboardListUpdateItemsRequest = DashboardListUpdateItemsRequest;
/**
 * @ignore
 */
DashboardListUpdateItemsRequest.attributeTypeMap = {
    dashboards: {
        baseName: "dashboards",
        type: "Array<DashboardListItemRequest>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListUpdateItemsRequest.js.map