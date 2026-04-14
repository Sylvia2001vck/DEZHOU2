"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListAddItemsResponse = void 0;
/**
 * Response containing a list of added dashboards.
 */
class DashboardListAddItemsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListAddItemsResponse.attributeTypeMap;
    }
}
exports.DashboardListAddItemsResponse = DashboardListAddItemsResponse;
/**
 * @ignore
 */
DashboardListAddItemsResponse.attributeTypeMap = {
    addedDashboardsToList: {
        baseName: "added_dashboards_to_list",
        type: "Array<DashboardListItemResponse>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListAddItemsResponse.js.map