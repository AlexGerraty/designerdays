const { User, Designer, Expertise} = require('../models');
const { signToken, AuthenticationError } = require('../utils/Auth');


const resolvers = {
    Query: {
        designer: async (parent, { _id }) => {
          return await Designer.findById(_id).populate('designer');
        },
        expertises: async () => {
          return await Expertise.find();
        },
        designers: async (parent, { expertise, firstname }) => {
          const params = {};
    
          if (expertise) {
            params.expertise = expertise;
          }
    
          if (firstname) {
            params.firstname = {
              $regex: firstname
            };
          }
          return await Designer.find(params).populate('expertise');
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
            }

            throw AuthenticationError;
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