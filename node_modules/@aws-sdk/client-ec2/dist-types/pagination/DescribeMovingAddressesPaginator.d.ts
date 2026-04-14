import type { Paginator } from "@smithy/types";
import { DescribeMovingAddressesCommandInput, DescribeMovingAddressesCommandOutput } from "../commands/DescribeMovingAddressesCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeMovingAddresses: (config: EC2PaginationConfiguration, input: DescribeMovingAddressesCommandInput, ...rest: any[]) => Paginator<DescribeMovingAddressesCommandOutput>;
