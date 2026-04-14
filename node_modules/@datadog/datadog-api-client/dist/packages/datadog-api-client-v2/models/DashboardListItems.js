"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListItems = void 0;
/**
 * Dashboards within a list.
 */
class DashboardListItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListItems.attributeTypeMap;
    }
}
exports.DashboardListItems = DashboardListItems;
/**
 * @ignore
 */
DashboardListItems.attributeTypeMap = {
    dashboards: {
        baseName: "dashboards",
        type: "Array<DashboardListItem>",
        required: true,
    },
    total: {
        baseName: "total",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListItems.js.map