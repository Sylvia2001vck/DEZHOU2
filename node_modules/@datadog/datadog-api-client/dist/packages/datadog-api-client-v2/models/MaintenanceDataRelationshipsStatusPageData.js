"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDataRelationshipsStatusPageData = void 0;
class MaintenanceDataRelationshipsStatusPageData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceDataRelationshipsStatusPageData.attributeTypeMap;
    }
}
exports.MaintenanceDataRelationshipsStatusPageData = MaintenanceDataRelationshipsStatusPageData;
/**
 * @ignore
 */
MaintenanceDataRelationshipsStatusPageData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    type: {
        baseName: "type",
        type: "StatusPageDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MaintenanceDataRelationshipsStatusPageData.js.map