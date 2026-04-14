"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDestinationForwardDestinationElasticsearch = void 0;
/**
 * The Elasticsearch destination.
 */
class CustomDestinationForwardDestinationElasticsearch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomDestinationForwardDestinationElasticsearch.attributeTypeMap;
    }
}
exports.CustomDestinationForwardDestinationElasticsearch = CustomDestinationForwardDestinationElasticsearch;
/**
 * @ignore
 */
CustomDestinationForwardDestinationElasticsearch.attributeTypeMap = {
    auth: {
        baseName: "auth",
        type: "CustomDestinationElasticsearchDestinationAuth",
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
        type: "CustomDestinationForwardDestinationElasticsearchType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomDestinationForwardDestinationElasticsearch.js.map