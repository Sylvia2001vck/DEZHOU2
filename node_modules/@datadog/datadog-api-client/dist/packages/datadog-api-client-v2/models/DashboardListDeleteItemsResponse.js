"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListDeleteItemsResponse = void 0;
/**
 * Response containing a list of deleted dashboards.
 */
class DashboardListDeleteItemsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListDeleteItemsResponse.attributeTypeMap;
    }
}
exports.DashboardListDeleteItemsResponse = DashboardListDeleteItemsResponse;
/**
 * @ignore
 */
DashboardListDeleteItemsResponse.attributeTypeMap = {
    deletedDashboardsFromList: {
        baseName: "deleted_dashboards_from_list",
        type: "Array<DashboardListItemResponse>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListDeleteItemsResponse.js.map