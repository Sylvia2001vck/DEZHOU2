"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaRequestDataAttributesCommit = void 0;
class ScaRequestDataAttributesCommit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScaRequestDataAttributesCommit.attributeTypeMap;
    }
}
exports.ScaRequestDataAttributesCommit = ScaRequestDataAttributesCommit;
/**
 * @ignore
 */
ScaRequestDataAttributesCommit.attributeTypeMap = {
    authorDate: {
        baseName: "author_date",
        type: "string",
    },
    authorEmail: {
        baseName: "author_email",
        type: "string",
    },
    authorName: {
        baseName: "author_name",
        type: "string",
    },
    branch: {
        baseName: "branch",
        type: "string",
    },
    committerEmail: {
        baseName: "committer_email",
        type: "string",
    },
    committerName: {
        baseName: "committer_name",
        type: "string",
    },
    sha: {
        baseName: "sha",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScaRequestDataAttributesCommit.js.map