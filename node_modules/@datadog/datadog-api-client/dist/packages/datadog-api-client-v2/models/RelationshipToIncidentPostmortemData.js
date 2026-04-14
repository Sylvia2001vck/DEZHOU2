"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentPostmortemData = void 0;
/**
 * The postmortem relationship data.
 */
class RelationshipToIncidentPostmortemData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentPostmortemData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentPostmortemData = RelationshipToIncidentPostmortemData;
/**
 * @ignore
 */
RelationshipToIncidentPostmortemData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentPostmortemType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentPostmortemData.js.map