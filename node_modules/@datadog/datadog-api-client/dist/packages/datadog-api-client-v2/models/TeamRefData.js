"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRefData = void 0;
/**
 * Reference to a Datadog team.
 */
class TeamRefData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRefData.attributeTypeMap;
    }
}
exports.TeamRefData = TeamRefData;
/**
 * @ignore
 */
TeamRefData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamRefDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRefData.js.map