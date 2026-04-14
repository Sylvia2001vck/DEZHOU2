"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchMaintenanceRequestDataAttributesComponentsAffectedItems = void 0;
class PatchMaintenanceRequestDataAttributesComponentsAffectedItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchMaintenanceRequestDataAttributesComponentsAffectedItems.attributeTypeMap;
    }
}
exports.PatchMaintenanceRequestDataAttributesComponentsAffectedItems = PatchMaintenanceRequestDataAttributesComponentsAffectedItems;
/**
 * @ignore
 */
PatchMaintenanceRequestDataAttributesComponentsAffectedItems.attributeTypeMap = {
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
//# sourceMappingURL=PatchMaintenanceRequestDataAttributesComponentsAffectedItems.js.map