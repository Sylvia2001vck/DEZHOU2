"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationForwardDestinationSplunk = void 0;
/**
 * The Splunk HTTP Event Collector (HEC) destination.
 */
class CustomDestinationForwardDestinationSplunk {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationForwardDestinationSplunk.attributeTypeMap;
    }
}
exports.CustomDestinationForwardDestinationSplunk = CustomDestinationForwardDestinationSplunk;
/**
 * @ignore
 */
CustomDestinationForwardDestinationSplunk.attributeTypeMap = {
    accessToken: {
        baseName: "access_token",
        type: "string",
        required: true,
    },
    endpoint: {
        baseName: "endpoint",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationForwardDestinationSplunkType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationForwardDestinationSplunk.js.map