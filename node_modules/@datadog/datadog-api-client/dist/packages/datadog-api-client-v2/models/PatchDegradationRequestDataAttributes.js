"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchDegradationRequestDataAttributes = void 0;
/**
 * The supported attributes for updating a degradation.
 */
class PatchDegradationRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchDegradationRequestDataAttributes.attributeTypeMap;
    }
}
exports.PatchDegradationRequestDataAttributes = PatchDegradationRequestDataAttributes;
/**
 * @ignore
 */
PatchDegradationRequestDataAttributes.attributeTypeMap = {
    componentsAffected: {
        baseName: "components_affected",
        type: "Array<PatchDegradationRequestDataAttributesComponentsAffectedItems>",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "PatchDegradationRequestDataAttributesStatus",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchDegradationRequestDataAttributes.js.map