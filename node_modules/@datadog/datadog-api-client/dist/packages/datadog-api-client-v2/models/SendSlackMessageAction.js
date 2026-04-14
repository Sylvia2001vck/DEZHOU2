"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSlackMessageAction = void 0;
/**
 * Sends a message to a Slack channel.
 */
class SendSlackMessageAction {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SendSlackMessageAction.attributeTypeMap;
    }
}
exports.SendSlackMessageAction = SendSlackMessageAction;
/**
 * @ignore
 */
SendSlackMessageAction.attributeTypeMap = {
    channel: {
        baseName: "channel",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SendSlackMessageActionType",
        required: true,
    },
    workspace: {
        baseName: "workspace",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SendSlackMessageAction.js.map