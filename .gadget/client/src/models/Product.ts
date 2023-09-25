import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
      Product,
      ProductSort,
      ProductFilter,
      AvailableProductSelection,
      CreateProductInput,
      UpdateProductInput,
      BulkDeleteProductsResult,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultProductSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "Product". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedProductOrDefault<Options extends Selectable<AvailableProductSelection>> = DeepFilterNever<
  Select<
    Product,
    DefaultSelection<
      AvailableProductSelection,
      Options,
      typeof DefaultProductSelection
    >
  >>;

/** Options that can be passed to the `ProductManager#findOne` method */
export interface FindOneProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableProductSelection;
};


/** Options that can be passed to the `ProductManager#maybeFindOne` method */
export interface MaybeFindOneProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableProductSelection;
};


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
};


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
};


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
};



export interface CreateProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableProductSelection;
};



export interface UpdateProductOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableProductSelection;
};



export interface DeleteProductOptions {
};




    
  export type FullyQualifiedCreateProductVariables = {
          Product?: CreateProductInput,
      }


    export type CreateProductVariables = CreateProductInput;



type createProductActionReturnType<Options extends CreateProductOptions> = Promise<

  SelectedProductOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>

>

/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createProduct<Options extends CreateProductOptions>(
  
    variables: CreateProductVariables,

  options?: LimitToKnownKeys<Options, CreateProductOptions>
): createProductActionReturnType<Options>

// Fully qualified, nested api identifier overload
async function createProduct<Options extends CreateProductOptions>(
  
      variables: FullyQualifiedCreateProductVariables,
  
  options?: LimitToKnownKeys<Options, CreateProductOptions>
): createProductActionReturnType<Options>;

// Function implementation
async function createProduct<Options extends CreateProductOptions>(
  this: ProductManager,
  
      variables: CreateProductVariables | FullyQualifiedCreateProductVariables,
  
  options?: LimitToKnownKeys<Options, CreateProductOptions>
): Promise<SelectedProductOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>>
 {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables);

  return (await actionRunner<SelectedProductOrDefault<Options>>(
    this,
    "createProduct",
    DefaultProductSelection,
    "Product",
    "Product",
    false,
    {
                    "Product": {
          value: newVariables.Product,
          required: false,
          type: "CreateProductInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    
  export type FullyQualifiedUpdateProductVariables = {
          Product?: UpdateProductInput,
      }


    export type UpdateProductVariables = UpdateProductInput;



type updateProductActionReturnType<Options extends UpdateProductOptions> = Promise<

  SelectedProductOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>

>

/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateProduct<Options extends UpdateProductOptions>(
  id: string,
    variables: UpdateProductVariables,

  options?: LimitToKnownKeys<Options, UpdateProductOptions>
): updateProductActionReturnType<Options>

// Fully qualified, nested api identifier overload
async function updateProduct<Options extends UpdateProductOptions>(
  id: string,
      variables: FullyQualifiedUpdateProductVariables,
  
  options?: LimitToKnownKeys<Options, UpdateProductOptions>
): updateProductActionReturnType<Options>;

// Function implementation
async function updateProduct<Options extends UpdateProductOptions>(
  this: ProductManager,
  id: string,
      variables: UpdateProductVariables | FullyQualifiedUpdateProductVariables,
  
  options?: LimitToKnownKeys<Options, UpdateProductOptions>
): Promise<SelectedProductOrDefault<Options> extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>>
 {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables);

  return (await actionRunner<SelectedProductOrDefault<Options>>(
    this,
    "updateProduct",
    DefaultProductSelection,
    "Product",
    "Product",
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "Product": {
          value: newVariables.Product,
          required: false,
          type: "UpdateProductInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

type deleteProductActionReturnType<Options extends DeleteProductOptions> = Promise<

  void extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>

>

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteProduct<Options extends DeleteProductOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteProductOptions>
): deleteProductActionReturnType<Options>;

// Function implementation
async function deleteProduct<Options extends DeleteProductOptions>(
  this: ProductManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteProductOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedProductOrDefault<Options>>>
 {

  return (await actionRunner<void>(
    this,
    "deleteProduct",
    null,
    "Product",
    "Product",
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  

/** All the actions available at the collection level and record level for "Product" */
export class ProductManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one Product by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneProductOptions>):
    Promise<
      GadgetRecord<
        SelectedProductOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "Product";
  modelApiIdentifier: "Product";
  defaultSelection: typeof DefaultProductSelection;
  selectionType: AvailableProductSelection;
  optionsType: FindOneProductOptions;
  schemaType: Query["Product"];
} = Object.assign(
  async <Options extends FindOneProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneProductOptions>) => {
    return await findOneRunner<SelectedProductOrDefault<Options>>(
      this,
      "Product",
      id,
      DefaultProductSelection,
      "Product",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "Product",
    modelApiIdentifier: "Product",
    defaultSelection: DefaultProductSelection,
    selectionType: {} as AvailableProductSelection,
    optionsType: {} as FindOneProductOptions,
    schemaType: null as Query["Product"],
  } as const
)

  
    /**
 * Finds one Product by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneProductOptions>):
    Promise<
      GadgetRecord<
        SelectedProductOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "Product";
  modelApiIdentifier: "Product";
  defaultSelection: typeof DefaultProductSelection;
  selectionType: AvailableProductSelection;
  optionsType: MaybeFindOneProductOptions;
  schemaType: Query["Product"];
} = Object.assign(
  async <Options extends MaybeFindOneProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneProductOptions>) => {
    const record = await findOneRunner<SelectedProductOrDefault<Options>>(
      this,
      "Product",
      id,
      DefaultProductSelection,
      "Product",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "Product",
    modelApiIdentifier: "Product",
    defaultSelection: DefaultProductSelection,
    selectionType: {} as AvailableProductSelection,
    optionsType: {} as MaybeFindOneProductOptions,
    schemaType: null as Query["Product"],
  } as const
)

  
    /**
 * Finds many Product. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyProductsOptions>):
    Promise<
      GadgetRecordList<
        SelectedProductOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "Products";
  modelApiIdentifier: "Product";
  defaultSelection: typeof DefaultProductSelection;
  selectionType: AvailableProductSelection;
  optionsType: FindManyProductsOptions;
  schemaType: Query["Product"];
} = Object.assign(
  async <Options extends FindManyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyProductsOptions>):
    Promise<
      GadgetRecordList<
        SelectedProductOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedProductOrDefault<Options>>(
      this,
      "Products",
      DefaultProductSelection,
      "Product",
      options
    );
  },
  {
    type: "findMany",
    operationName: "Products",
    modelApiIdentifier: "Product",
    defaultSelection: DefaultProductSelection,
    selectionType: {} as AvailableProductSelection,
    optionsType: {} as FindManyProductsOptions,
    schemaType: null as Query["Product"],
  } as const
);
  
    /**
 * Finds the first matching Product. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstProductOptions>(options?: LimitToKnownKeys<Options, FindFirstProductOptions>):
    Promise<
      GadgetRecord<
        SelectedProductOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "Products";
  modelApiIdentifier: "Product";
  defaultSelection: typeof DefaultProductSelection;
  selectionType: AvailableProductSelection;
  optionsType: FindFirstProductOptions;
  schemaType: Query["Product"];
} = Object.assign(
  async <Options extends FindFirstProductOptions>(options?: LimitToKnownKeys<Options, FindFirstProductOptions>):
    Promise<
      GadgetRecord<
        SelectedProductOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedProductOrDefault<Options>>(
      this,
      "Products",
      DefaultProductSelection,
      "Product",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "Products",
    modelApiIdentifier: "Product",
    defaultSelection: DefaultProductSelection,
    selectionType: {} as AvailableProductSelection,
    optionsType: {} as FindFirstProductOptions,
    schemaType: null as Query["Product"],
  } as const
);
  
    /**
 * Finds the first matching Product. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstProductOptions>):
    Promise<
      GadgetRecord<
        SelectedProductOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "Products";
  modelApiIdentifier: "Product";
  defaultSelection: typeof DefaultProductSelection;
  selectionType: AvailableProductSelection;
  optionsType: MaybeFindFirstProductOptions;
  schemaType: Query["Product"];
} = Object.assign(
  async <Options extends MaybeFindFirstProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstProductOptions>):
    Promise<
      GadgetRecord<
        SelectedProductOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedProductOrDefault<Options>>(
      this,
      "Products",
      DefaultProductSelection,
      "Product",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "Products",
    modelApiIdentifier: "Product",
    defaultSelection: DefaultProductSelection,
    selectionType: {} as AvailableProductSelection,
    optionsType: {} as MaybeFindFirstProductOptions,
    schemaType: null as Query["Product"],
  } as const
);
  
    /**
  * Finds one Product by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneProductOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneProductOptions>):
    Promise<
      GadgetRecord<
        SelectedProductOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "Products";
  modelApiIdentifier: "Product";
  defaultSelection: typeof DefaultProductSelection;
  selectionType: AvailableProductSelection;
  optionsType: FindOneProductOptions;
  schemaType: Query["Product"];
} = Object.assign(
  async <Options extends FindOneProductOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneProductOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedProductOrDefault<Options>
      > & SelectedProductOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedProductOrDefault<Options>>(
      this,
      "Products",
      "id",
      value,
      DefaultProductSelection,
      "Product",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "Products",
    modelApiIdentifier: "Product",
    defaultSelection: DefaultProductSelection,
    selectionType: {} as AvailableProductSelection,
    optionsType: {} as FindOneProductOptions,
    schemaType: null as Query["Product"],
  } as const
)
  
    create = Object.assign(createProduct,
  {
    type: "action",
    operationName: "createProduct",
    namespace: null,
    modelApiIdentifier: "Product",
    modelSelectionField: "Product",
    isBulk: false,
    defaultSelection: DefaultProductSelection,
    selectionType: {} as AvailableProductSelection,
    optionsType: {} as CreateProductOptions,
    schemaType: null as Query["Product"],

    variablesType: undefined as
      (
      (
        FullyQualifiedCreateProductVariables          | CreateProductVariables      )
    ) | undefined,

    variables: {
      "Product": {
        required: false,
        type: "CreateProductInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as const
)

  
    update = Object.assign(updateProduct,
  {
    type: "action",
    operationName: "updateProduct",
    namespace: null,
    modelApiIdentifier: "Product",
    modelSelectionField: "Product",
    isBulk: false,
    defaultSelection: DefaultProductSelection,
    selectionType: {} as AvailableProductSelection,
    optionsType: {} as UpdateProductOptions,
    schemaType: null as Query["Product"],

    variablesType: undefined as
      (        { id: string } &

      (
        FullyQualifiedUpdateProductVariables          | UpdateProductVariables      )
    ) | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "Product": {
        required: false,
        type: "UpdateProductInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as const
)

  
    delete = Object.assign(deleteProduct,
  {
    type: "action",
    operationName: "deleteProduct",
    namespace: null,
    modelApiIdentifier: "Product",
    modelSelectionField: "Product",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteProductOptions,
    schemaType: null,

    variablesType: undefined as
      (        { id: string } &

        {}
    ) | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: false,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: false,
  } as const
)

  
    /**
  * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
  */
bulkDelete: {
  <Options extends DeleteProductOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteProductOptions>
  ): Promise<void>;
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
} = Object.assign(
  async <Options extends DeleteProductOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteProductOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteProducts",
      null,
      "Product",
      "Products",
      true,
      {
        ids: {
          value: ids,
          required: true,
          type: "[GadgetID!]",
        },
      },
      options,
      null,
      false
    ));
  },
  {
    type: "action",
    operationName: "bulkDeleteProducts",
    namespace: null,
    modelApiIdentifier: "Product",
    modelSelectionField: "Products",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteProductOptions,
    schemaType: null,

    variablesType: undefined as {
      ids: string[]
    } | undefined,

    variables: {
      ids: {
        required: true,
        type: "[GadgetID!]",
      },
    },
    hasReturnType: false,
  } as const
)
  
}
