const BASE_URL = import.meta.env.VITE_BASE_URL

export async function getLoginCredentialService(loginInfo) {
  try {  //console.log(BASE_URL, " getLoginCredentialService ");
    //Get user Credential request
    const response = await fetch(
      `${BASE_URL}/api/user/login?userName=${loginInfo.userName}&password=${loginInfo.password}`
    );
    const result = await response.json();
    //console.log(result, " getLoginCredentialService ");
    return result;
  }catch (e) {
    console.log(e);
  }
}