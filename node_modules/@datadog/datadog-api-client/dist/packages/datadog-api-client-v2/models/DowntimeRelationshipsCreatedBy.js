"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeRelationshipsCreatedBy = void 0;
/**
 * The user who created the downtime.
 */
class DowntimeRelationshipsCreatedBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeRelationshipsCreatedBy.attributeTypeMap;
    }
}
exports.DowntimeRelationshipsCreatedBy = DowntimeRelationshipsCreatedBy;
/**
 * @ignore
 */
DowntimeRelationshipsCreatedBy.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DowntimeRelationshipsCreatedByData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeRelationshipsCreatedBy.js.map