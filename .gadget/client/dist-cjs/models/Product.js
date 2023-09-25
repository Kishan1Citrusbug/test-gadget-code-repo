"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Product_exports = {};
__export(Product_exports, {
  DefaultProductSelection: () => DefaultProductSelection,
  ProductManager: () => ProductManager
});
module.exports = __toCommonJS(Product_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultProductSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "name": true,
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
async function createProduct(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
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
        type: "CreateProductInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateProduct(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      },
      "Product": {
        value: newVariables.Product,
        required: false,
        type: "UpdateProductInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteProduct(id, options) {
  return await (0, import_api_client_core.actionRunner)(
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
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
class ProductManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one Product by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one Product by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds many Product. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching Product. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "Products",
          DefaultProductSelection,
          "Product",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "Products",
        modelApiIdentifier: "Product",
        defaultSelection: DefaultProductSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds the first matching Product. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "Products",
          DefaultProductSelection,
          "Product",
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "Products",
        modelApiIdentifier: "Product",
        defaultSelection: DefaultProductSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    /**
    * Finds one Product by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
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
        selectionType: {},
        optionsType: {},
        schemaType: null
      }
    );
    this.create = Object.assign(
      createProduct,
      {
        type: "action",
        operationName: "createProduct",
        namespace: null,
        modelApiIdentifier: "Product",
        modelSelectionField: "Product",
        isBulk: false,
        defaultSelection: DefaultProductSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          "Product": {
            required: false,
            type: "CreateProductInput"
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
      updateProduct,
      {
        type: "action",
        operationName: "updateProduct",
        namespace: null,
        modelApiIdentifier: "Product",
        modelSelectionField: "Product",
        isBulk: false,
        defaultSelection: DefaultProductSelection,
        selectionType: {},
        optionsType: {},
        schemaType: null,
        variablesType: void 0,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "Product": {
            required: false,
            type: "UpdateProductInput"
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
      deleteProduct,
      {
        type: "action",
        operationName: "deleteProduct",
        namespace: null,
        modelApiIdentifier: "Product",
        modelSelectionField: "Product",
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
        return await (0, import_api_client_core.actionRunner)(
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
        operationName: "bulkDeleteProducts",
        namespace: null,
        modelApiIdentifier: "Product",
        modelSelectionField: "Products",
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultProductSelection,
  ProductManager
});
//# sourceMappingURL=Product.js.map
