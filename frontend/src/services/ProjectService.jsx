const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getProjectByUserId(userId) {
  try {  
    //Get Projects per user
    const response = await fetch(
      `${BASE_URL}/api/project/user?id=${userId}`
    );
    const result = await response.json();
    //console.log(result, " getProjectById ");
    return result;
  }catch (e) {
    console.log(e);
  }
}