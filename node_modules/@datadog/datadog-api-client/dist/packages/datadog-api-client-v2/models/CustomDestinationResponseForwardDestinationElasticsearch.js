"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationResponseForwardDestinationElasticsearch = void 0;
/**
 * The Elasticsearch destination.
 */
class CustomDestinationResponseForwardDestinationElasticsearch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationResponseForwardDestinationElasticsearch.attributeTypeMap;
    }
}
exports.CustomDestinationResponseForwardDestinationElasticsearch = CustomDestinationResponseForwardDestinationElasticsearch;
/**
 * @ignore
 */
CustomDestinationResponseForwardDestinationElasticsearch.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "{ [key: string]: any; }",
        required: true,
    },
    endpoint: {
        baseName: "endpoint",
        type: "string",
        required: true,
    },
    indexName: {
        baseName: "index_name",
        type: "string",
        required: true,
    },
    indexRotation: {
        baseName: "index_rotation",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CustomDestinationResponseForwardDestinationElasticsearchType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationResponseForwardDestinationElasticsearch.js.map