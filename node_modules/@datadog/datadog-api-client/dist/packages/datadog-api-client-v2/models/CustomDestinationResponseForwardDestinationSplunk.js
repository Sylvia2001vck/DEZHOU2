"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationResponseForwardDestinationSplunk = void 0;
/**
 * The Splunk HTTP Event Collector (HEC) destination.
 */
class CustomDestinationResponseForwardDestinationSplunk {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationResponseForwardDestinationSplunk.attributeTypeMap;
    }
}
exports.CustomDestinationResponseForwardDestinationSplunk = CustomDestinationResponseForwardDestinationSplunk;
/**
 * @ignore
 */
CustomDestinationResponseForwardDestinationSplunk.attributeTypeMap = {
    endpoint: {
        baseName: "endpoint",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomDestinationResponseForwardDestinationSplunkType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationResponseForwardDestinationSplunk.js.map