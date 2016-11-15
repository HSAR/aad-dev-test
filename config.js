  // Don't commit this file to your public repos. This config is for first-run
  //
 exports.creds = {
 	returnURL: 'https://aad-dev-test.herokuapp.com/auth/openid/return',
 	identityMetadata: 'https://login.microsoftonline.com/common/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
 	clientID: '34e404cc-f9b9-4e74-b434-9f12798fdd8c',
 	clientSecret: 'l66SE+4qrb7kDelCkO5qS5B0cYXRJkyslTZouPUZl+Y=', // if you are doing code or id_token code
 	skipUserProfile: true, // for AzureAD should be set to true.
 	responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
 	responseMode: 'query', // For login only flows we should have token passed back to us in a POST
 	//scope: ['email', 'profile'] // additional scopes you may wish to pass
 };
