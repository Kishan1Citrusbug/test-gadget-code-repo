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
      Gadgemon,
      GadgemonSort,
      GadgemonFilter,
      AvailableGadgemonSelection,
      CreateGadgemonInput,
      UpdateGadgemonInput,
      BulkDeleteGadgemonsResult,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultGadgemonSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
  "similar": true,
  "sprite": {
    "mimeType": true,
    "url": true
  },
  "type": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "gadgemon". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedGadgemonOrDefault<Options extends Selectable<AvailableGadgemonSelection>> = DeepFilterNever<
  Select<
    Gadgemon,
    DefaultSelection<
      AvailableGadgemonSelection,
      Options,
      typeof DefaultGadgemonSelection
    >
  >>;

/** Options that can be passed to the `GadgemonManager#findOne` method */
export interface FindOneGadgemonOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgemonSelection;
};


/** Options that can be passed to the `GadgemonManager#maybeFindOne` method */
export interface MaybeFindOneGadgemonOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgemonSelection;
};


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
};


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
};


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
};



export interface CreateGadgemonOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgemonSelection;
};



export interface UpdateGadgemonOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableGadgemonSelection;
};



export interface DeleteGadgemonOptions {
};




    
  export type FullyQualifiedCreateGadgemonVariables = {
          gadgemon?: CreateGadgemonInput,
      }


    export type CreateGadgemonVariables = CreateGadgemonInput;



type createGadgemonActionReturnType<Options extends CreateGadgemonOptions> = Promise<

  SelectedGadgemonOrDefault<Options> extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>

>

/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createGadgemon<Options extends CreateGadgemonOptions>(
  
    variables: CreateGadgemonVariables,

  options?: LimitToKnownKeys<Options, CreateGadgemonOptions>
): createGadgemonActionReturnType<Options>

// Fully qualified, nested api identifier overload
async function createGadgemon<Options extends CreateGadgemonOptions>(
  
      variables: FullyQualifiedCreateGadgemonVariables,
  
  options?: LimitToKnownKeys<Options, CreateGadgemonOptions>
): createGadgemonActionReturnType<Options>;

// Function implementation
async function createGadgemon<Options extends CreateGadgemonOptions>(
  this: GadgemonManager,
  
      variables: CreateGadgemonVariables | FullyQualifiedCreateGadgemonVariables,
  
  options?: LimitToKnownKeys<Options, CreateGadgemonOptions>
): Promise<SelectedGadgemonOrDefault<Options> extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>>
 {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables);

  return (await actionRunner<SelectedGadgemonOrDefault<Options>>(
    this,
    "createGadgemon",
    DefaultGadgemonSelection,
    "gadgemon",
    "gadgemon",
    false,
    {
                    "gadgemon": {
          value: newVariables.gadgemon,
          required: false,
          type: "CreateGadgemonInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    
  export type FullyQualifiedUpdateGadgemonVariables = {
          gadgemon?: UpdateGadgemonInput,
      }


    export type UpdateGadgemonVariables = UpdateGadgemonInput;



type updateGadgemonActionReturnType<Options extends UpdateGadgemonOptions> = Promise<

  SelectedGadgemonOrDefault<Options> extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>

>

/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateGadgemon<Options extends UpdateGadgemonOptions>(
  id: string,
    variables: UpdateGadgemonVariables,

  options?: LimitToKnownKeys<Options, UpdateGadgemonOptions>
): updateGadgemonActionReturnType<Options>

// Fully qualified, nested api identifier overload
async function updateGadgemon<Options extends UpdateGadgemonOptions>(
  id: string,
      variables: FullyQualifiedUpdateGadgemonVariables,
  
  options?: LimitToKnownKeys<Options, UpdateGadgemonOptions>
): updateGadgemonActionReturnType<Options>;

// Function implementation
async function updateGadgemon<Options extends UpdateGadgemonOptions>(
  this: GadgemonManager,
  id: string,
      variables: UpdateGadgemonVariables | FullyQualifiedUpdateGadgemonVariables,
  
  options?: LimitToKnownKeys<Options, UpdateGadgemonOptions>
): Promise<SelectedGadgemonOrDefault<Options> extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>>
 {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables);

  return (await actionRunner<SelectedGadgemonOrDefault<Options>>(
    this,
    "updateGadgemon",
    DefaultGadgemonSelection,
    "gadgemon",
    "gadgemon",
    false,
    {
              id: {
          value: id,
          required: true,
          type: "GadgetID",
        },
                    "gadgemon": {
          value: newVariables.gadgemon,
          required: false,
          type: "UpdateGadgemonInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

type deleteGadgemonActionReturnType<Options extends DeleteGadgemonOptions> = Promise<

  void extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>

>

/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteGadgemon<Options extends DeleteGadgemonOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteGadgemonOptions>
): deleteGadgemonActionReturnType<Options>;

// Function implementation
async function deleteGadgemon<Options extends DeleteGadgemonOptions>(
  this: GadgemonManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteGadgemonOptions>
): Promise<void extends void ? void : GadgetRecord<SelectedGadgemonOrDefault<Options>>>
 {

  return (await actionRunner<void>(
    this,
    "deleteGadgemon",
    null,
    "gadgemon",
    "gadgemon",
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

  

/** All the actions available at the collection level and record level for "gadgemon" */
export class GadgemonManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one gadgemon by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneGadgemonOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneGadgemonOptions>):
    Promise<
      GadgetRecord<
        SelectedGadgemonOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "gadgemon";
  modelApiIdentifier: "gadgemon";
  defaultSelection: typeof DefaultGadgemonSelection;
  selectionType: AvailableGadgemonSelection;
  optionsType: FindOneGadgemonOptions;
  schemaType: Query["gadgemon"];
} = Object.assign(
  async <Options extends FindOneGadgemonOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneGadgemonOptions>) => {
    return await findOneRunner<SelectedGadgemonOrDefault<Options>>(
      this,
      "gadgemon",
      id,
      DefaultGadgemonSelection,
      "gadgemon",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "gadgemon",
    modelApiIdentifier: "gadgemon",
    defaultSelection: DefaultGadgemonSelection,
    selectionType: {} as AvailableGadgemonSelection,
    optionsType: {} as FindOneGadgemonOptions,
    schemaType: null as Query["gadgemon"],
  } as const
)

  
    /**
 * Finds one gadgemon by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneGadgemonOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneGadgemonOptions>):
    Promise<
      GadgetRecord<
        SelectedGadgemonOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "gadgemon";
  modelApiIdentifier: "gadgemon";
  defaultSelection: typeof DefaultGadgemonSelection;
  selectionType: AvailableGadgemonSelection;
  optionsType: MaybeFindOneGadgemonOptions;
  schemaType: Query["gadgemon"];
} = Object.assign(
  async <Options extends MaybeFindOneGadgemonOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneGadgemonOptions>) => {
    const record = await findOneRunner<SelectedGadgemonOrDefault<Options>>(
      this,
      "gadgemon",
      id,
      DefaultGadgemonSelection,
      "gadgemon",
      options,
      false
    );
    return record.isEmpty() ? null : record;
  },
  {
    type: "maybeFindOne",
    findByVariableName: "id",
    operationName: "gadgemon",
    modelApiIdentifier: "gadgemon",
    defaultSelection: DefaultGadgemonSelection,
    selectionType: {} as AvailableGadgemonSelection,
    optionsType: {} as MaybeFindOneGadgemonOptions,
    schemaType: null as Query["gadgemon"],
  } as const
)

  
    /**
 * Finds many gadgemon. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyGadgemonsOptions>(options?: LimitToKnownKeys<Options, FindManyGadgemonsOptions>):
    Promise<
      GadgetRecordList<
        SelectedGadgemonOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "gadgemons";
  modelApiIdentifier: "gadgemon";
  defaultSelection: typeof DefaultGadgemonSelection;
  selectionType: AvailableGadgemonSelection;
  optionsType: FindManyGadgemonsOptions;
  schemaType: Query["gadgemon"];
} = Object.assign(
  async <Options extends FindManyGadgemonsOptions>(options?: LimitToKnownKeys<Options, FindManyGadgemonsOptions>):
    Promise<
      GadgetRecordList<
        SelectedGadgemonOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedGadgemonOrDefault<Options>>(
      this,
      "gadgemons",
      DefaultGadgemonSelection,
      "gadgemon",
      options
    );
  },
  {
    type: "findMany",
    operationName: "gadgemons",
    modelApiIdentifier: "gadgemon",
    defaultSelection: DefaultGadgemonSelection,
    selectionType: {} as AvailableGadgemonSelection,
    optionsType: {} as FindManyGadgemonsOptions,
    schemaType: null as Query["gadgemon"],
  } as const
);
  
    /**
 * Finds the first matching gadgemon. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstGadgemonOptions>(options?: LimitToKnownKeys<Options, FindFirstGadgemonOptions>):
    Promise<
      GadgetRecord<
        SelectedGadgemonOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "gadgemons";
  modelApiIdentifier: "gadgemon";
  defaultSelection: typeof DefaultGadgemonSelection;
  selectionType: AvailableGadgemonSelection;
  optionsType: FindFirstGadgemonOptions;
  schemaType: Query["gadgemon"];
} = Object.assign(
  async <Options extends FindFirstGadgemonOptions>(options?: LimitToKnownKeys<Options, FindFirstGadgemonOptions>):
    Promise<
      GadgetRecord<
        SelectedGadgemonOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedGadgemonOrDefault<Options>>(
      this,
      "gadgemons",
      DefaultGadgemonSelection,
      "gadgemon",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "gadgemons",
    modelApiIdentifier: "gadgemon",
    defaultSelection: DefaultGadgemonSelection,
    selectionType: {} as AvailableGadgemonSelection,
    optionsType: {} as FindFirstGadgemonOptions,
    schemaType: null as Query["gadgemon"],
  } as const
);
  
    /**
 * Finds the first matching gadgemon. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstGadgemonOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstGadgemonOptions>):
    Promise<
      GadgetRecord<
        SelectedGadgemonOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "gadgemons";
  modelApiIdentifier: "gadgemon";
  defaultSelection: typeof DefaultGadgemonSelection;
  selectionType: AvailableGadgemonSelection;
  optionsType: MaybeFindFirstGadgemonOptions;
  schemaType: Query["gadgemon"];
} = Object.assign(
  async <Options extends MaybeFindFirstGadgemonOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstGadgemonOptions>):
    Promise<
      GadgetRecord<
        SelectedGadgemonOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedGadgemonOrDefault<Options>>(
      this,
      "gadgemons",
      DefaultGadgemonSelection,
      "gadgemon",
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "gadgemons",
    modelApiIdentifier: "gadgemon",
    defaultSelection: DefaultGadgemonSelection,
    selectionType: {} as AvailableGadgemonSelection,
    optionsType: {} as MaybeFindFirstGadgemonOptions,
    schemaType: null as Query["gadgemon"],
  } as const
);
  
    /**
  * Finds one gadgemon by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneGadgemonOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneGadgemonOptions>):
    Promise<
      GadgetRecord<
        SelectedGadgemonOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "gadgemons";
  modelApiIdentifier: "gadgemon";
  defaultSelection: typeof DefaultGadgemonSelection;
  selectionType: AvailableGadgemonSelection;
  optionsType: FindOneGadgemonOptions;
  schemaType: Query["gadgemon"];
} = Object.assign(
  async <Options extends FindOneGadgemonOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneGadgemonOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedGadgemonOrDefault<Options>
      > & SelectedGadgemonOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedGadgemonOrDefault<Options>>(
      this,
      "gadgemons",
      "id",
      value,
      DefaultGadgemonSelection,
      "gadgemon",
      options
    );
  },
  {
    type: "findOne",
    findByVariableName: "id",
    operationName: "gadgemons",
    modelApiIdentifier: "gadgemon",
    defaultSelection: DefaultGadgemonSelection,
    selectionType: {} as AvailableGadgemonSelection,
    optionsType: {} as FindOneGadgemonOptions,
    schemaType: null as Query["gadgemon"],
  } as const
)
  
    create = Object.assign(createGadgemon,
  {
    type: "action",
    operationName: "createGadgemon",
    namespace: null,
    modelApiIdentifier: "gadgemon",
    modelSelectionField: "gadgemon",
    isBulk: false,
    defaultSelection: DefaultGadgemonSelection,
    selectionType: {} as AvailableGadgemonSelection,
    optionsType: {} as CreateGadgemonOptions,
    schemaType: null as Query["gadgemon"],

    variablesType: undefined as
      (
      (
        FullyQualifiedCreateGadgemonVariables          | CreateGadgemonVariables      )
    ) | undefined,

    variables: {
      "gadgemon": {
        required: false,
        type: "CreateGadgemonInput",
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

  
    update = Object.assign(updateGadgemon,
  {
    type: "action",
    operationName: "updateGadgemon",
    namespace: null,
    modelApiIdentifier: "gadgemon",
    modelSelectionField: "gadgemon",
    isBulk: false,
    defaultSelection: DefaultGadgemonSelection,
    selectionType: {} as AvailableGadgemonSelection,
    optionsType: {} as UpdateGadgemonOptions,
    schemaType: null as Query["gadgemon"],

    variablesType: undefined as
      (        { id: string } &

      (
        FullyQualifiedUpdateGadgemonVariables          | UpdateGadgemonVariables      )
    ) | undefined,

    variables: {
      id: {
        required: true,
        type: "GadgetID",
      },
      "gadgemon": {
        required: false,
        type: "UpdateGadgemonInput",
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

  
    delete = Object.assign(deleteGadgemon,
  {
    type: "action",
    operationName: "deleteGadgemon",
    namespace: null,
    modelApiIdentifier: "gadgemon",
    modelSelectionField: "gadgemon",
    isBulk: false,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteGadgemonOptions,
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
  <Options extends DeleteGadgemonOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteGadgemonOptions>
  ): Promise<void>;
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
} = Object.assign(
  async <Options extends DeleteGadgemonOptions>(
    ids: string[],
    options?: LimitToKnownKeys<Options, DeleteGadgemonOptions>
  ) => {
    return (await actionRunner<void>(
      this,
      "bulkDeleteGadgemons",
      null,
      "gadgemon",
      "gadgemons",
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
    operationName: "bulkDeleteGadgemons",
    namespace: null,
    modelApiIdentifier: "gadgemon",
    modelSelectionField: "gadgemons",
    isBulk: true,
    defaultSelection: null,
    selectionType: {} as Record<string, never>,
    optionsType: {} as DeleteGadgemonOptions,
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
