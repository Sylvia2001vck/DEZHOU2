"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportRelationships = void 0;
/**
 * The relationships for an incident import request.
 */
class IncidentImportRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportRelationships.attributeTypeMap;
    }
}
exports.IncidentImportRelationships = IncidentImportRelationships;
/**
 * @ignore
 */
IncidentImportRelationships.attributeTypeMap = {
    commanderUser: {
        baseName: "commander_user",
        type: "NullableRelationshipToUser",
    },
    declaredByUser: {
        baseName: "declared_by_user",
        type: "NullableRelationshipToUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentImportRelationships.js.map