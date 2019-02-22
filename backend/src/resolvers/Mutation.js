const Mutation = {
  createUser: async (parent, args, ctx, info) => {
    const user = await ctx.db.mutation.createUser({ 
      data: {
        name: args.name,
        email: args.email
      }
    }, info)
    return user
  },
  updateUser: async (parent, args, ctx, info) => {
    const updates = {...args};

    delete updates.id;

    const updatedUser = await ctx.db.mutation.updateUser({
      data: updates,
      where: { id: args.id }
    }, info)
    return updatedUser;
  },
  deleteUser: async (parent, args, ctx, info) => {
    const deletedUser = await ctx.db.mutation.deleteUser({
      where: { id: args.id }
    }, info);
    return deletedUser;
  },
  createTechnique: async (parent, args, ctx, info) => {
    const technique = await ctx.db.mutation.createTechnique({
      data: {
        name: args.name,
        description: args.description,
        rank: args.rank,
      }
    }, info)
    
    return technique
  },
  updateTechnique: async (parent, args, ctx, info) => {
    const updates = { ...args }

    delete updates.id

    const updatedTechnique = await ctx.db.mutation.updateTechnique({
      data: updates,
      where: { id: args.id }
    }, info)

    return updatedTechnique
  },
  deleteTechnique: async (parent, args, ctx, info) => {
    return ctx.db.mutation.deleteTechnique({
      where: { id: args.id }
    }, info)
  },
  createCombination: async (parent, args, ctx, info) => {
    
    const { name, numTechniques, maxRank, combinationTechniques } = args;
    
    // console.log(JSON.stringify(args, null, '\t'));


    // map args.techniques to the shape required by createCombination
    const combinationTechniqueMap = (techniques) => {
      return techniques.map((t) => {
        return {
          index: t.index,
          technique: {
            connect: {
              id: t.technique.id
            }
          }
        }
      })
    }

    const mappedTechinques = combinationTechniqueMap(combinationTechniques.techniquesList)
    
    const combination = await ctx.db.mutation.createCombination({
      data: {
        name,
        numTechniques,
        maxRank,
        combinationTechniques: {
          create: {
            techniquesList: {
              create: mappedTechinques
            }
          }
        }
      }
    }, info);

    return combination;

  },
  
  updateCombination: async (parent, args, ctx, info) => {
    const updates = {...args}

    delete updates.id;

    console.log(JSON.stringify(args, null, '\t'));

    const updatedCombination = await ctx.db.mutation.updateCombination({
      data: updates,
      where: { id: args.id }
    }, info)


    return updatedCombination
  },

  // updateCombinationOld: async (parent, args, ctx, info) => {
  //   const updates = {...args};

  //   delete updates.id;


  //   console.log(JSON.stringify(combination, null, '\t'));

  //   const updatedCombination = await ctx.db.mutation.updateCombination({
  //     data: updates,
  //     where: { id: args.id }
  //   }, info)

  //   return updatedCombination;
  // },
  deleteCombination: async (parent, args, ctx, info) => {
    const deleteCombination = await ctx.db.mutation.deleteCombination({
      where: { id: args.id }
    })
    return deleteCombination;
  }
}

module.exports = Mutation