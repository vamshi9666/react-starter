// const GRAPHQL_API_ENDPOINT = 'https://sapor-graph.herokuapp.com/v1/graphql';
// // if (process.env.NODE_ENV === 'production') {
// //   GRAPHQL_API_ENDPOINT = 'https://sapor-graph.herokuapp.com/v1/graphql';
// // } else {
// //   GRAPHQL_API_ENDPOINT = 'https://sapor-graph.herokuapp.com/v1/graphql';
// // }
const  {GRAPHQL_API_ENDPOINT} = process.env
// if (process.env.NODE_ENV === 'production') {
//   GRAPHQL_API_ENDPOINT = 'https://sapor-graph.herokuapp.com/v1/graphql';
// } else {
//   GRAPHQL_API_ENDPOINT = 'https://sapor-graph.herokuapp.com/v1/graphql';
// }


 
const config = {};
console.log(" graphql end point ", GRAPHQL_API_ENDPOINT)
export { GRAPHQL_API_ENDPOINT, config };
