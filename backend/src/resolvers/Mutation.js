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
    console.log(args.techniques)

    const combination = await ctx.db.mutation.createCombination({
      data: {
        name: args.name,
        numTechniques: args.numTechniques,
        maxRank: args.maxRank,
        techniques: {
          create: [...args.techniques]
        }
      }
    }, info)

    console.log(combination, 'combination')
    return combination
    // const combination = await ctx.db.mutation.createCombination({
    //   data: {
    //     name: args.name,
    //     numTechniques: args.numTechniques,
    //     maxRank: args.maxRank,
    //     techniques: {
    //       connect: [...args.techniques]
    //     }
    //   }
    // }, info)

    // console.log(combination, 'combination')

    // return combination;

    // const awaitTechniques = async (arr, ctx) => {
    //   const results = await Promise.all(arr.map(async t => {
    //     const foundTechnique = await ctx.db.query.technique({
    //       where: { id: t.id }
    //     })
    //     return foundTechnique
    //   }))
    //   return results
    // }

    // const data = await awaitTechniques(args.techniques, ctx).then((res) => {
    //   console.log(res, 'res')
    //   return {
    //     name: args.name,
    //     numTechniques: args.numTechniques,
    //     maxRank: args.maxRank,
    //     techniques: {
    //       connect: res
    //     }
    //     // techniques: TechniqueCreateManyInput {
    //     //   create: [TechniqueCreateInput!]
    //     //    connect: [TechniqueWhereUniqueInput!]
    //     // }
    //     //   TechniqueWhereUniqueInput {
    //       //   id: ID
    //       //   name: String
    //     // }
    //     // techniques: res
    //   }
    // })

    // console.log(JSON.stringify(data), 'data')

    // const combination = await ctx.db.mutation.createCombination({
    //   data
    // }, info)

    // console.log(combination, 'combination');

    // return combination

    // const awaitCombination = async (arr, ctx) => {
    //   return await ctx.db.mutation.createCombination({
    //     data: {
    //       name: args.name,
    //       numTechniques: args.numTechniques,
    //       maxRank: args.maxRank,
    //       techniques: arr
    //     }
    //   })
    // }

    // const awaitedCombo = awaitCombination(techniques, ctx);


    // const combination = techniques(args.techniques, ctx).then( (res) => {
    //   return ctx.db.mutation.createCombination({
    //     data: {
    //       name: args.name,
    //       numTechniques: args.numTechniques,
    //       maxRank: args.maxRank,
    //       techniques: res
    //     }
    //   })

    // });

    // console.log(combination, 'something')





    // const combination = await ctx.db.mutation.createCombination({
    //   data: {
    //     name: args.name,
    //     numTechniques: args.numTechniques,
    //     maxRank: args.maxRank,
    //     techniques: {
    //       create: test
    //     }
    //   }
    // })


    // console.log(combination, 'combination')
    // return combination;



    // const test = args.techniques.map(t => {
    //   console.log(t)
    //   return {
    //     index: t.index,

    //     // technique: await ctx.db.query.technique({
    //     //   where: { id: t.technique.id }
    //     // })
    //   }
    // })

    /**
     * an array of objects where each one is
     * 
     * {
     *  id: INT
     *  technique: {
     *    connect: { id: ID }
     *  }
     * }
     * 
     */
    // console.log(JSON.stringify(test), 'test')


  },
  // createCombination: async (parent, args, ctx, info) => {
  //   

  //   const test = args.techniques.map(t => {
  //     return {
  //       create: {
  //         index: t.index,
  //         technique: {
  //           connect: { 
  //             id: t.technique 
  //           }
  //         }
  //       }
  //     }
  //   });

  //   console.log(JSON.stringify(test), 'test')

  //   const combination = await ctx.db.mutation.createCombination({
  //     data: {
  //       name: args.name,
  //       numTechniques: args.numTechniques,
  //       maxRank: args.maxRank,
  //       // techniques: test
  //       techniques: args.techniques
  //     }
  //   }, info)

  //   console.log(combination, 'combination')

  //   return combination
  // },

  // updateCombination: async (parent, args, ctx, info) => {
  //   const updates = {...args};

  //   delete updates.id;

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