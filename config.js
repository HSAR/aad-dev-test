// Don't commit this file to your public repos. This config is for first-run
//
exports.creds = {
    // Required. It must be tenant-specific endpoint, common endpoint is not supported to use B2C feature.
    identityMetadata: 'https://login.microsoftonline.com/aaddevtest.onmicrosoft.com/v2.0/.well-known/openid-configuration',
    returnURL: 'https://aad-dev-test.herokuapp.com/auth/openid/return/',
    clientID: 'fa214e73-bed7-4367-a7f6-a3f69b1968b9',
    clientSecret: 'PLZogOq61PXxFsJuKuwRnUU', // if you are doing code or id_token code
    skipUserProfile: true, // for AzureAD should be set to true.
    responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
    responseMode: 'form_post',
    // Required if we use http for redirectUrl
    allowHttpForRedirectUrl: true,
    // Scopes info: https://docs.microsoft.com/en-gb/azure/active-directory/active-directory-v2-scopes
    scope: 'profile',
    // Required to set to false if you don't want to validate issuer
    validateIssuer: true
    // Required if you want to provide the issuer(s) you want to validate instead of using the issuer from metadata
    // issuer could be a string or an array of strings of the following form: 'https://sts.windows.net/<tenant_guid>/v2.0'
    //issuer: null
};
