import type { Paginator } from "@smithy/types";
import { DescribeAddressTransfersCommandInput, DescribeAddressTransfersCommandOutput } from "../commands/DescribeAddressTransfersCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeAddressTransfers: (config: EC2PaginationConfiguration, input: DescribeAddressTransfersCommandInput, ...rest: any[]) => Paginator<DescribeAddressTransfersCommandOutput>;
