"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListDeleteItemsRequest = void 0;
/**
 * Request containing a list of dashboards to delete.
 */
class DashboardListDeleteItemsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListDeleteItemsRequest.attributeTypeMap;
    }
}
exports.DashboardListDeleteItemsRequest = DashboardListDeleteItemsRequest;
/**
 * @ignore
 */
DashboardListDeleteItemsRequest.attributeTypeMap = {
    dashboards: {
        baseName: "dashboards",
        type: "Array<DashboardListItemRequest>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListDeleteItemsRequest.js.map