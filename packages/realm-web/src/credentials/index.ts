import { Credentials } from "./Credentials";
import { AnonymousCredentials } from "./AnonymousCredentials";
import { ApiKeyCredentials } from "./ApiKeyCredentials";
import { EmailPasswordCredentials } from "./EmailPasswordCredentials";

// Setting the static class members of the Credentials base class here, to avoid a cyclic relationship.
Credentials.AnonymousCredentials = AnonymousCredentials;
Credentials.ApiKeyCredentials = ApiKeyCredentials;
Credentials.EmailPasswordCredentials = EmailPasswordCredentials;

export {
    Credentials,
    AnonymousCredentials,
    ApiKeyCredentials,
    EmailPasswordCredentials,
};
