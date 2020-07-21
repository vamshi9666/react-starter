import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "admins" */
export type Admins = {
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "admins" */
export type Admins_Aggregate = {
  aggregate?: Maybe<Admins_Aggregate_Fields>;
  nodes: Array<Admins>;
};

/** aggregate fields of "admins" */
export type Admins_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Admins_Max_Fields>;
  min?: Maybe<Admins_Min_Fields>;
};


/** aggregate fields of "admins" */
export type Admins_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Admins_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "admins" */
export type Admins_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Admins_Max_Order_By>;
  min?: Maybe<Admins_Min_Order_By>;
};

/** input type for inserting array relation for remote table "admins" */
export type Admins_Arr_Rel_Insert_Input = {
  data: Array<Admins_Insert_Input>;
  on_conflict?: Maybe<Admins_On_Conflict>;
};

/** Boolean expression to filter rows from the table "admins". All fields are combined with a logical 'AND'. */
export type Admins_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Admins_Bool_Exp>>>;
  _not?: Maybe<Admins_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Admins_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "admins" */
export enum Admins_Constraint {
  /** unique or primary key constraint */
  AdminsPkey = 'admins_pkey'
}

/** input type for inserting data into table "admins" */
export type Admins_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Admins_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "admins" */
export type Admins_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Admins_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "admins" */
export type Admins_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "admins" */
export type Admins_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Admins>;
};

/** input type for inserting object relation for remote table "admins" */
export type Admins_Obj_Rel_Insert_Input = {
  data: Admins_Insert_Input;
  on_conflict?: Maybe<Admins_On_Conflict>;
};

/** on conflict condition type for table "admins" */
export type Admins_On_Conflict = {
  constraint: Admins_Constraint;
  update_columns: Array<Admins_Update_Column>;
  where?: Maybe<Admins_Bool_Exp>;
};

/** ordering options when selecting data from "admins" */
export type Admins_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "admins" */
export type Admins_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "admins" */
export enum Admins_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "admins" */
export type Admins_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "admins" */
export enum Admins_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "admins" */
  delete_admins?: Maybe<Admins_Mutation_Response>;
  /** delete single row from the table: "admins" */
  delete_admins_by_pk?: Maybe<Admins>;
  /** insert data into the table: "admins" */
  insert_admins?: Maybe<Admins_Mutation_Response>;
  /** insert a single row into the table: "admins" */
  insert_admins_one?: Maybe<Admins>;
  /** update data of the table: "admins" */
  update_admins?: Maybe<Admins_Mutation_Response>;
  /** update single row of the table: "admins" */
  update_admins_by_pk?: Maybe<Admins>;
};


/** mutation root */
export type Mutation_RootDelete_AdminsArgs = {
  where: Admins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Admins_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AdminsArgs = {
  objects: Array<Admins_Insert_Input>;
  on_conflict?: Maybe<Admins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Admins_OneArgs = {
  object: Admins_Insert_Input;
  on_conflict?: Maybe<Admins_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AdminsArgs = {
  _set?: Maybe<Admins_Set_Input>;
  where: Admins_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Admins_By_PkArgs = {
  _set?: Maybe<Admins_Set_Input>;
  pk_columns: Admins_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  /** fetch data from the table: "admins" */
  admins: Array<Admins>;
  /** fetch aggregated fields from the table: "admins" */
  admins_aggregate: Admins_Aggregate;
  /** fetch data from the table: "admins" using primary key columns */
  admins_by_pk?: Maybe<Admins>;
};


/** query root */
export type Query_RootAdminsArgs = {
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** query root */
export type Query_RootAdmins_AggregateArgs = {
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** query root */
export type Query_RootAdmins_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  /** fetch data from the table: "admins" */
  admins: Array<Admins>;
  /** fetch aggregated fields from the table: "admins" */
  admins_aggregate: Admins_Aggregate;
  /** fetch data from the table: "admins" using primary key columns */
  admins_by_pk?: Maybe<Admins>;
};


/** subscription root */
export type Subscription_RootAdminsArgs = {
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAdmins_AggregateArgs = {
  distinct_on?: Maybe<Array<Admins_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Admins_Order_By>>;
  where?: Maybe<Admins_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAdmins_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AllAdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAdminsQuery = { admins: Array<Pick<Admins, 'id'>> };


export const AllAdminsDocument = gql`
    query allAdmins {
  admins {
    id
  }
}
    `;
export type AllAdminsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllAdminsQuery, AllAdminsQueryVariables>, 'query'>;

    export const AllAdminsComponent = (props: AllAdminsComponentProps) => (
      <ApolloReactComponents.Query<AllAdminsQuery, AllAdminsQueryVariables> query={AllAdminsDocument} {...props} />
    );
    
export type AllAdminsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllAdminsQuery, AllAdminsQueryVariables>
    } & TChildProps;
export function withAllAdmins<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllAdminsQuery,
  AllAdminsQueryVariables,
  AllAdminsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllAdminsQuery, AllAdminsQueryVariables, AllAdminsProps<TChildProps, TDataName>>(AllAdminsDocument, {
      alias: 'allAdmins',
      ...operationOptions
    });
};

/**
 * __useAllAdminsQuery__
 *
 * To run a query within a React component, call `useAllAdminsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAdminsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAdminsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllAdminsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllAdminsQuery, AllAdminsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllAdminsQuery, AllAdminsQueryVariables>(AllAdminsDocument, baseOptions);
      }
export function useAllAdminsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllAdminsQuery, AllAdminsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllAdminsQuery, AllAdminsQueryVariables>(AllAdminsDocument, baseOptions);
        }
export type AllAdminsQueryHookResult = ReturnType<typeof useAllAdminsQuery>;
export type AllAdminsLazyQueryHookResult = ReturnType<typeof useAllAdminsLazyQuery>;
export type AllAdminsQueryResult = ApolloReactCommon.QueryResult<AllAdminsQuery, AllAdminsQueryVariables>;