"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeRelationshipsCreatedByData = void 0;
/**
 * Data for the user who created the downtime.
 */
class DowntimeRelationshipsCreatedByData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeRelationshipsCreatedByData.attributeTypeMap;
    }
}
exports.DowntimeRelationshipsCreatedByData = DowntimeRelationshipsCreatedByData;
/**
 * @ignore
 */
DowntimeRelationshipsCreatedByData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UsersType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeRelationshipsCreatedByData.js.map