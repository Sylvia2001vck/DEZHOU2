import type { Paginator } from "@smithy/types";
import { DescribeInstanceTypeOfferingsCommandInput, DescribeInstanceTypeOfferingsCommandOutput } from "../commands/DescribeInstanceTypeOfferingsCommand";
import type { EC2PaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare const paginateDescribeInstanceTypeOfferings: (config: EC2PaginationConfiguration, input: DescribeInstanceTypeOfferingsCommandInput, ...rest: any[]) => Paginator<DescribeInstanceTypeOfferingsCommandOutput>;
