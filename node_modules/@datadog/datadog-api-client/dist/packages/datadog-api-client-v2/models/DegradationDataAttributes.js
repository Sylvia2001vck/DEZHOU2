"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataAttributes = void 0;
/**
 * The attributes of a degradation.
 */
class DegradationDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataAttributes.attributeTypeMap;
    }
}
exports.DegradationDataAttributes = DegradationDataAttributes;
/**
 * @ignore
 */
DegradationDataAttributes.attributeTypeMap = {
    componentsAffected: {
        baseName: "components_affected",
        type: "Array<DegradationDataAttributesComponentsAffectedItems>",
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
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    source: {
        baseName: "source",
        type: "DegradationDataAttributesSource",
    },
    status: {
        baseName: "status",
        type: "CreateDegradationRequestDataAttributesStatus",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    updates: {
        baseName: "updates",
        type: "Array<DegradationDataAttributesUpdatesItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DegradationDataAttributes.js.map