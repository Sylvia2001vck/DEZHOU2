"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DegradationDataAttributesComponentsAffectedItems = void 0;
class DegradationDataAttributesComponentsAffectedItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DegradationDataAttributesComponentsAffectedItems.attributeTypeMap;
    }
}
exports.DegradationDataAttributesComponentsAffectedItems = DegradationDataAttributesComponentsAffectedItems;
/**
 * @ignore
 */
DegradationDataAttributesComponentsAffectedItems.attributeTypeMap = {
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
//# sourceMappingURL=DegradationDataAttributesComponentsAffectedItems.js.map