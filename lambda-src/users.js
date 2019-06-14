import users from '../src/users';

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(users),
  });
};
