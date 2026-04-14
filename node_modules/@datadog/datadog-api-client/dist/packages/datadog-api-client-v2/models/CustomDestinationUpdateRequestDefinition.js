"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationUpdateRequestDefinition = void 0;
/**
 * The definition of a custom destination.
 */
class CustomDestinationUpdateRequestDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationUpdateRequestDefinition.attributeTypeMap;
    }
}
exports.CustomDestinationUpdateRequestDefinition = CustomDestinationUpdateRequestDefinition;
/**
 * @ignore
 */
CustomDestinationUpdateRequestDefinition.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomDestinationUpdateRequestAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationUpdateRequestDefinition.js.map