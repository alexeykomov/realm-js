import { App } from "./App";

const appCache: { [id: string]: Realm.App } = {};

/**
 * Get or create a Realm App from an id.
 *
 * @param id The Realm App id visible from the MongoDB Realm UI or a configuration
 * @returns The Realm App instance. Calling this function multiple times with the same id will return the same instance.
 */
export function app(id: string) {
    if (id in appCache) {
        return appCache[id];
    } else {
        // Ensures the App has the correct constructor type signature
        const AppConstructor: Realm.AppConstructor = App;
        const instance = new AppConstructor(id);
        appCache[id] = instance;
        return instance;
    }
}

export { App };
export { Credentials } from "./credentials";
export { User } from "./User";
