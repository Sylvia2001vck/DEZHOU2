"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRelationshipsTeams = void 0;
/**
 * Associates teams with this schedule in a data structure.
 */
class DataRelationshipsTeams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataRelationshipsTeams.attributeTypeMap;
    }
}
exports.DataRelationshipsTeams = DataRelationshipsTeams;
/**
 * @ignore
 */
DataRelationshipsTeams.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DataRelationshipsTeamsDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataRelationshipsTeams.js.map