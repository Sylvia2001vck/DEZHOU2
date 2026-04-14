"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2Dot1MSTeams = void 0;
/**
 * Service owner's Microsoft Teams.
 */
class ServiceDefinitionV2Dot1MSTeams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2Dot1MSTeams.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2Dot1MSTeams = ServiceDefinitionV2Dot1MSTeams;
/**
 * @ignore
 */
ServiceDefinitionV2Dot1MSTeams.attributeTypeMap = {
    contact: {
        baseName: "contact",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ServiceDefinitionV2Dot1MSTeamsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2Dot1MSTeams.js.map