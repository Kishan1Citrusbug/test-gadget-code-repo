import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Gadgemon, GadgemonSort, GadgemonFilter, AvailableGadgemonSelection, CreateGadgemonInput, UpdateGadgemonInput } from "../types.js";
export declare const DefaultGadgemonSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly name: true;
    readonly similar: true;
    readonly sprite: {
        readonly mimeType: true;
        readonly url: true;
    };
    readonly type: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "gadgemon". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedGadgemonOrDefault<Options extends Selectable<AvailableGadgemonSelection>> = DeepFilterNever<Select<Gadgemon, DefaultSelection<AvailableGadgemonSelection, Options, typeof DefaultGadgemonSelection>>>;
/** Options that can be passed to the `GadgemonManager#findOne` method */
export interface FindOneGadgemonOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableGadgemonSelection;
}
/** Options that can be passed to the `GadgemonManager#maybeFindOne` method */
export interface MaybeFindOneGadgemonOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableGadgemonSelection;
}
/** Options that can be passed to the `GadgemonManager#findMany` method */
export interface FindManyGadgemonsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableGadgemonSelection;
    /** Return records sorted by these sorts */
    sort?: GadgemonSort | GadgemonSort[] | null;
    /** Only return records matching these filters. */
    filter?: GadgemonFilter | GadgemonFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `GadgemonManager#findFirst` method */
export interface FindFirstGadgemonOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableGadgemonSelection;
    /** Return records sorted by these sorts */
    sort?: GadgemonSort | GadgemonSort[] | null;
    /** Only return records matching these filters. */
    filter?: GadgemonFilter | GadgemonFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `GadgemonManager#maybeFindFirst` method */
export interface MaybeFindFirstGadgemonOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableGadgemonSelection;
    /** Return records sorted by these sorts */
    sort?: GadgemonSort | GadgemonSort[] | null;
    /** Only return records matching these filters. */
    filter?: GadgemonFilter | GadgemonFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateGadgemonOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableGadgemonSelection;
}
export interface UpdateGadgemonOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableGadgemonSelection;
}
export interface DeleteGadgemonOptions {
}
export type FullyQualifiedCreateGadgemonVariables = {
    gadgemon?: CreateGadgemonInput;
};
export type CreateGadgemonVariables = CreateGadgemonInput;
type createGadgemonActionReturnType<Options extends CreateGadgemonOptions> = Promise<SelectedGadgemonOrDefault<Options> extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createGadgemon<Options extends CreateGadgemonOptions>(variables: CreateGadgemonVariables, options?: LimitToKnownKeys<Options, CreateGadgemonOptions>): createGadgemonActionReturnType<Options>;
declare function createGadgemon<Options extends CreateGadgemonOptions>(variables: FullyQualifiedCreateGadgemonVariables, options?: LimitToKnownKeys<Options, CreateGadgemonOptions>): createGadgemonActionReturnType<Options>;
export type FullyQualifiedUpdateGadgemonVariables = {
    gadgemon?: UpdateGadgemonInput;
};
export type UpdateGadgemonVariables = UpdateGadgemonInput;
type updateGadgemonActionReturnType<Options extends UpdateGadgemonOptions> = Promise<SelectedGadgemonOrDefault<Options> extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateGadgemon<Options extends UpdateGadgemonOptions>(id: string, variables: UpdateGadgemonVariables, options?: LimitToKnownKeys<Options, UpdateGadgemonOptions>): updateGadgemonActionReturnType<Options>;
declare function updateGadgemon<Options extends UpdateGadgemonOptions>(id: string, variables: FullyQualifiedUpdateGadgemonVariables, options?: LimitToKnownKeys<Options, UpdateGadgemonOptions>): updateGadgemonActionReturnType<Options>;
type deleteGadgemonActionReturnType<Options extends DeleteGadgemonOptions> = Promise<void extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteGadgemon<Options extends DeleteGadgemonOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteGadgemonOptions>): deleteGadgemonActionReturnType<Options>;
/** All the actions available at the collection level and record level for "gadgemon" */
export declare class GadgemonManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one gadgemon by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneGadgemonOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneGadgemonOptions>): Promise<GadgetRecord<SelectedGadgemonOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "gadgemon";
        modelApiIdentifier: "gadgemon";
        defaultSelection: typeof DefaultGadgemonSelection;
        selectionType: AvailableGadgemonSelection;
        optionsType: FindOneGadgemonOptions;
        schemaType: Query["gadgemon"];
    };
    /**
 * Finds one gadgemon by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneGadgemonOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneGadgemonOptions>): Promise<GadgetRecord<SelectedGadgemonOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "gadgemon";
        modelApiIdentifier: "gadgemon";
        defaultSelection: typeof DefaultGadgemonSelection;
        selectionType: AvailableGadgemonSelection;
        optionsType: MaybeFindOneGadgemonOptions;
        schemaType: Query["gadgemon"];
    };
    /**
 * Finds many gadgemon. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyGadgemonsOptions>(options?: LimitToKnownKeys<Options, FindManyGadgemonsOptions>): Promise<GadgetRecordList<SelectedGadgemonOrDefault<Options>>>;
        type: "findMany";
        operationName: "gadgemons";
        modelApiIdentifier: "gadgemon";
        defaultSelection: typeof DefaultGadgemonSelection;
        selectionType: AvailableGadgemonSelection;
        optionsType: FindManyGadgemonsOptions;
        schemaType: Query["gadgemon"];
    };
    /**
 * Finds the first matching gadgemon. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstGadgemonOptions>(options?: LimitToKnownKeys<Options, FindFirstGadgemonOptions>): Promise<GadgetRecord<SelectedGadgemonOrDefault<Options>>>;
        type: "findFirst";
        operationName: "gadgemons";
        modelApiIdentifier: "gadgemon";
        defaultSelection: typeof DefaultGadgemonSelection;
        selectionType: AvailableGadgemonSelection;
        optionsType: FindFirstGadgemonOptions;
        schemaType: Query["gadgemon"];
    };
    /**
 * Finds the first matching gadgemon. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstGadgemonOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstGadgemonOptions>): Promise<GadgetRecord<SelectedGadgemonOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "gadgemons";
        modelApiIdentifier: "gadgemon";
        defaultSelection: typeof DefaultGadgemonSelection;
        selectionType: AvailableGadgemonSelection;
        optionsType: MaybeFindFirstGadgemonOptions;
        schemaType: Query["gadgemon"];
    };
    /**
  * Finds one gadgemon by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneGadgemonOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneGadgemonOptions>): Promise<GadgetRecord<SelectedGadgemonOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "gadgemons";
        modelApiIdentifier: "gadgemon";
        defaultSelection: typeof DefaultGadgemonSelection;
        selectionType: AvailableGadgemonSelection;
        optionsType: FindOneGadgemonOptions;
        schemaType: Query["gadgemon"];
    };
    create: typeof createGadgemon & {
        readonly type: "action";
        readonly operationName: "createGadgemon";
        readonly namespace: null;
        readonly modelApiIdentifier: "gadgemon";
        readonly modelSelectionField: "gadgemon";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly __typename: true;
            readonly createdAt: true;
            readonly id: true;
            readonly name: true;
            readonly similar: true;
            readonly sprite: {
                readonly mimeType: true;
                readonly url: true;
            };
            readonly type: true;
            readonly updatedAt: true;
        };
        readonly selectionType: AvailableGadgemonSelection;
        readonly optionsType: CreateGadgemonOptions;
        readonly schemaType: Gadgemon | null;
        readonly variablesType: CreateGadgemonInput | FullyQualifiedCreateGadgemonVariables | undefined;
        readonly variables: {
            readonly gadgemon: {
                readonly required: false;
                readonly type: "CreateGadgemonInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        readonly hasCreateOrUpdateEffect: true;
        readonly paramOnlyVariables: readonly [];
        readonly hasReturnType: false;
        readonly acceptsModelInput: true;
    };
    update: typeof updateGadgemon & {
        readonly type: "action";
        readonly operationName: "updateGadgemon";
        readonly namespace: null;
        readonly modelApiIdentifier: "gadgemon";
        readonly modelSelectionField: "gadgemon";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly __typename: true;
            readonly createdAt: true;
            readonly id: true;
            readonly name: true;
            readonly similar: true;
            readonly sprite: {
                readonly mimeType: true;
                readonly url: true;
            };
            readonly type: true;
            readonly updatedAt: true;
        };
        readonly selectionType: AvailableGadgemonSelection;
        readonly optionsType: UpdateGadgemonOptions;
        readonly schemaType: Gadgemon | null;
        readonly variablesType: ({
            id: string;
        } & (UpdateGadgemonInput | FullyQualifiedUpdateGadgemonVariables)) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly gadgemon: {
                readonly required: false;
                readonly type: "UpdateGadgemonInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        readonly hasCreateOrUpdateEffect: true;
        readonly paramOnlyVariables: readonly [];
        readonly hasReturnType: false;
        readonly acceptsModelInput: true;
    };
    delete: typeof deleteGadgemon & {
        readonly type: "action";
        readonly operationName: "deleteGadgemon";
        readonly namespace: null;
        readonly modelApiIdentifier: "gadgemon";
        readonly modelSelectionField: "gadgemon";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteGadgemonOptions;
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
        <Options extends DeleteGadgemonOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteGadgemonOptions>): Promise<void>;
        type: "action";
        operationName: "bulkDeleteGadgemons";
        namespace: null;
        modelApiIdentifier: "gadgemon";
        modelSelectionField: "gadgemons";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteGadgemonOptions;
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
}
export {};
