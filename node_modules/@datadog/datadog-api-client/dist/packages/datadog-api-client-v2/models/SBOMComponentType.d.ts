/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UnparsedObject } from "../../datadog-api-client-common/util";
/**
 * The SBOM component type
 */
export declare type SBOMComponentType = typeof APPLICATION | typeof CONTAINER | typeof DATA | typeof DEVICE | typeof DEVICE_DRIVER | typeof FILE | typeof FIRMWARE | typeof FRAMEWORK | typeof LIBRARY | typeof MACHINE_LEARNING_MODEL | typeof OPERATING_SYSTEM | typeof PLATFORM | UnparsedObject;
export declare const APPLICATION = "application";
export declare const CONTAINER = "container";
export declare const DATA = "data";
export declare const DEVICE = "device";
export declare const DEVICE_DRIVER = "device-driver";
export declare const FILE = "file";
export declare const FIRMWARE = "firmware";
export declare const FRAMEWORK = "framework";
export declare const LIBRARY = "library";
export declare const MACHINE_LEARNING_MODEL = "machine-learning-model";
export declare const OPERATING_SYSTEM = "operating-system";
export declare const PLATFORM = "platform";
