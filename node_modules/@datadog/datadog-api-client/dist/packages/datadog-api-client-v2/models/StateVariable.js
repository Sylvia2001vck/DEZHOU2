"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateVariable = void 0;
/**
 * A variable, which can be set and read by other components in the app.
 */
class StateVariable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StateVariable.attributeTypeMap;
    }
}
exports.StateVariable = StateVariable;
/**
 * @ignore
 */
StateVariable.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    properties: {
        baseName: "properties",
        type: "StateVariableProperties",
        required: true,
    },
    type: {
        baseName: "type",
        type: "StateVariableType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StateVariable.js.map