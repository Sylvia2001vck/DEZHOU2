"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListUpdateItemsResponse = void 0;
/**
 * Response containing a list of updated dashboards.
 */
class DashboardListUpdateItemsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListUpdateItemsResponse.attributeTypeMap;
    }
}
exports.DashboardListUpdateItemsResponse = DashboardListUpdateItemsResponse;
/**
 * @ignore
 */
DashboardListUpdateItemsResponse.attributeTypeMap = {
    dashboards: {
        baseName: "dashboards",
        type: "Array<DashboardListItemResponse>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListUpdateItemsResponse.js.map