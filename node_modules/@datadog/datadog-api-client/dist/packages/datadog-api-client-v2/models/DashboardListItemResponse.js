"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListItemResponse = void 0;
/**
 * A dashboard within a list.
 */
class DashboardListItemResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListItemResponse.attributeTypeMap;
    }
}
exports.DashboardListItemResponse = DashboardListItemResponse;
/**
 * @ignore
 */
DashboardListItemResponse.attributeTypeMap = {
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
//# sourceMappingURL=DashboardListItemResponse.js.map