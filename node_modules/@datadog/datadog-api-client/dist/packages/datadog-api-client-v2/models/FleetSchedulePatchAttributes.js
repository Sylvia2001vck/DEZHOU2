"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetSchedulePatchAttributes = void 0;
/**
 * Attributes for partially updating a schedule. All fields are optional.
 */
class FleetSchedulePatchAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetSchedulePatchAttributes.attributeTypeMap;
    }
}
exports.FleetSchedulePatchAttributes = FleetSchedulePatchAttributes;
/**
 * @ignore
 */
FleetSchedulePatchAttributes.attributeTypeMap = {
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
//# sourceMappingURL=FleetSchedulePatchAttributes.js.map