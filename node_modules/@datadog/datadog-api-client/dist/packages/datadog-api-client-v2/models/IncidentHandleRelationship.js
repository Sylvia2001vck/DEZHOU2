"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentHandleRelationship = void 0;
class IncidentHandleRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentHandleRelationship.attributeTypeMap;
    }
}
exports.IncidentHandleRelationship = IncidentHandleRelationship;
/**
 * @ignore
 */
IncidentHandleRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentHandleRelationshipData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentHandleRelationship.js.map