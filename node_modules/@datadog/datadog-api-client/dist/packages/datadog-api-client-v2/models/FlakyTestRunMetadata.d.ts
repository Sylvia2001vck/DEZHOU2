/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Metadata about the latest failed test run of the flaky test.
 */
export declare class FlakyTestRunMetadata {
    /**
     * The duration of the test run in milliseconds.
     */
    "durationMs"?: number;
    /**
     * The error message from the test failure.
     */
    "errorMessage"?: string;
    /**
     * The stack trace from the test failure.
     */
    "errorStack"?: string;
    /**
     * The line number where the test ends in the source file.
     */
    "sourceEnd"?: number;
    /**
     * The source file where the test is defined.
     */
    "sourceFile"?: string;
    /**
     * The line number where the test starts in the source file.
     */
    "sourceStart"?: number;
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
