import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultGadgemonSelection = {
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
};
;
;
;
;
;
;
;
;
async function createGadgemon(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
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
        type: "CreateGadgemonInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateGadgemon(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
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
        type: "GadgetID"
      },
      "gadgemon": {
        value: newVariables.gadgemon,
        required: false,
        type: "UpdateGadgemonInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteGadgemon(id, options) {
  return await actionRunner(
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
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
class GadgemonManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one gadgemon by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one gadgemon by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many gadgemon. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching gadgemon. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "gadgemons",
          DefaultGadgemonSelection,
          "gadgemon",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "gadgemons",
        modelApiIdentifier: "gadgemon",
        defaultSelection: DefaultGadgemonSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching gadgemon. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "gadgemons",
          DefaultGadgemonSelection,
          "gadgemon",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "gadgemons",
        modelApiIdentifier: "gadgemon",
        defaultSelection: DefaultGadgemonSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one gadgemon by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.create = Object.assign(
      createGadgemon,
      {
        type: "action",
        operationName: "createGadgemon",
        namespace: null,
        modelApiIdentifier: "gadgemon",
        modelSelectionField: "gadgemon",
        isBulk: false,
        defaultSelection: DefaultGadgemonSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "gadgemon": {
            required: false,
            type: "CreateGadgemonInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateGadgemon,
      {
        type: "action",
        operationName: "updateGadgemon",
        namespace: null,
        modelApiIdentifier: "gadgemon",
        modelSelectionField: "gadgemon",
        isBulk: false,
        defaultSelection: DefaultGadgemonSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "gadgemon": {
            required: false,
            type: "UpdateGadgemonInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteGadgemon,
      {
        type: "action",
        operationName: "deleteGadgemon",
        namespace: null,
        modelApiIdentifier: "gadgemon",
        modelSelectionField: "gadgemon",
        isBulk: false,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkDelete action on all records specified by `ids`. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await actionRunner(
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
              type: "[GadgetID!]"
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteGadgemons",
        namespace: null,
        modelApiIdentifier: "gadgemon",
        modelSelectionField: "gadgemons",
        isBulk: true,
        defaultSelection: null,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false
      }
    );
  }
}
export {
  DefaultGadgemonSelection,
  GadgemonManager
};
//# sourceMappingURL=Gadgemon.js.map
