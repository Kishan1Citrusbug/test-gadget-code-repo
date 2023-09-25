import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";
type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
    [x: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {
}
/** Represents the possible values of the type enum. */
export type GadgemonTypeEnum = "grass" | "fire" | "water";
/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending" | "Descending";
/** Represents one gadgemon result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalGadgemonRecord = Scalars["JSONObject"];
/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];
/** Represents one user result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalUserRecord = Scalars["JSONObject"];
/** The `Upload` scalar type represents a file upload. */
export type Upload = any;
export interface GadgemonSort {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the similar field. Defaults to ascending (smallest value first). */
    similar?: SortOrder | null;
    /** Sort the results by the type field. Defaults to ascending (smallest value first). */
    type?: SortOrder | null;
    /** Sort the results by the name field. Defaults to ascending (smallest value first). */
    name?: SortOrder | null;
}
export interface GadgemonFilter {
    AND?: (GadgemonFilter | null)[];
    OR?: (GadgemonFilter | null)[];
    NOT?: (GadgemonFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    similar?: StringFilter | null;
    type?: SingleEnumFilter | null;
    name?: StringFilter | null;
}
export interface IDFilter {
    equals?: (Scalars['GadgetID'] | null) | null;
    notEquals?: (Scalars['GadgetID'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['GadgetID'] | null) | null)[];
    notIn?: ((Scalars['GadgetID'] | null) | null)[];
    lessThan?: (Scalars['GadgetID'] | null) | null;
    lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;
    greaterThan?: (Scalars['GadgetID'] | null) | null;
    greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
}
export interface DateTimeFilter {
    equals?: Date | Scalars['ISO8601DateString'] | null;
    notEquals?: Date | Scalars['ISO8601DateString'] | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: (Date | Scalars['ISO8601DateString'] | null)[];
    notIn?: (Date | Scalars['ISO8601DateString'] | null)[];
    lessThan?: Date | Scalars['ISO8601DateString'] | null;
    lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
    greaterThan?: Date | Scalars['ISO8601DateString'] | null;
    greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
    before?: Date | Scalars['ISO8601DateString'] | null;
    after?: Date | Scalars['ISO8601DateString'] | null;
}
export interface StringFilter {
    equals?: (Scalars['String'] | null) | null;
    notEquals?: (Scalars['String'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['String'] | null) | null)[];
    notIn?: ((Scalars['String'] | null) | null)[];
    lessThan?: (Scalars['String'] | null) | null;
    lessThanOrEqual?: (Scalars['String'] | null) | null;
    greaterThan?: (Scalars['String'] | null) | null;
    greaterThanOrEqual?: (Scalars['String'] | null) | null;
    startsWith?: (Scalars['String'] | null) | null;
}
export interface SingleEnumFilter {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['String'] | null) | null;
    notEquals?: (Scalars['String'] | null) | null;
    in?: ((Scalars['String'] | null) | null)[];
}
export interface UserSort {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the lastName field. Defaults to ascending (smallest value first). */
    lastName?: SortOrder | null;
    /** Sort the results by the firstName field. Defaults to ascending (smallest value first). */
    firstName?: SortOrder | null;
    /** Sort the results by the googleImageUrl field. Defaults to ascending (smallest value first). */
    googleImageUrl?: SortOrder | null;
    /** Sort the results by the lastSignedIn field. Defaults to ascending (smallest value first). */
    lastSignedIn?: SortOrder | null;
    /** Sort the results by the email field. Defaults to ascending (smallest value first). */
    email?: SortOrder | null;
}
export interface UserFilter {
    AND?: (UserFilter | null)[];
    OR?: (UserFilter | null)[];
    NOT?: (UserFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    lastName?: StringFilter | null;
    firstName?: StringFilter | null;
    googleImageUrl?: StringFilter | null;
    lastSignedIn?: DateTimeFilter | null;
    email?: StringFilter | null;
}
export interface CreateGadgemonInput {
    sprite?: StoredFileInput | null;
    similar?: (Scalars['String'] | null) | null;
    type?: GadgemonTypeEnum | null;
    name?: (Scalars['String'] | null) | null;
}
export interface StoredFileInput {
    /** Sets the file contents using this string, interpreting the string as base64 encoded bytes. This is useful for creating files quickly and easily if you have the file contents available already, but, it doesn't support files larger than 10MB, and is slower to process for the backend. Using multipart file uploads or direct-to-storage file uploads is preferable. */
    base64?: (Scalars['String'] | null) | null;
    /** Sets the file contents using binary bytes sent along side a GraphQL mutation as a multipart POST request. Gadget expects this multipart POST request to be formatted according to the GraphQL multipart request spec defined at https://github.com/jaydenseric/graphql-multipart-request-spec. Sending files as a multipart POST requests is supported natively by the generated Gadget JS client using File objects as variables in API calls. This method supports files up to 100MB. */
    file?: (Scalars['Upload'] | null) | null;
    /** Sets the file contents by fetching a remote URL and saving a copy to cloud storage. File downloads happen as the request is processed so they can be validated, which means large files can take some time to download from the existing URL. If the file can't be fetched from this URL, the action will fail. */
    copyURL?: (Scalars['URL'] | null) | null;
    /** Sets the file contents using a token from a separate upload request made with the Gadget storage service. Uploading files while a user is completing the rest of a form gives a great user experience and supports much larger files, but requires client side code to complete the upload, and then pass the returned token for this field. */
    directUploadToken?: (Scalars['String'] | null) | null;
    /** Sets this file's mime type, which will then be used when serving the file during read requests as the `Content-Type` HTTP header. If not set, Gadget will infer a content type based on the file's contents. */
    mimeType?: (Scalars['String'] | null) | null;
    /** Sets this file's stored name, which will then be used as the file name when serving the file during read requests. If not set, Gadget will infer a filename if possible. */
    fileName?: (Scalars['String'] | null) | null;
}
export interface UpdateGadgemonInput {
    sprite?: StoredFileInput | null;
    similar?: (Scalars['String'] | null) | null;
    type?: GadgemonTypeEnum | null;
    name?: (Scalars['String'] | null) | null;
}
export interface UpdateUserInput {
    lastName?: (Scalars['String'] | null) | null;
    firstName?: (Scalars['String'] | null) | null;
    googleImageUrl?: (Scalars['String'] | null) | null;
    lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
    email?: (Scalars['String'] | null) | null;
}
export interface SignOutUserInput {
    lastName?: (Scalars['String'] | null) | null;
    firstName?: (Scalars['String'] | null) | null;
    googleImageUrl?: (Scalars['String'] | null) | null;
    lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
    email?: (Scalars['String'] | null) | null;
}
export interface InternalGadgemonInput {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    sprite?: InternalStoredFileInput | null;
    similar?: (Scalars['String'] | null) | null;
    type?: GadgemonTypeEnum | null;
    name?: (Scalars['String'] | null) | null;
}
export interface InternalStoredFileInput {
    /** An opaque identifier used by Gadget internally to uniquely identify this stored file */
    storageToken: (Scalars['String'] | null);
    /** Byte size to report in API calls */
    byteSize: (Scalars['Int'] | null);
    /** File mime type to use when serving the file or making resize operations available */
    mimeType: (Scalars['String'] | null);
    /** Sets this file's stored name, which will then be used when serving the file during read requests. If not set, Gadget will infer a filename if possible. */
    fileName: (Scalars['String'] | null);
    /** Has no effect. Convenience property to allow sending an internal metadata blob back to the Internal API, but doesn't do anything. URLs generated by Gadget expire and are not stored. */
    url?: (Scalars['String'] | null) | null;
}
export interface AppGraphQLTriggerMutationContext {
    /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
    sessionID?: (Scalars['GadgetID'] | null) | null;
}
export interface InternalSessionInput {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: ((Scalars['String'] | null))[];
    user?: InternalBelongsToInput | null;
}
export interface InternalBelongsToInput {
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
}
export interface InternalUserInput {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: ((Scalars['String'] | null))[];
    lastName?: (Scalars['String'] | null) | null;
    firstName?: (Scalars['String'] | null) | null;
    googleImageUrl?: (Scalars['String'] | null) | null;
    lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
    email?: (Scalars['String'] | null) | null;
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
    CurrencyAmount: string;
    /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
    ISO8601DateString: string;
    /** A file object produced by a browser for uploading to cloud storage */
    Upload: File;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: JSONObject;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: JSONValue;
    /** The ID of a record in Gadget */
    GadgetID: string;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: Date;
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number;
    /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
    URL: string;
    /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
    EmailAddress: string;
    /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
    HydrationPlan: unknown;
    /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
    RecordState: (string | {
        [key: string]: Scalars['RecordState'];
    });
}
/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
    __typename: 'SimpleError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this error. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error */
    stack: (Scalars['String'] | null);
}
export type AvailableSimpleErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this error. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error */
    stack?: boolean | null | undefined;
};
export interface ExecutionError {
    __typename: 'SimpleError' | 'InvalidRecordError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this error. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error. Only available for super users. */
    stack: (Scalars['String'] | null);
}
export type AvailableExecutionErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this error. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error. Only available for super users. */
    stack?: boolean | null | undefined;
};
/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
    __typename: 'InvalidRecordError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this InvalidRecordError. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error */
    stack: (Scalars['String'] | null);
    /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
    validationErrorsByField: (Scalars['JSONObject'] | null);
    /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
    validationErrors: InvalidFieldError[];
    /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
    record: (Scalars['JSONObject'] | null);
    /** The model of the record which failed validation */
    model: (GadgetModel | null);
}
export type AvailableInvalidRecordErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this InvalidRecordError. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error */
    stack?: boolean | null | undefined;
    /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
    validationErrorsByField?: boolean | null | undefined;
    /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
    validationErrors?: AvailableInvalidFieldErrorSelection;
    /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
    record?: boolean | null | undefined;
    /** The model of the record which failed validation */
    model?: AvailableGadgetModelSelection;
};
/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export interface InvalidFieldError {
    __typename: 'InvalidFieldError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The apiIdentifier of the field this error occurred on. */
    apiIdentifier: Scalars['String'];
}
export type AvailableInvalidFieldErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The apiIdentifier of the field this error occurred on. */
    apiIdentifier?: boolean | null | undefined;
};
export interface GadgetModel {
    __typename: 'GadgetModel';
    key: Scalars['String'];
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    filterable: Scalars['Boolean'];
    sortable: Scalars['Boolean'];
    searchable: Scalars['Boolean'];
    fields: GadgetField[];
    actions: GadgetAction[];
    pluralName: Scalars['String'];
    pluralApiIdentifier: Scalars['String'];
    currentSingletonApiIdentifier: (Scalars['String'] | null);
    initialCreatedState: (Scalars['String'] | null);
}
export type AvailableGadgetModelSelection = {
    __typename?: boolean | null | undefined;
    key?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    filterable?: boolean | null | undefined;
    sortable?: boolean | null | undefined;
    searchable?: boolean | null | undefined;
    fields?: AvailableGadgetFieldSelection;
    actions?: AvailableGadgetActionSelection;
    pluralName?: boolean | null | undefined;
    pluralApiIdentifier?: boolean | null | undefined;
    currentSingletonApiIdentifier?: boolean | null | undefined;
    initialCreatedState?: boolean | null | undefined;
};
export interface GadgetField {
    __typename: 'GadgetField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: Scalars['String'];
    configuration: (GadgetFieldConfiguration | null);
    isUniqueField: Scalars['Boolean'];
    sortable: Scalars['Boolean'];
    filterable: Scalars['Boolean'];
    examples: GadgetFieldExamples;
}
export type AvailableGadgetFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigurationSelection;
    isUniqueField?: boolean | null | undefined;
    sortable?: boolean | null | undefined;
    filterable?: boolean | null | undefined;
    examples?: AvailableGadgetFieldExamplesSelection;
};
export interface GadgetFieldConfiguration {
    __typename: 'GadgetFieldConfiguration';
    relatedModelKey: (Scalars['String'] | null);
}
export type AvailableGadgetFieldConfigurationSelection = {
    __typename?: boolean | null | undefined;
    relatedModelKey?: boolean | null | undefined;
};
export interface GadgetFieldExamples {
    __typename: 'GadgetFieldExamples';
    linkExistingChild: (GadgetFieldUsageExample | null);
    linkNewChild: (GadgetFieldUsageExample | null);
    linkToExistingParent: (GadgetFieldUsageExample | null);
    createNestedInParent: (GadgetFieldUsageExample | null);
}
export type AvailableGadgetFieldExamplesSelection = {
    __typename?: boolean | null | undefined;
    linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;
    linkNewChild?: AvailableGadgetFieldUsageExampleSelection;
    linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;
    createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};
export interface GadgetFieldUsageExample {
    __typename: 'GadgetFieldUsageExample';
    exampleGraphQLMutation: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
}
export type AvailableGadgetFieldUsageExampleSelection = {
    __typename?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
export interface GadgetAction {
    __typename: 'GadgetAction';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    requiresInput: Scalars['Boolean'];
    acceptsInput: Scalars['Boolean'];
    /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
    hasDeleteRecordEffect: Scalars['Boolean'];
    /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
    hasCreateOrUpdateEffect: Scalars['Boolean'];
    isDeleteAction: Scalars['Boolean'];
    isCreateOrUpdateAction: Scalars['Boolean'];
    operatesWithRecordIdentity: Scalars['Boolean'];
    possibleTransitions: Scalars['JSONObject'];
    availableInBulk: Scalars['Boolean'];
    bulkApiIdentifier: (Scalars['String'] | null);
    hasAmbiguousIdentifier: Scalars['Boolean'];
    triggers: GadgetTrigger[];
    examples: (GadgetActionGraphQLType | null);
}
export type AvailableGadgetActionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    requiresInput?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
    hasDeleteRecordEffect?: boolean | null | undefined;
    /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
    hasCreateOrUpdateEffect?: boolean | null | undefined;
    isDeleteAction?: boolean | null | undefined;
    isCreateOrUpdateAction?: boolean | null | undefined;
    operatesWithRecordIdentity?: boolean | null | undefined;
    possibleTransitions?: boolean | null | undefined;
    availableInBulk?: boolean | null | undefined;
    bulkApiIdentifier?: boolean | null | undefined;
    hasAmbiguousIdentifier?: boolean | null | undefined;
    triggers?: AvailableGadgetTriggerSelection;
    examples?: AvailableGadgetActionGraphQLTypeSelection;
};
export interface GadgetTrigger {
    __typename: 'GadgetTrigger';
    specID: Scalars['String'];
}
export type AvailableGadgetTriggerSelection = {
    __typename?: boolean | null | undefined;
    specID?: boolean | null | undefined;
};
export interface GadgetActionGraphQLType {
    __typename: 'GadgetActionGraphQLType';
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation: Scalars['String'];
    exampleGraphQLMutation: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    outputGraphQLTypeSDL: Scalars['String'];
    inputTypeScriptInterface: (Scalars['String'] | null);
    outputTypeScriptInterface: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation: (Scalars['String'] | null);
    exampleBulkGraphQLMutation: (Scalars['String'] | null);
    exampleBulkImperativeInvocation: Scalars['String'];
    exampleBulkReactHook: Scalars['String'];
    bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
}
export type AvailableGadgetActionGraphQLTypeSelection = {
    __typename?: boolean | null | undefined;
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    outputGraphQLTypeSDL?: boolean | null | undefined;
    inputTypeScriptInterface?: boolean | null | undefined;
    outputTypeScriptInterface?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation?: boolean | null | undefined;
    exampleBulkGraphQLMutation?: boolean | null | undefined;
    exampleBulkImperativeInvocation?: boolean | null | undefined;
    exampleBulkReactHook?: boolean | null | undefined;
    bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};
export interface Query {
    __typename: 'Query';
    gadgemon: (Gadgemon | null);
    gadgemons: GadgemonConnection;
    session: (Session | null);
    sessions: SessionConnection;
    user: (User | null);
    users: UserConnection;
    internal: (InternalQueries | null);
    currentSession: (Session | null);
}
export type AvailableQuerySelection = {
    __typename?: boolean | null | undefined;
    gadgemon?: AvailableGadgemonSelection;
    gadgemons?: AvailableGadgemonConnectionSelection;
    session?: AvailableSessionSelection;
    sessions?: AvailableSessionConnectionSelection;
    user?: AvailableUserSelection;
    users?: AvailableUserConnectionSelection;
    internal?: AvailableInternalQueriesSelection;
    currentSession?: AvailableSessionSelection;
};
export interface Gadgemon {
    __typename: 'Gadgemon';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    sprite: (StoredFile | null);
    similar: (Scalars['String'] | null);
    type: GadgemonTypeEnum;
    name: (Scalars['String'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
}
export type AvailableGadgemonSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    sprite?: AvailableStoredFileSelection;
    similar?: boolean | null | undefined;
    type?: boolean | null | undefined;
    name?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** One file that has been stored and attached to a record */
export interface StoredFile {
    __typename: 'StoredFile';
    /** The URL to retrieve the attached file. Gets the original, unmodified file. */
    url: Scalars['String'];
    /** The content type of the file. */
    mimeType: Scalars['String'];
    /** The size of this file in bytes. */
    byteSize: Scalars['Int'];
    /** The size of this file in bytes. */
    humanSize: Scalars['String'];
    /** The file name of this file. */
    fileName: Scalars['String'];
}
export type AvailableStoredFileSelection = {
    __typename?: boolean | null | undefined;
    /** The URL to retrieve the attached file. Gets the original, unmodified file. */
    url?: boolean | null | undefined;
    /** The content type of the file. */
    mimeType?: boolean | null | undefined;
    /** The size of this file in bytes. */
    byteSize?: boolean | null | undefined;
    /** The size of this file in bytes. */
    humanSize?: boolean | null | undefined;
    /** The file name of this file. */
    fileName?: boolean | null | undefined;
};
/** A connection to a list of Gadgemon items. */
export interface GadgemonConnection {
    __typename: 'GadgemonConnection';
    /** A list of edges. */
    edges: GadgemonEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
}
export type AvailableGadgemonConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableGadgemonEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Gadgemon connection. */
export interface GadgemonEdge {
    __typename: 'GadgemonEdge';
    /** The item at the end of the edge */
    node: Gadgemon;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
}
export type AvailableGadgemonEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableGadgemonSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** Information about pagination in a connection. */
export interface PageInfo {
    __typename: 'PageInfo';
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null);
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null);
}
export type AvailablePageInfoSelection = {
    __typename?: boolean | null | undefined;
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | null | undefined;
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | null | undefined;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | null | undefined;
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | null | undefined;
};
export interface Session {
    __typename: 'Session';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: (Scalars['GadgetID'] | null);
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    roles: Role[];
    user: (User | null);
    userId: (Scalars['GadgetID'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
}
export type AvailableSessionSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    roles?: AvailableRoleSelection;
    user?: AvailableUserSelection;
    userId?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export interface Role {
    __typename: 'Role';
    /** The stable identifier for this role. Null if the role has since been deleted. */
    key: Scalars['String'];
    /** The human readable name for this role. Can be changed. */
    name: Scalars['String'];
}
export type AvailableRoleSelection = {
    __typename?: boolean | null | undefined;
    /** The stable identifier for this role. Null if the role has since been deleted. */
    key?: boolean | null | undefined;
    /** The human readable name for this role. Can be changed. */
    name?: boolean | null | undefined;
};
export interface User {
    __typename: 'User';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    roles: Role[];
    lastName: (Scalars['String'] | null);
    firstName: (Scalars['String'] | null);
    googleImageUrl: (Scalars['URL'] | null);
    lastSignedIn: (Scalars['DateTime'] | null);
    email: Scalars['EmailAddress'];
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
}
export type AvailableUserSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    roles?: AvailableRoleSelection;
    lastName?: boolean | null | undefined;
    firstName?: boolean | null | undefined;
    googleImageUrl?: boolean | null | undefined;
    lastSignedIn?: boolean | null | undefined;
    email?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of Session items. */
export interface SessionConnection {
    __typename: 'SessionConnection';
    /** A list of edges. */
    edges: SessionEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
}
export type AvailableSessionConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableSessionEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Session connection. */
export interface SessionEdge {
    __typename: 'SessionEdge';
    /** The item at the end of the edge */
    node: Session;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
}
export type AvailableSessionEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableSessionSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of User items. */
export interface UserConnection {
    __typename: 'UserConnection';
    /** A list of edges. */
    edges: UserEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
}
export type AvailableUserConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableUserEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a User connection. */
export interface UserEdge {
    __typename: 'UserEdge';
    /** The item at the end of the edge */
    node: User;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
}
export type AvailableUserEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableUserSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export interface InternalQueries {
    __typename: 'InternalQueries';
    gadgemon: (InternalGadgemonRecord | null);
    listGadgemon: InternalGadgemonRecordConnection;
    session: (InternalSessionRecord | null);
    listSession: InternalSessionRecordConnection;
    user: (InternalUserRecord | null);
    listUser: InternalUserRecordConnection;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails: (Scalars['JSONObject'] | null);
}
export type AvailableInternalQueriesSelection = {
    __typename?: boolean | null | undefined;
    gadgemon?: boolean | null | undefined;
    listGadgemon?: AvailableInternalGadgemonRecordConnectionSelection;
    session?: boolean | null | undefined;
    listSession?: AvailableInternalSessionRecordConnectionSelection;
    user?: boolean | null | undefined;
    listUser?: AvailableInternalUserRecordConnectionSelection;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails?: boolean | null | undefined;
};
/** A connection to a list of InternalGadgemonRecord items. */
export interface InternalGadgemonRecordConnection {
    __typename: 'InternalGadgemonRecordConnection';
    /** A list of edges. */
    edges: InternalGadgemonRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
}
export type AvailableInternalGadgemonRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalGadgemonRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalGadgemonRecord connection. */
export interface InternalGadgemonRecordEdge {
    __typename: 'InternalGadgemonRecordEdge';
    /** The item at the end of the edge */
    node: InternalGadgemonRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
}
export type AvailableInternalGadgemonRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalSessionRecord items. */
export interface InternalSessionRecordConnection {
    __typename: 'InternalSessionRecordConnection';
    /** A list of edges. */
    edges: InternalSessionRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
}
export type AvailableInternalSessionRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalSessionRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalSessionRecord connection. */
export interface InternalSessionRecordEdge {
    __typename: 'InternalSessionRecordEdge';
    /** The item at the end of the edge */
    node: InternalSessionRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
}
export type AvailableInternalSessionRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalUserRecord items. */
export interface InternalUserRecordConnection {
    __typename: 'InternalUserRecordConnection';
    /** A list of edges. */
    edges: InternalUserRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
}
export type AvailableInternalUserRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalUserRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalUserRecord connection. */
export interface InternalUserRecordEdge {
    __typename: 'InternalUserRecordEdge';
    /** The item at the end of the edge */
    node: InternalUserRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
}
export type AvailableInternalUserRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** Represents one of the roles an identity in the system can be entitled to */
export interface GadgetRole {
    __typename: 'GadgetRole';
    key: Scalars['String'];
    name: Scalars['String'];
    selectable: Scalars['Boolean'];
    order: Scalars['Int'];
}
export type AvailableGadgetRoleSelection = {
    __typename?: boolean | null | undefined;
    key?: boolean | null | undefined;
    name?: boolean | null | undefined;
    selectable?: boolean | null | undefined;
    order?: boolean | null | undefined;
};
export interface GadgetGlobalAction {
    __typename: 'GadgetGlobalAction';
    apiIdentifier: Scalars['String'];
    requiresInput: Scalars['Boolean'];
    acceptsInput: Scalars['Boolean'];
    triggers: GadgetTrigger[];
    examples: (GadgetGlobalActionGraphQLType | null);
}
export type AvailableGadgetGlobalActionSelection = {
    __typename?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    requiresInput?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    triggers?: AvailableGadgetTriggerSelection;
    examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};
export interface GadgetGlobalActionGraphQLType {
    __typename: 'GadgetGlobalActionGraphQLType';
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation: Scalars['String'];
    exampleGraphQLMutation: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    outputGraphQLTypeSDL: Scalars['String'];
    inputTypeScriptInterface: (Scalars['String'] | null);
    outputTypeScriptInterface: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
}
export type AvailableGadgetGlobalActionGraphQLTypeSelection = {
    __typename?: boolean | null | undefined;
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    outputGraphQLTypeSDL?: boolean | null | undefined;
    inputTypeScriptInterface?: boolean | null | undefined;
    outputTypeScriptInterface?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
/** One upload target to use for the Direct Upload style of sending files to Gadget */
export interface DirectUploadToken {
    __typename: 'DirectUploadToken';
    /** The URL to upload a file to. */
    url: Scalars['String'];
    /** The token to pass to an action to reference the uploaded file. */
    token: Scalars['String'];
}
export type AvailableDirectUploadTokenSelection = {
    __typename?: boolean | null | undefined;
    /** The URL to upload a file to. */
    url?: boolean | null | undefined;
    /** The token to pass to an action to reference the uploaded file. */
    token?: boolean | null | undefined;
};
export interface Mutation {
    __typename: 'Mutation';
    createGadgemon: (CreateGadgemonResult | null);
    updateGadgemon: (UpdateGadgemonResult | null);
    deleteGadgemon: (DeleteGadgemonResult | null);
    bulkDeleteGadgemons: (BulkDeleteGadgemonsResult | null);
    updateUser: (UpdateUserResult | null);
    deleteUser: (DeleteUserResult | null);
    bulkDeleteUsers: (BulkDeleteUsersResult | null);
    signOutUser: (SignOutUserResult | null);
    internal: (InternalMutations | null);
}
export type AvailableMutationSelection = {
    __typename?: boolean | null | undefined;
    createGadgemon?: AvailableCreateGadgemonResultSelection;
    updateGadgemon?: AvailableUpdateGadgemonResultSelection;
    deleteGadgemon?: AvailableDeleteGadgemonResultSelection;
    bulkDeleteGadgemons?: AvailableBulkDeleteGadgemonsResultSelection;
    updateUser?: AvailableUpdateUserResultSelection;
    deleteUser?: AvailableDeleteUserResultSelection;
    bulkDeleteUsers?: AvailableBulkDeleteUsersResultSelection;
    signOutUser?: AvailableSignOutUserResultSelection;
    internal?: AvailableInternalMutationsSelection;
};
export interface CreateGadgemonResult {
    __typename: 'CreateGadgemonResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    gadgemon: (Gadgemon | null);
}
export type AvailableCreateGadgemonResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    gadgemon?: AvailableGadgemonSelection;
};
export interface UpdateGadgemonResult {
    __typename: 'UpdateGadgemonResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    gadgemon: (Gadgemon | null);
}
export type AvailableUpdateGadgemonResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    gadgemon?: AvailableGadgemonSelection;
};
export interface DeleteGadgemonResult {
    __typename: 'DeleteGadgemonResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
}
export type AvailableDeleteGadgemonResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export interface BulkDeleteGadgemonsResult {
    __typename: 'BulkDeleteGadgemonsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
}
export type AvailableBulkDeleteGadgemonsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export interface UpdateUserResult {
    __typename: 'UpdateUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (User | null);
}
export type AvailableUpdateUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: AvailableUserSelection;
};
export interface DeleteUserResult {
    __typename: 'DeleteUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
}
export type AvailableDeleteUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export interface BulkDeleteUsersResult {
    __typename: 'BulkDeleteUsersResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
}
export type AvailableBulkDeleteUsersResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export interface SignOutUserResult {
    __typename: 'SignOutUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (User | null);
}
export type AvailableSignOutUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: AvailableUserSelection;
};
export interface InternalMutations {
    __typename: 'InternalMutations';
    startTransaction: Scalars['String'];
    commitTransaction: Scalars['String'];
    rollbackTransaction: Scalars['String'];
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock: LockOperationResult;
    createGadgemon: (InternalCreateGadgemonResult | null);
    updateGadgemon: (InternalUpdateGadgemonResult | null);
    deleteGadgemon: (InternalDeleteGadgemonResult | null);
    deleteManyGadgemon: (InternalDeleteManyGadgemonResult | null);
    bulkCreateGadgemons: (InternalBulkCreateGadgemonsResult | null);
    triggerCreateGadgemon: (CreateGadgemonResult | null);
    triggerUpdateGadgemon: (UpdateGadgemonResult | null);
    triggerDeleteGadgemon: (DeleteGadgemonResult | null);
    createSession: (InternalCreateSessionResult | null);
    updateSession: (InternalUpdateSessionResult | null);
    deleteSession: (InternalDeleteSessionResult | null);
    deleteManySession: (InternalDeleteManySessionResult | null);
    bulkCreateSessions: (InternalBulkCreateSessionsResult | null);
    createUser: (InternalCreateUserResult | null);
    updateUser: (InternalUpdateUserResult | null);
    deleteUser: (InternalDeleteUserResult | null);
    deleteManyUser: (InternalDeleteManyUserResult | null);
    bulkCreateUsers: (InternalBulkCreateUsersResult | null);
    triggerUpdateUser: (UpdateUserResult | null);
    triggerDeleteUser: (DeleteUserResult | null);
    triggerSignUpUser: (SignUpUserResult | null);
    triggerSignInUser: (SignInUserResult | null);
    triggerSignOutUser: (SignOutUserResult | null);
}
export type AvailableInternalMutationsSelection = {
    __typename?: boolean | null | undefined;
    startTransaction?: boolean | null | undefined;
    commitTransaction?: boolean | null | undefined;
    rollbackTransaction?: boolean | null | undefined;
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock?: AvailableLockOperationResultSelection;
    createGadgemon?: AvailableInternalCreateGadgemonResultSelection;
    updateGadgemon?: AvailableInternalUpdateGadgemonResultSelection;
    deleteGadgemon?: AvailableInternalDeleteGadgemonResultSelection;
    deleteManyGadgemon?: AvailableInternalDeleteManyGadgemonResultSelection;
    bulkCreateGadgemons?: AvailableInternalBulkCreateGadgemonsResultSelection;
    triggerCreateGadgemon?: AvailableCreateGadgemonResultSelection;
    triggerUpdateGadgemon?: AvailableUpdateGadgemonResultSelection;
    triggerDeleteGadgemon?: AvailableDeleteGadgemonResultSelection;
    createSession?: AvailableInternalCreateSessionResultSelection;
    updateSession?: AvailableInternalUpdateSessionResultSelection;
    deleteSession?: AvailableInternalDeleteSessionResultSelection;
    deleteManySession?: AvailableInternalDeleteManySessionResultSelection;
    bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;
    createUser?: AvailableInternalCreateUserResultSelection;
    updateUser?: AvailableInternalUpdateUserResultSelection;
    deleteUser?: AvailableInternalDeleteUserResultSelection;
    deleteManyUser?: AvailableInternalDeleteManyUserResultSelection;
    bulkCreateUsers?: AvailableInternalBulkCreateUsersResultSelection;
    triggerUpdateUser?: AvailableUpdateUserResultSelection;
    triggerDeleteUser?: AvailableDeleteUserResultSelection;
    triggerSignUpUser?: AvailableSignUpUserResultSelection;
    triggerSignInUser?: AvailableSignInUserResultSelection;
    triggerSignOutUser?: AvailableSignOutUserResultSelection;
};
export interface LockOperationResult {
    __typename: 'LockOperationResult';
    /** Whether the lock operation succeeded */
    success: Scalars['Boolean'];
    /** Any errors encountered during the locking/unlocking operation */
    errors: ExecutionError[];
}
export type AvailableLockOperationResultSelection = {
    __typename?: boolean | null | undefined;
    /** Whether the lock operation succeeded */
    success?: boolean | null | undefined;
    /** Any errors encountered during the locking/unlocking operation */
    errors?: AvailableExecutionErrorSelection;
};
export interface InternalCreateGadgemonResult {
    __typename: 'InternalCreateGadgemonResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    gadgemon: (InternalGadgemonRecord | null);
}
export type AvailableInternalCreateGadgemonResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    gadgemon?: boolean | null | undefined;
};
export interface InternalUpdateGadgemonResult {
    __typename: 'InternalUpdateGadgemonResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    gadgemon: (InternalGadgemonRecord | null);
}
export type AvailableInternalUpdateGadgemonResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    gadgemon?: boolean | null | undefined;
};
export interface InternalDeleteGadgemonResult {
    __typename: 'InternalDeleteGadgemonResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    gadgemon: (InternalGadgemonRecord | null);
}
export type AvailableInternalDeleteGadgemonResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    gadgemon?: boolean | null | undefined;
};
export interface InternalDeleteManyGadgemonResult {
    __typename: 'InternalDeleteManyGadgemonResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
}
export type AvailableInternalDeleteManyGadgemonResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export interface InternalBulkCreateGadgemonsResult {
    __typename: 'InternalBulkCreateGadgemonsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    gadgemons: (InternalGadgemonRecord | null)[];
}
export type AvailableInternalBulkCreateGadgemonsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    gadgemons?: boolean | null | undefined;
};
export interface InternalCreateSessionResult {
    __typename: 'InternalCreateSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
}
export type AvailableInternalCreateSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export interface InternalUpdateSessionResult {
    __typename: 'InternalUpdateSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
}
export type AvailableInternalUpdateSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export interface InternalDeleteSessionResult {
    __typename: 'InternalDeleteSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
}
export type AvailableInternalDeleteSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export interface InternalDeleteManySessionResult {
    __typename: 'InternalDeleteManySessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
}
export type AvailableInternalDeleteManySessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export interface InternalBulkCreateSessionsResult {
    __typename: 'InternalBulkCreateSessionsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    sessions: (InternalSessionRecord | null)[];
}
export type AvailableInternalBulkCreateSessionsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    sessions?: boolean | null | undefined;
};
export interface InternalCreateUserResult {
    __typename: 'InternalCreateUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (InternalUserRecord | null);
}
export type AvailableInternalCreateUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: boolean | null | undefined;
};
export interface InternalUpdateUserResult {
    __typename: 'InternalUpdateUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (InternalUserRecord | null);
}
export type AvailableInternalUpdateUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: boolean | null | undefined;
};
export interface InternalDeleteUserResult {
    __typename: 'InternalDeleteUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (InternalUserRecord | null);
}
export type AvailableInternalDeleteUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: boolean | null | undefined;
};
export interface InternalDeleteManyUserResult {
    __typename: 'InternalDeleteManyUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
}
export type AvailableInternalDeleteManyUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export interface InternalBulkCreateUsersResult {
    __typename: 'InternalBulkCreateUsersResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    users: (InternalUserRecord | null)[];
}
export type AvailableInternalBulkCreateUsersResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    users?: boolean | null | undefined;
};
export interface SignUpUserResult {
    __typename: 'SignUpUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (User | null);
}
export type AvailableSignUpUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: AvailableUserSelection;
};
export interface SignInUserResult {
    __typename: 'SignInUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (User | null);
}
export type AvailableSignInUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: AvailableUserSelection;
};
export type ExplicitNestingRequired = never;
export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
    [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;
export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined ? never : Schema extends (infer T)[] ? Select<T, Selection>[] : Schema extends null ? Select<Exclude<Schema, null>, Selection> | null : {
    [Key in keyof Selection & keyof Schema]: Selection[Key] extends true ? Schema[Key] : Selection[Key] extends FieldSelection ? Select<Schema[Key], Selection[Key]> : never;
};
export {};
