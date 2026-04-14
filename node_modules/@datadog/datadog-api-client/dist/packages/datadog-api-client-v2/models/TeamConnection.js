"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamConnection = void 0;
/**
 * A relationship between a Datadog team and a team from another external system.
 */
class TeamConnection {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamConnection.attributeTypeMap;
    }
}
exports.TeamConnection = TeamConnection;
/**
 * @ignore
 */
TeamConnection.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamConnectionAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "TeamConnectionRelationships",
    },
    type: {
        baseName: "type",
        type: "TeamConnectionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamConnection.js.map