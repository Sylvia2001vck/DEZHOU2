"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingMute = void 0;
/**
 * Information about the mute status of this finding.
 */
class FindingMute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FindingMute.attributeTypeMap;
    }
}
exports.FindingMute = FindingMute;
/**
 * @ignore
 */
FindingMute.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    expirationDate: {
        baseName: "expiration_date",
        type: "number",
        format: "int64",
    },
    muted: {
        baseName: "muted",
        type: "boolean",
    },
    reason: {
        baseName: "reason",
        type: "FindingMuteReason",
    },
    startDate: {
        baseName: "start_date",
        type: "number",
        format: "int64",
    },
    uuid: {
        baseName: "uuid",
        type: "string",
    },
};
//# sourceMappingURL=FindingMute.js.map