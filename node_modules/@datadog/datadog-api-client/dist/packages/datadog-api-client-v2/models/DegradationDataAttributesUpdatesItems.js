"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataAttributesUpdatesItems = void 0;
class DegradationDataAttributesUpdatesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataAttributesUpdatesItems.attributeTypeMap;
    }
}
exports.DegradationDataAttributesUpdatesItems = DegradationDataAttributesUpdatesItems;
/**
 * @ignore
 */
DegradationDataAttributesUpdatesItems.attributeTypeMap = {
    componentsAffected: {
        baseName: "components_affected",
        type: "Array<DegradationDataAttributesUpdatesItemsComponentsAffectedItems>",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    startedAt: {
        baseName: "started_at",
        type: "Date",
        format: "date-time",
    },
    status: {
        baseName: "status",
        type: "CreateDegradationRequestDataAttributesStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DegradationDataAttributesUpdatesItems.js.map