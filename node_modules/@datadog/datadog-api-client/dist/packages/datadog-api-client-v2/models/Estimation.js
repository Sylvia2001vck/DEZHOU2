"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estimation = void 0;
/**
 * Recommended resource values for a Spark driver or executor, derived from recent real usage metrics. Used by SPA to propose more efficient pod sizing.
 */
class Estimation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Estimation.attributeTypeMap;
    }
}
exports.Estimation = Estimation;
/**
 * @ignore
 */
Estimation.attributeTypeMap = {
    cpu: {
        baseName: "cpu",
        type: "Cpu",
    },
    ephemeralStorage: {
        baseName: "ephemeral_storage",
        type: "number",
        format: "int64",
    },
    heap: {
        baseName: "heap",
        type: "number",
        format: "int64",
    },
    memory: {
        baseName: "memory",
        type: "number",
        format: "int64",
    },
    overhead: {
        baseName: "overhead",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Estimation.js.map