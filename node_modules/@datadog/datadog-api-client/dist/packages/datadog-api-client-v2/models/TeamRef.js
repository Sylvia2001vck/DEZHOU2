"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRef = void 0;
/**
 * Reference to a Datadog team.
 */
class TeamRef {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRef.attributeTypeMap;
    }
}
exports.TeamRef = TeamRef;
/**
 * @ignore
 */
TeamRef.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamRefData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRef.js.map