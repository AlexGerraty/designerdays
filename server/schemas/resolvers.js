const { User, Designer, Expertise} = require('../models');
const { signToken, AuthenticationError } = require('../utils/Auth');


const resolvers = {
    Query: {
        designers: async (parent, args, context) => {
          const designers = await Designer.find();
          return designers.map(designer => {
            return {
              id: designer._id,
              firstname: designer.firstname,
              lastname: designer.lastname,
              description: designer.description,
              price: designer.price,
              expertise: designer.expertise
            };
          });
        },
        expertises:  async (parent, args, context) => {
          const expertises = await Expertise.find();
          return expertises.map(expertise => {
            return {
              id: expertise._id,
              name: expertise.name
            };
          });
      },
    },
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect email or password');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect email or password');
            }
      
            const token = signToken(user);
      
            return { token, user };
        },
    }};

    module.exports = resolvers;