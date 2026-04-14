"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTeamsMessageAction = void 0;
/**
 * Sends a message to a Microsoft Teams channel.
 */
class SendTeamsMessageAction {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SendTeamsMessageAction.attributeTypeMap;
    }
}
exports.SendTeamsMessageAction = SendTeamsMessageAction;
/**
 * @ignore
 */
SendTeamsMessageAction.attributeTypeMap = {
    channel: {
        baseName: "channel",
        type: "string",
        required: true,
    },
    team: {
        baseName: "team",
        type: "string",
        required: true,
    },
    tenant: {
        baseName: "tenant",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SendTeamsMessageActionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SendTeamsMessageAction.js.map