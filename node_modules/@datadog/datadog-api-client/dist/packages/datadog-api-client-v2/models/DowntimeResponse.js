"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeResponse = void 0;
/**
 * Downtiming gives you greater control over monitor notifications by
 * allowing you to globally exclude scopes from alerting.
 * Downtime settings, which can be scheduled with start and end times,
 * prevent all alerting related to specified Datadog tags.
 */
class DowntimeResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeResponse.attributeTypeMap;
    }
}
exports.DowntimeResponse = DowntimeResponse;
/**
 * @ignore
 */
DowntimeResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DowntimeResponseData",
    },
    included: {
        baseName: "included",
        type: "Array<DowntimeResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeResponse.js.map