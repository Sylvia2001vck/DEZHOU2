"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListAddItemsRequest = void 0;
/**
 * Request containing a list of dashboards to add.
 */
class DashboardListAddItemsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListAddItemsRequest.attributeTypeMap;
    }
}
exports.DashboardListAddItemsRequest = DashboardListAddItemsRequest;
/**
 * @ignore
 */
DashboardListAddItemsRequest.attributeTypeMap = {
    dashboards: {
        baseName: "dashboards",
        type: "Array<DashboardListItemRequest>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListAddItemsRequest.js.map