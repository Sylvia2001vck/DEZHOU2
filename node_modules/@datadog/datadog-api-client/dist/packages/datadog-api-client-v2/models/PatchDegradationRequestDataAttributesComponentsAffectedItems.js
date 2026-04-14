"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchDegradationRequestDataAttributesComponentsAffectedItems = void 0;
class PatchDegradationRequestDataAttributesComponentsAffectedItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchDegradationRequestDataAttributesComponentsAffectedItems.attributeTypeMap;
    }
}
exports.PatchDegradationRequestDataAttributesComponentsAffectedItems = PatchDegradationRequestDataAttributesComponentsAffectedItems;
/**
 * @ignore
 */
PatchDegradationRequestDataAttributesComponentsAffectedItems.attributeTypeMap = {
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
//# sourceMappingURL=PatchDegradationRequestDataAttributesComponentsAffectedItems.js.map