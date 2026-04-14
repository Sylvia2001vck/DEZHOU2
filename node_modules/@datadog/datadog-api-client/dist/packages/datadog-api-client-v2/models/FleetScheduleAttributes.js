"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetScheduleAttributes = void 0;
/**
 * Attributes of a schedule in the response.
 */
class FleetScheduleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetScheduleAttributes.attributeTypeMap;
    }
}
exports.FleetScheduleAttributes = FleetScheduleAttributes;
/**
 * @ignore
 */
FleetScheduleAttributes.attributeTypeMap = {
    createdAtUnix: {
        baseName: "created_at_unix",
        type: "number",
        format: "int64",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    rule: {
        baseName: "rule",
        type: "FleetScheduleRecurrenceRule",
    },
    status: {
        baseName: "status",
        type: "FleetScheduleStatus",
    },
    updatedAtUnix: {
        baseName: "updated_at_unix",
        type: "number",
        format: "int64",
    },
    updatedBy: {
        baseName: "updated_by",
        type: "string",
    },
    versionToLatest: {
        baseName: "version_to_latest",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetScheduleAttributes.js.map