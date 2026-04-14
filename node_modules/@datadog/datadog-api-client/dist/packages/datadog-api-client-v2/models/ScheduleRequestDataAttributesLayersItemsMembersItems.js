"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRequestDataAttributesLayersItemsMembersItems = void 0;
/**
 * Defines a single member within a schedule layer, including the reference to the underlying user.
 */
class ScheduleRequestDataAttributesLayersItemsMembersItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleRequestDataAttributesLayersItemsMembersItems.attributeTypeMap;
    }
}
exports.ScheduleRequestDataAttributesLayersItemsMembersItems = ScheduleRequestDataAttributesLayersItemsMembersItems;
/**
 * @ignore
 */
ScheduleRequestDataAttributesLayersItemsMembersItems.attributeTypeMap = {
    user: {
        baseName: "user",
        type: "ScheduleRequestDataAttributesLayersItemsMembersItemsUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleRequestDataAttributesLayersItemsMembersItems.js.map