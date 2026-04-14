"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataAttributesUpdatesItemsComponentsAffectedItems = void 0;
class DegradationDataAttributesUpdatesItemsComponentsAffectedItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataAttributesUpdatesItemsComponentsAffectedItems.attributeTypeMap;
    }
}
exports.DegradationDataAttributesUpdatesItemsComponentsAffectedItems = DegradationDataAttributesUpdatesItemsComponentsAffectedItems;
/**
 * @ignore
 */
DegradationDataAttributesUpdatesItemsComponentsAffectedItems.attributeTypeMap = {
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
        type: "StatusPagesComponentDataAttributesStatus",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DegradationDataAttributesUpdatesItemsComponentsAffectedItems.js.map