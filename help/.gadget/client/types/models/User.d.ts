import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, User, UserSort, UserFilter, AvailableUserSelection, UpdateUserInput, SignOutUserInput } from "../types.js";
export declare const DefaultUserSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly email: true;
    readonly firstName: true;
    readonly googleImageUrl: true;
    readonly id: true;
    readonly lastName: true;
    readonly lastSignedIn: true;
    readonly roles: {
        readonly key: true;
        readonly name: true;
    };
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "user". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedUserOrDefault<Options extends Selectable<AvailableUserSelection>> = DeepFilterNever<Select<User, DefaultSelection<AvailableUserSelection, Options, typeof DefaultUserSelection>>>;
/** Options that can be passed to the `UserManager#findOne` method */
export interface FindOneUserOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableUserSelection;
}
/** Options that can be passed to the `UserManager#maybeFindOne` method */
export interface MaybeFindOneUserOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableUserSelection;
}
/** Options that can be passed to the `UserManager#findMany` method */
export interface FindManyUsersOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableUserSelection;
    /** Return records sorted by these sorts */
    sort?: UserSort | UserSort[] | null;
    /** Only return records matching these filters. */
    filter?: UserFilter | UserFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `UserManager#findFirst` method */
export interface FindFirstUserOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableUserSelection;
    /** Return records sorted by these sorts */
    sort?: UserSort | UserSort[] | null;
    /** Only return records matching these filters. */
    filter?: UserFilter | UserFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `UserManager#maybeFindFirst` method */
export interface MaybeFindFirstUserOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableUserSelection;
    /** Return records sorted by these sorts */
    sort?: UserSort | UserSort[] | null;
    /** Only return records matching these filters. */
    filter?: UserFilter | UserFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface UpdateUserOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableUserSelection;
}
export interface DeleteUserOptions {
}
export interface SignOutUserOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableUserSelection;
}
export type FullyQualifiedUpdateUserVariables = {
    user?: UpdateUserInput;
};
export type UpdateUserVariables = UpdateUserInput;
type updateUserActionReturnType<Options extends UpdateUserOptions> = Promise<SelectedUserOrDefault<Options> extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateUser<Options extends UpdateUserOptions>(id: string, variables: UpdateUserVariables, options?: LimitToKnownKeys<Options, UpdateUserOptions>): updateUserActionReturnType<Options>;
declare function updateUser<Options extends UpdateUserOptions>(id: string, variables: FullyQualifiedUpdateUserVariables, options?: LimitToKnownKeys<Options, UpdateUserOptions>): updateUserActionReturnType<Options>;
type deleteUserActionReturnType<Options extends DeleteUserOptions> = Promise<void extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteUser<Options extends DeleteUserOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteUserOptions>): deleteUserActionReturnType<Options>;
export type FullyQualifiedSignOutUserVariables = {
    user?: SignOutUserInput;
};
export type SignOutUserVariables = SignOutUserInput;
type signOutUserActionReturnType<Options extends SignOutUserOptions> = Promise<SelectedUserOrDefault<Options> extends void ? void : GadgetRecord<SelectedUserOrDefault<Options>>>;
/**
  * Executes the signOut action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function signOutUser<Options extends SignOutUserOptions>(id: string, variables: SignOutUserVariables, options?: LimitToKnownKeys<Options, SignOutUserOptions>): signOutUserActionReturnType<Options>;
declare function signOutUser<Options extends SignOutUserOptions>(id: string, variables: FullyQualifiedSignOutUserVariables, options?: LimitToKnownKeys<Options, SignOutUserOptions>): signOutUserActionReturnType<Options>;
/** All the actions available at the collection level and record level for "user" */
export declare class UserManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneUserOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneUserOptions>): Promise<GadgetRecord<SelectedUserOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "user";
        modelApiIdentifier: "user";
        defaultSelection: typeof DefaultUserSelection;
        selectionType: AvailableUserSelection;
        optionsType: FindOneUserOptions;
        schemaType: Query["user"];
    };
    /**
 * Finds one user by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneUserOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneUserOptions>): Promise<GadgetRecord<SelectedUserOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "user";
        modelApiIdentifier: "user";
        defaultSelection: typeof DefaultUserSelection;
        selectionType: AvailableUserSelection;
        optionsType: MaybeFindOneUserOptions;
        schemaType: Query["user"];
    };
    /**
 * Finds many user. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyUsersOptions>(options?: LimitToKnownKeys<Options, FindManyUsersOptions>): Promise<GadgetRecordList<SelectedUserOrDefault<Options>>>;
        type: "findMany";
        operationName: "users";
        modelApiIdentifier: "user";
        defaultSelection: typeof DefaultUserSelection;
        selectionType: AvailableUserSelection;
        optionsType: FindManyUsersOptions;
        schemaType: Query["user"];
    };
    /**
 * Finds the first matching user. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstUserOptions>(options?: LimitToKnownKeys<Options, FindFirstUserOptions>): Promise<GadgetRecord<SelectedUserOrDefault<Options>>>;
        type: "findFirst";
        operationName: "users";
        modelApiIdentifier: "user";
        defaultSelection: typeof DefaultUserSelection;
        selectionType: AvailableUserSelection;
        optionsType: FindFirstUserOptions;
        schemaType: Query["user"];
    };
    /**
 * Finds the first matching user. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstUserOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstUserOptions>): Promise<GadgetRecord<SelectedUserOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "users";
        modelApiIdentifier: "user";
        defaultSelection: typeof DefaultUserSelection;
        selectionType: AvailableUserSelection;
        optionsType: MaybeFindFirstUserOptions;
        schemaType: Query["user"];
    };
    /**
  * Finds one user by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneUserOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneUserOptions>): Promise<GadgetRecord<SelectedUserOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "users";
        modelApiIdentifier: "user";
        defaultSelection: typeof DefaultUserSelection;
        selectionType: AvailableUserSelection;
        optionsType: FindOneUserOptions;
        schemaType: Query["user"];
    };
    update: typeof updateUser & {
        readonly type: "action";
        readonly operationName: "updateUser";
        readonly namespace: null;
        readonly modelApiIdentifier: "user";
        readonly modelSelectionField: "user";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly __typename: true;
            readonly createdAt: true;
            readonly email: true;
            readonly firstName: true;
            readonly googleImageUrl: true;
            readonly id: true;
            readonly lastName: true;
            readonly lastSignedIn: true;
            readonly roles: {
                readonly key: true;
                readonly name: true;
            };
            readonly updatedAt: true;
        };
        readonly selectionType: AvailableUserSelection;
        readonly optionsType: UpdateUserOptions;
        readonly schemaType: User | null;
        readonly variablesType: ({
            id: string;
        } & (UpdateUserInput | FullyQualifiedUpdateUserVariables)) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly user: {
                readonly required: false;
                readonly type: "UpdateUserInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        readonly hasCreateOrUpdateEffect: true;
        readonly paramOnlyVariables: readonly [];
        readonly hasReturnType: false;
        readonly acceptsModelInput: true;
    };
    delete: typeof deleteUser & {
        readonly type: "action";
        readonly operationName: "deleteUser";
        readonly namespace: null;
        readonly modelApiIdentifier: "user";
        readonly modelSelectionField: "user";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteUserOptions;
        readonly schemaType: null;
        readonly variablesType: {
            id: string;
        } | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        readonly hasCreateOrUpdateEffect: false;
        readonly paramOnlyVariables: readonly [];
        readonly hasReturnType: false;
        readonly acceptsModelInput: false;
    };
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
    bulkDelete: {
        <Options extends DeleteUserOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteUserOptions>): Promise<void>;
        type: "action";
        operationName: "bulkDeleteUsers";
        namespace: null;
        modelApiIdentifier: "user";
        modelSelectionField: "users";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteUserOptions;
        schemaType: null;
        variablesType: {
            ids: string[];
        } | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
    };
    signOut: typeof signOutUser & {
        readonly type: "action";
        readonly operationName: "signOutUser";
        readonly namespace: null;
        readonly modelApiIdentifier: "user";
        readonly modelSelectionField: "user";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly __typename: true;
            readonly createdAt: true;
            readonly email: true;
            readonly firstName: true;
            readonly googleImageUrl: true;
            readonly id: true;
            readonly lastName: true;
            readonly lastSignedIn: true;
            readonly roles: {
                readonly key: true;
                readonly name: true;
            };
            readonly updatedAt: true;
        };
        readonly selectionType: AvailableUserSelection;
        readonly optionsType: SignOutUserOptions;
        readonly schemaType: User | null;
        readonly variablesType: ({
            id: string;
        } & (SignOutUserInput | FullyQualifiedSignOutUserVariables)) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly user: {
                readonly required: false;
                readonly type: "SignOutUserInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        readonly hasCreateOrUpdateEffect: true;
        readonly paramOnlyVariables: readonly [];
        readonly hasReturnType: false;
        readonly acceptsModelInput: true;
    };
}
export {};
