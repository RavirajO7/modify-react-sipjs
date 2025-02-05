import { ReactNode } from "react";
import React from "react";
import { SessionManagerOptions } from "sip.js/lib/platform/web";
import { SIPProviderOptions } from "../type";
export declare const SIPProvider: (props: {
    options: SIPProviderOptions;
    children: ReactNode | JSX.Element;
    mergedSessionManagerOptions?: SessionManagerOptions;
}) => React.ReactNode;
