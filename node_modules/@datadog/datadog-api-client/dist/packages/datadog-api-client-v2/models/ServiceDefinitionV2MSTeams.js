"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDefinitionV2MSTeams = void 0;
/**
 * Service owner's Microsoft Teams.
 */
class ServiceDefinitionV2MSTeams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceDefinitionV2MSTeams.attributeTypeMap;
    }
}
exports.ServiceDefinitionV2MSTeams = ServiceDefinitionV2MSTeams;
/**
 * @ignore
 */
ServiceDefinitionV2MSTeams.attributeTypeMap = {
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
        type: "ServiceDefinitionV2MSTeamsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceDefinitionV2MSTeams.js.map