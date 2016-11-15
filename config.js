// Don't commit this file to your public repos. This config is for first-run
//
exports.creds = {
    // Required. It must be tenant-specific endpoint, common endpoint is not supported to use B2C
    // feature.
    identityMetadata: 'https://login.microsoftonline.com/aaddevtest.onmicrosoft.com/v2.0/.well-known/openid-configuration',
    returnURL: 'https://aad-dev-test.herokuapp.com/',
    clientID: '510cab99-0c1c-4a9d-9e49-3c7bb707222b',
    clientSecret: 'GZcx4Dq+Qs7KaH+f1S8Sc4QyZ2HtgaFAf+jTgpHQEws=', // if you are doing code or id_token code
    skipUserProfile: true, // for AzureAD should be set to true.
    responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
    responseMode: 'query' // For login only flows we should have token passed back to us in a POST
    //scope: ['email', 'profile'] // additional scopes you may wish to pass
};
