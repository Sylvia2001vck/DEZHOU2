"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems = void 0;
class MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems.attributeTypeMap;
    }
}
exports.MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems = MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems;
/**
 * @ignore
 */
MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems.attributeTypeMap = {
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
//# sourceMappingURL=MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems.js.map