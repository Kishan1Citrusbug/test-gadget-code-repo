// All the generated types for the "gadgemon" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, Gadgemon } from "@gadget-client/quick-start-v3-test";
import { Select } from "@gadgetinc/api-client-core";
export type DefaultGadgemonServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly sprite: true;
      readonly similar: true;
      readonly type: true;
      readonly name: true;
  };

  
/** All the data passed to an effect or precondition within the `create` action on the `gadgemon` model. */
export interface CreateGadgemonActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `gadgemon` record this action is operating on.
  */
  record: GadgetRecord<Select<Gadgemon, DefaultGadgemonServerSelection>>;
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
  context: CreateGadgemonActionContext;
};


    
/** All the data passed to an effect or precondition within the `delete` action on the `gadgemon` model. */
export interface DeleteGadgemonActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `gadgemon` record this action is operating on.
  */
  record: GadgetRecord<Select<Gadgemon, DefaultGadgemonServerSelection>>;
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
  context: DeleteGadgemonActionContext;
};


    
/** All the data passed to an effect or precondition within the `update` action on the `gadgemon` model. */
export interface UpdateGadgemonActionContext extends AmbientContext {
  /**
  * The model of the record this action is operating on
  */
  model: NotYetTyped;
  /**
  * The `gadgemon` record this action is operating on.
  */
  record: GadgetRecord<Select<Gadgemon, DefaultGadgemonServerSelection>>;
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
  context: UpdateGadgemonActionContext;
};


  