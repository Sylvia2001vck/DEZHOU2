"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserNotificationChannelRequest = void 0;
/**
 * A top-level wrapper for creating a notification channel for a user
 */
class CreateUserNotificationChannelRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateUserNotificationChannelRequest.attributeTypeMap;
    }
}
exports.CreateUserNotificationChannelRequest = CreateUserNotificationChannelRequest;
/**
 * @ignore
 */
CreateUserNotificationChannelRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateNotificationChannelData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateUserNotificationChannelRequest.js.map