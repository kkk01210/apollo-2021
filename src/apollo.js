// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/",
//   cache: new InMemoryCache(),
//   resolvers: {
//     Movie: {
//       isLiked: () => false,
//     },
//     Mutation: {
//       likeMovie: (_, { id }, { cache }) => {
//         cache.writeData({
//           id: `Movie:${id}`,
//           data: {
//             isLiked: true,
//             medium_cover_image: "lalalalal",
//           },
//         });
//       },
//     },
//   },
// });

// export default client;

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:4000",
//   cache: new InMemoryCache(),
//   resolvers: {
//     Movie: {
//       isLiked: () => false,
//     },
//     Mutation: {
//       toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
//         console.log(isLiked);
//         const myMovie = {
//           __typename: "Movie",
//           id: `${id}`,
//           isLiked: `${isLiked}`,
//         };
//         cache.modify({
//           id: cache.identify(myMovie),
//           fields: {
//             isLiked(cachedName) {
//               return !isLiked;
//             },
//           },
//         });
//       },
//     },
//   },
// });
// export default client;

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false, // 디폴트로 false 값 지니도록.
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: {
            isLiked: (isLiked) => !isLiked, // 현재 isLiked 값을 받아서 true-false 토글
          },
        });
      },
    },
  },
});
export default client;
