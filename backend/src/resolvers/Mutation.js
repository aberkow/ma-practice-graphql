const Mutation = {
  createUser: async (parent, args, ctx, info) => {
    const user = await ctx.db.mutation.createUser({ 
      data: {
        name: args.name,
        email: args.email
      }
    }, info)
    return user
  }
}

module.exports = Mutation