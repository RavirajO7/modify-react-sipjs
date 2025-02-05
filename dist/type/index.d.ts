import { Session } from "sip.js";
import { SessionManager } from "sip.js/lib/platform/web";
export interface SIPProviderOptions {
    webSocketServer: string;
    domain: string;
    refAudioRemote?: HTMLAudioElement;
    refVideoRemote?: HTMLVideoElement;
}
export declare enum CONNECT_STATUS {
    WAIT_REQUEST_CONNECT = "WAIT_REQUEST_CONNECT",
    CONNECTED = "CONNECTED",
    DISCONNECTED = "DISCONNECTED"
}
export declare enum RegisterStatus {
    UNREGISTERED = "UNREGISTERED",
    REGISTERED = "REGISTERED"
}
export type SIPAccount = {
    username: string;
    password: string;
};
export interface IProviderContext {
    sessionManager: SessionManager | null;
    connectAndRegister: (sipAccount: SIPAccount) => void;
    connectStatus: CONNECT_STATUS;
    registerStatus: RegisterStatus;
    sessions: Record<string, Session>;
    sessionTimer: SessionTimer;
}
export declare enum SessionDirection {
    INCOMING = "INCOMING",
    OUTGOING = "OUTGOING"
}
export type Timer = {
    createdAt: Date;
    receivedAt?: Date;
    answeredAt?: Date;
    hangupAt?: Date;
};
export type SessionTimer = Record<string, Timer>;
