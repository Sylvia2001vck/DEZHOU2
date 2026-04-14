"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDataAttributesComponentsAffectedItems = void 0;
class MaintenanceDataAttributesComponentsAffectedItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceDataAttributesComponentsAffectedItems.attributeTypeMap;
    }
}
exports.MaintenanceDataAttributesComponentsAffectedItems = MaintenanceDataAttributesComponentsAffectedItems;
/**
 * @ignore
 */
MaintenanceDataAttributesComponentsAffectedItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MaintenanceDataAttributesComponentsAffectedItems.js.map