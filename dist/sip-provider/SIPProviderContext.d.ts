/// <reference types="react" />
import { IProviderContext, SessionDirection, Timer } from "../type";
export declare const ProviderContext: import("react").Context<IProviderContext>;
export declare const useSIPProvider: () => IProviderContext;
export declare const useSessionCall: (sessionId: string) => {
    direction: SessionDirection;
    session: import("sip.js").Session;
    timer: Timer;
    hold: () => void;
    unhold: () => void;
    isHeld: boolean;
    mute: () => void;
    unmute: () => void;
    isMuted: boolean;
    answer: () => Promise<void> | undefined;
    decline: () => Promise<void> | undefined;
    hangup: () => Promise<void> | undefined;
} | null;
