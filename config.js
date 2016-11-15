  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
 	returnURL: 'https://aad-dev-test.herokuapp.com/auth/openid/return',
 	identityMetadata: 'https://login.microsoftonline.com/common/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
 	clientID: 'f3a1b3d0-3586-48b7-8844-aaacbf75c33f',
 	clientSecret: '', // if you are doing code or id_token code
 	skipUserProfile: true, // for AzureAD should be set to true.
 	responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
 	responseMode: 'query', // For login only flows we should have token passed back to us in a POST
 	//scope: ['email', 'profile'] // additional scopes you may wish to pass
 };
