"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRelationshipsTeamsDataItems = void 0;
/**
 * Relates a team to this schedule, identified by `id` and `type` (must be `teams`).
 */
class DataRelationshipsTeamsDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataRelationshipsTeamsDataItems.attributeTypeMap;
    }
}
exports.DataRelationshipsTeamsDataItems = DataRelationshipsTeamsDataItems;
/**
 * @ignore
 */
DataRelationshipsTeamsDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DataRelationshipsTeamsDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataRelationshipsTeamsDataItems.js.map