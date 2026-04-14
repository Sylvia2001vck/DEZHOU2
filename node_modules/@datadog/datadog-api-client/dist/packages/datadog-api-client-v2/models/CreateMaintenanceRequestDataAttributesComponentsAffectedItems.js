"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMaintenanceRequestDataAttributesComponentsAffectedItems = void 0;
class CreateMaintenanceRequestDataAttributesComponentsAffectedItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateMaintenanceRequestDataAttributesComponentsAffectedItems.attributeTypeMap;
    }
}
exports.CreateMaintenanceRequestDataAttributesComponentsAffectedItems = CreateMaintenanceRequestDataAttributesComponentsAffectedItems;
/**
 * @ignore
 */
CreateMaintenanceRequestDataAttributesComponentsAffectedItems.attributeTypeMap = {
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
//# sourceMappingURL=CreateMaintenanceRequestDataAttributesComponentsAffectedItems.js.map