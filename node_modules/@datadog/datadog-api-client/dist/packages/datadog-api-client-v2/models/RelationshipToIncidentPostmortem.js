"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentPostmortem = void 0;
/**
 * A relationship reference for postmortems.
 */
class RelationshipToIncidentPostmortem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentPostmortem.attributeTypeMap;
    }
}
exports.RelationshipToIncidentPostmortem = RelationshipToIncidentPostmortem;
/**
 * @ignore
 */
RelationshipToIncidentPostmortem.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToIncidentPostmortemData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentPostmortem.js.map