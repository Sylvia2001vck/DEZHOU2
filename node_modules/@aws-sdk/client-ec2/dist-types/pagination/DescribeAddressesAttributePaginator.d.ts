import type { Paginator } from "@smithy/types";
import { DescribeAddressesAttributeCommandInput, DescribeAddressesAttributeCommandOutput } from "../commands/DescribeAddressesAttributeCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeAddressesAttribute: (config: EC2PaginationConfiguration, input: DescribeAddressesAttributeCommandInput, ...rest: any[]) => Paginator<DescribeAddressesAttributeCommandOutput>;
