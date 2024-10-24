/********************************************************************
* ADOBE CONFIDENTIAL
* __________________
*
*  Copyright 2024 Adobe
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
*******************************************************************/
export declare const STANDARD_ATTRIBUTES: string[];
export interface AddressInput {
    city: string;
    company?: string;
    country_code: string;
    custom_attributes?: {
        attribute_code: string;
        value?: string;
        selected_options?: {
            uid: string;
            value: string;
        }[];
    }[];
    firstname: string;
    lastname: string;
    postcode?: string;
    region?: string;
    region_id?: number;
    save_in_address_book?: boolean;
    street: string[];
    telephone?: string;
    vat_id?: string;
}
export interface setShippingAddressParams {
    address: AddressInput;
    signal?: AbortSignal;
}
export declare const prepareAddress: (formFields: Record<string, any>) => AddressInput;
export declare const setShippingAddress: ({ signal, ...variables }: setShippingAddressParams) => Promise<import('../../data/models').Cart | null | undefined>;
//# sourceMappingURL=setShippingAddress.d.ts.map