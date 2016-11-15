// Don't commit this file to your public repos. This config is for first-run
//
exports.creds = {
    // Required. It must be tenant-specific endpoint, common endpoint is not supported to use B2C
    // feature.
    identityMetadata: 'https://login.microsoftonline.com/aaddevtest.onmicrosoft.com/v2.0/.well-known/openid-configuration',
    returnURL: 'https://aad-dev-test.herokuapp.com/auth/openid/return/',
    clientID: '510cab99-0c1c-4a9d-9e49-3c7bb707222b',
    clientSecret: 'Pd73ATiLoyocXMjvQ7ZKFjg', // if you are doing code or id_token code
    skipUserProfile: true, // for AzureAD should be set to true.
    responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
    responseMode: 'form_post',
    // Required if we use http for redirectUrl
    allowHttpForRedirectUrl: true
};
