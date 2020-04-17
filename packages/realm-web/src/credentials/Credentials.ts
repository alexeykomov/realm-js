import type { AnonymousCredentials } from "./AnonymousCredentials";
import type { EmailPasswordCredentials } from "./EmailPasswordCredentials";
import type { ApiKeyCredentials } from "./ApiKeyCredentials";

/**
 * Abstract base class for credentials.
 * Exposes the Credentials namespace: Concrete types of credentials as static members and methods.
 */
export abstract class Credentials {
    /** @static */
    static AnonymousCredentials: typeof AnonymousCredentials;
    /** @static */
    static ApiKeyCredentials: typeof ApiKeyCredentials;
    /** @static */
    static EmailPasswordCredentials: typeof EmailPasswordCredentials;

    /**
     * The name of the authentication provider used when authenticating
     */
    public readonly providerName: string;

    /**
     * Construct a set of credentials
     *
     * @param providerName Optional custom name of the authentication provider.
     */
    constructor(providerName: string) {
        this.providerName = providerName;
    }

    /**
     * Create anonymous credentials.
     *
     * @returns The newly created credentials.
     */
    static anonymous() {
        return new Credentials.AnonymousCredentials();
    }

    /**
     * Create anonymous credentials.
     *
     * @param key The secret content of the API key.
     * @returns The newly created credentials.
     */
    static apiKey(key: string) {
        return new Credentials.ApiKeyCredentials(key);
    }

    /**
     * Create email / password credentials.
     *
     * @param email The end-users email.
     * @param password The end-users password.
     * @returns The newly created credentials.
     */
    static emailPassword(email: string, password: string) {
        return new Credentials.EmailPasswordCredentials(email, password);
    }
}
