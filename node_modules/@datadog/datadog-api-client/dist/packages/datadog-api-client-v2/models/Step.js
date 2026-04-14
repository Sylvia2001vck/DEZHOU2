"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
/**
 * A Step is a sub-component of a workflow. Each Step performs an action.
 */
class Step {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Step.attributeTypeMap;
    }
}
exports.Step = Step;
/**
 * @ignore
 */
Step.attributeTypeMap = {
    actionId: {
        baseName: "actionId",
        type: "string",
        required: true,
    },
    completionGate: {
        baseName: "completionGate",
        type: "CompletionGate",
    },
    connectionLabel: {
        baseName: "connectionLabel",
        type: "string",
    },
    display: {
        baseName: "display",
        type: "StepDisplay",
    },
    errorHandlers: {
        baseName: "errorHandlers",
        type: "Array<ErrorHandler>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    outboundEdges: {
        baseName: "outboundEdges",
        type: "Array<OutboundEdge>",
    },
    parameters: {
        baseName: "parameters",
        type: "Array<Parameter>",
    },
    readinessGate: {
        baseName: "readinessGate",
        type: "ReadinessGate",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Step.js.map