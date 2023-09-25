import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, Product, ProductSort, ProductFilter, AvailableProductSelection, CreateProductInput, UpdateProductInput } from "../types.js";
export declare const DefaultProductSelection: {
    readonly __typename: true;
    readonly createdAt: true;
    readonly id: true;
    readonly name: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "Product". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedProductOrDefault<Options extends Selectable<AvailableProductSelection>> = DeepFilterNever<Select<Product, DefaultSelection<AvailableProductSelection, Options, typeof DefaultProductSelection>>>;
/** Options that can be passed to the `ProductManager#findOne` method */
export interface FindOneProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductSelection;
}
/** Options that can be passed to the `ProductManager#maybeFindOne` method */
export interface MaybeFindOneProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductSelection;
}
/** Options that can be passed to the `ProductManager#findMany` method */
export interface FindManyProductsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductSelection;
    /** Return records sorted by these sorts */
    sort?: ProductSort | ProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ProductFilter | ProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ProductManager#findFirst` method */
export interface FindFirstProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductSelection;
    /** Return records sorted by these sorts */
    sort?: ProductSort | ProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ProductFilter | ProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ProductManager#maybeFindFirst` method */
export interface MaybeFindFirstProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductSelection;
    /** Return records sorted by these sorts */
    sort?: ProductSort | ProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ProductFilter | ProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductSelection;
}
export interface UpdateProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableProductSelection;
}
export interface DeleteProductOptions {
}
export type FullyQualifiedCreateProductVariables = {
    Product?: CreateProductInput;
};
export type CreateProductVariables = CreateProductInput;
type createProductActionReturnType<Options extends CreateProductOptions> = Promise<SelectedProductOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>>;
/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */
declare function createProduct<Options extends CreateProductOptions>(variables: CreateProductVariables, options?: LimitToKnownKeys<Options, CreateProductOptions>): createProductActionReturnType<Options>;
declare function createProduct<Options extends CreateProductOptions>(variables: FullyQualifiedCreateProductVariables, options?: LimitToKnownKeys<Options, CreateProductOptions>): createProductActionReturnType<Options>;
export type FullyQualifiedUpdateProductVariables = {
    Product?: UpdateProductInput;
};
export type UpdateProductVariables = UpdateProductInput;
type updateProductActionReturnType<Options extends UpdateProductOptions> = Promise<SelectedProductOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateProduct<Options extends UpdateProductOptions>(id: string, variables: UpdateProductVariables, options?: LimitToKnownKeys<Options, UpdateProductOptions>): updateProductActionReturnType<Options>;
declare function updateProduct<Options extends UpdateProductOptions>(id: string, variables: FullyQualifiedUpdateProductVariables, options?: LimitToKnownKeys<Options, UpdateProductOptions>): updateProductActionReturnType<Options>;
type deleteProductActionReturnType<Options extends DeleteProductOptions> = Promise<void extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>>;
/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */
declare function deleteProduct<Options extends DeleteProductOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteProductOptions>): deleteProductActionReturnType<Options>;
/** All the actions available at the collection level and record level for "Product" */
export declare class ProductManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one Product by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneProductOptions>): Promise<GadgetRecord<SelectedProductOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "Product";
        modelApiIdentifier: "Product";
        defaultSelection: typeof DefaultProductSelection;
        selectionType: AvailableProductSelection;
        optionsType: FindOneProductOptions;
        schemaType: Query["Product"];
    };
    /**
 * Finds one Product by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneProductOptions>): Promise<GadgetRecord<SelectedProductOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "Product";
        modelApiIdentifier: "Product";
        defaultSelection: typeof DefaultProductSelection;
        selectionType: AvailableProductSelection;
        optionsType: MaybeFindOneProductOptions;
        schemaType: Query["Product"];
    };
    /**
 * Finds many Product. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyProductsOptions>): Promise<GadgetRecordList<SelectedProductOrDefault<Options>>>;
        type: "findMany";
        operationName: "Products";
        modelApiIdentifier: "Product";
        defaultSelection: typeof DefaultProductSelection;
        selectionType: AvailableProductSelection;
        optionsType: FindManyProductsOptions;
        schemaType: Query["Product"];
    };
    /**
 * Finds the first matching Product. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstProductOptions>(options?: LimitToKnownKeys<Options, FindFirstProductOptions>): Promise<GadgetRecord<SelectedProductOrDefault<Options>>>;
        type: "findFirst";
        operationName: "Products";
        modelApiIdentifier: "Product";
        defaultSelection: typeof DefaultProductSelection;
        selectionType: AvailableProductSelection;
        optionsType: FindFirstProductOptions;
        schemaType: Query["Product"];
    };
    /**
 * Finds the first matching Product. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstProductOptions>): Promise<GadgetRecord<SelectedProductOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "Products";
        modelApiIdentifier: "Product";
        defaultSelection: typeof DefaultProductSelection;
        selectionType: AvailableProductSelection;
        optionsType: MaybeFindFirstProductOptions;
        schemaType: Query["Product"];
    };
    /**
  * Finds one Product by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneProductOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneProductOptions>): Promise<GadgetRecord<SelectedProductOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "Products";
        modelApiIdentifier: "Product";
        defaultSelection: typeof DefaultProductSelection;
        selectionType: AvailableProductSelection;
        optionsType: FindOneProductOptions;
        schemaType: Query["Product"];
    };
    create: typeof createProduct & {
        readonly type: "action";
        readonly operationName: "createProduct";
        readonly namespace: null;
        readonly modelApiIdentifier: "Product";
        readonly modelSelectionField: "Product";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly __typename: true;
            readonly createdAt: true;
            readonly id: true;
            readonly name: true;
            readonly updatedAt: true;
        };
        readonly selectionType: AvailableProductSelection;
        readonly optionsType: CreateProductOptions;
        readonly schemaType: Product | null;
        readonly variablesType: CreateProductInput | FullyQualifiedCreateProductVariables | undefined;
        readonly variables: {
            readonly Product: {
                readonly required: false;
                readonly type: "CreateProductInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        readonly hasCreateOrUpdateEffect: true;
        readonly paramOnlyVariables: readonly [];
        readonly hasReturnType: false;
        readonly acceptsModelInput: true;
    };
    update: typeof updateProduct & {
        readonly type: "action";
        readonly operationName: "updateProduct";
        readonly namespace: null;
        readonly modelApiIdentifier: "Product";
        readonly modelSelectionField: "Product";
        readonly isBulk: false;
        readonly defaultSelection: {
            readonly __typename: true;
            readonly createdAt: true;
            readonly id: true;
            readonly name: true;
            readonly updatedAt: true;
        };
        readonly selectionType: AvailableProductSelection;
        readonly optionsType: UpdateProductOptions;
        readonly schemaType: Product | null;
        readonly variablesType: ({
            id: string;
        } & (UpdateProductInput | FullyQualifiedUpdateProductVariables)) | undefined;
        readonly variables: {
            readonly id: {
                readonly required: true;
                readonly type: "GadgetID";
            };
            readonly Product: {
                readonly required: false;
                readonly type: "UpdateProductInput";
            };
        };
        readonly hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        readonly hasCreateOrUpdateEffect: true;
        readonly paramOnlyVariables: readonly [];
        readonly hasReturnType: false;
        readonly acceptsModelInput: true;
    };
    delete: typeof deleteProduct & {
        readonly type: "action";
        readonly operationName: "deleteProduct";
        readonly namespace: null;
        readonly modelApiIdentifier: "Product";
        readonly modelSelectionField: "Product";
        readonly isBulk: false;
        readonly defaultSelection: null;
        readonly selectionType: Record<string, never>;
        readonly optionsType: DeleteProductOptions;
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
        <Options extends DeleteProductOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteProductOptions>): Promise<void>;
        type: "action";
        operationName: "bulkDeleteProducts";
        namespace: null;
        modelApiIdentifier: "Product";
        modelSelectionField: "Products";
        isBulk: true;
        defaultSelection: null;
        selectionType: Record<string, never>;
        optionsType: DeleteProductOptions;
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
