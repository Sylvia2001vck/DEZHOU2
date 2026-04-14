"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceData = void 0;
class MaintenanceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceData.attributeTypeMap;
    }
}
exports.MaintenanceData = MaintenanceData;
/**
 * @ignore
 */
MaintenanceData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MaintenanceDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "MaintenanceDataRelationships",
    },
    type: {
        baseName: "type",
        type: "PatchMaintenanceRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MaintenanceData.js.map