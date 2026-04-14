/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Argument } from "./Argument";
import { CustomRuleRevisionAttributesCategory } from "./CustomRuleRevisionAttributesCategory";
import { CustomRuleRevisionAttributesSeverity } from "./CustomRuleRevisionAttributesSeverity";
import { CustomRuleRevisionTest } from "./CustomRuleRevisionTest";
import { Language } from "./Language";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
export declare class CustomRuleRevisionAttributes {
    /**
     * Rule arguments
     */
    "arguments": Array<Argument>;
    /**
     * Rule category
     */
    "category": CustomRuleRevisionAttributesCategory;
    /**
     * Code checksum
     */
    "checksum": string;
    /**
     * Rule code
     */
    "code": string;
    /**
     * Creation timestamp
     */
    "createdAt": Date;
    /**
     * Creator identifier
     */
    "createdBy": string;
    /**
     * Revision creation message
     */
    "creationMessage": string;
    /**
     * Associated CVE
     */
    "cve": string | null;
    /**
     * Associated CWE
     */
    "cwe": string | null;
    /**
     * Full description
     */
    "description": string;
    /**
     * Documentation URL
     */
    "documentationUrl": string | null;
    /**
     * Whether the revision is published
     */
    "isPublished": boolean;
    /**
     * Whether this is a testing revision
     */
    "isTesting": boolean;
    /**
     * Programming language
     */
    "language": Language;
    /**
     * Rule severity
     */
    "severity": CustomRuleRevisionAttributesSeverity;
    /**
     * Short description
     */
    "shortDescription": string;
    /**
     * Whether to use AI for fixes
     */
    "shouldUseAiFix": boolean;
    /**
     * Rule tags
     */
    "tags": Array<string>;
    /**
     * Rule tests
     */
    "tests": Array<CustomRuleRevisionTest>;
    /**
     * Tree-sitter query
     */
    "treeSitterQuery": string;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}
