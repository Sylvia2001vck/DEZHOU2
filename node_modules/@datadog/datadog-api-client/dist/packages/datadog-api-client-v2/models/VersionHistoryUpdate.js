"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionHistoryUpdate = void 0;
/**
 * A change in a rule version.
 */
class VersionHistoryUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VersionHistoryUpdate.attributeTypeMap;
    }
}
exports.VersionHistoryUpdate = VersionHistoryUpdate;
/**
 * @ignore
 */
VersionHistoryUpdate.attributeTypeMap = {
    change: {
        baseName: "change",
        type: "string",
    },
    field: {
        baseName: "field",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "VersionHistoryUpdateType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VersionHistoryUpdate.js.map