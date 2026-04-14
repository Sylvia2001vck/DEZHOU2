"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentUserData = void 0;
/**
 * User object returned by the API.
 */
class IncidentUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentUserData.attributeTypeMap;
    }
}
exports.IncidentUserData = IncidentUserData;
/**
 * @ignore
 */
IncidentUserData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentUserAttributes",
    },
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
//# sourceMappingURL=IncidentUserData.js.map