"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spec = void 0;
/**
 * The spec defines what the workflow does.
 */
class Spec {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Spec.attributeTypeMap;
    }
}
exports.Spec = Spec;
/**
 * @ignore
 */
Spec.attributeTypeMap = {
    annotations: {
        baseName: "annotations",
        type: "Array<Annotation>",
    },
    connectionEnvs: {
        baseName: "connectionEnvs",
        type: "Array<ConnectionEnv>",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    inputSchema: {
        baseName: "inputSchema",
        type: "InputSchema",
    },
    outputSchema: {
        baseName: "outputSchema",
        type: "OutputSchema",
    },
    steps: {
        baseName: "steps",
        type: "Array<Step>",
    },
    triggers: {
        baseName: "triggers",
        type: "Array<Trigger>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Spec.js.map