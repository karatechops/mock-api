import servers from '../src/servers';

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(servers),
  });
};
