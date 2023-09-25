// All the generated types for the "Product" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, Product } from "@gadget-client/quick-start-v3-test";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultProductServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly name: true;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `Product` model. */
export interface CreateProductActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `Product` record this action is operating on.
  */
  record: GadgetRecord<Select<Product, DefaultProductServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: CreateProductActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `Product` model. */
export interface DeleteProductActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `Product` record this action is operating on.
  */
  record: GadgetRecord<Select<Product, DefaultProductServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: DeleteProductActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `Product` model. */
export interface UpdateProductActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `Product` record this action is operating on.
  */
  record: GadgetRecord<Select<Product, DefaultProductServerSelection>>;
  /**
  * An object passed between all preconditions and effects of an action execution at the `scope` property.
  * Useful for transferring data between effects.
  */
  scope: ActionExecutionScope;
  /**
  * An object describing what started this action execution.
  */
  trigger: ActionTrigger;
  params: {
    
    [key: string]: string | number | boolean | object | bigint | undefined;
  };
  /**
  * The context of this action. This context does not have a defined inner context.
  */
  context: UpdateProductActionContext;
};


    /** All the data passed to a validation effect for the `name` field on the `Product` model. */
export interface ProductNameFieldValidationContext extends AmbientContext {
  /**
* The model of the record this action is operating on
*/
  model: NotYetTyped;
  /**
* The field this validation is being applied to
*/
  field: NotYetTyped;
  /**
* The `Product` record this action is operating on.
*/
  record: GadgetRecord<Select<Product, DefaultProductServerSelection>>;
  /**
* The `Errors` object for tracking errors on this validation pass.
*/
  errors: ValidationErrors;
};


  