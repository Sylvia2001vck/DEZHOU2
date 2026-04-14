"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailedFinding = void 0;
/**
 * A single finding with with message and resource configuration.
 */
class DetailedFinding {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DetailedFinding.attributeTypeMap;
    }
}
exports.DetailedFinding = DetailedFinding;
/**
 * @ignore
 */
DetailedFinding.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DetailedFindingAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DetailedFindingType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DetailedFinding.js.map