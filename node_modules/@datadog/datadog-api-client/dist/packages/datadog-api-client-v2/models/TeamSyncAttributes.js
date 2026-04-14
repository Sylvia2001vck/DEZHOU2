"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSyncAttributes = void 0;
/**
 * Team sync attributes.
 */
class TeamSyncAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamSyncAttributes.attributeTypeMap;
    }
}
exports.TeamSyncAttributes = TeamSyncAttributes;
/**
 * @ignore
 */
TeamSyncAttributes.attributeTypeMap = {
    frequency: {
        baseName: "frequency",
        type: "TeamSyncAttributesFrequency",
    },
    source: {
        baseName: "source",
        type: "TeamSyncAttributesSource",
        required: true,
    },
    syncMembership: {
        baseName: "sync_membership",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "TeamSyncAttributesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamSyncAttributes.js.map