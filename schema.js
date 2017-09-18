const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLScalarType,
  GraphQLList
} = require('graphql');

const posts = [
  {
    'title': 'Post 1',
    'body': 'hi this is post 1',
    'slug': '/post/1'
  },
  {
    'title': 'Post 2',
    'body': 'hi this is post 2',
    'slug': '/post/2'
  }
]

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    title: {
      type: GraphQLString,
      description: 'Post title'
    },
    body: {
      type: GraphQLString,
      description: 'Post body',
    },
    slug: {
      type: GraphQLString,
      description: 'Post slug',
    }
  }
})

const Posts = {
  // figure out union type
  type: new GraphQLList(PostType),
  resolve(root) {
    return posts;
  }
}

const Post = {
  type: PostType,
  args: {
    slug: {
      name: 'slug',
      type: GraphQLString
    }
  },
  resolve(root, { slug }) {
    return posts.find(post => post.slug === slug);
  }
}

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      posts: Posts,
      post: Post
    }
  })
});

module.exports = schema;
