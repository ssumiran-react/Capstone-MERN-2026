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

//Create a Project for specific user 
export async function createProjectForUser(newProj) {
  try {  
    //console.log("createProjectForUser: ",newProj);
    const response = await fetch(
      `${BASE_URL}/api/project/`, {
        method: 'POST',
        body: JSON.stringify(newProj),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const result = await response.json();
    //console.log(result, " createProjectForUser ");
    return result;
  }catch (e) {
    console.log(e);
  }
}

//Update put a Project for specific user 
export async function updateProjectForUser(putProj) {
  try {  
    //console.log("updateProjectForUser: ",putProj);
    const response = await fetch(
      `${BASE_URL}/api/project/user/${putProj._id}`, {
        method: 'PUT',
        body: JSON.stringify(putProj),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const result = await response.json();
    //console.log(result, " createProjectForUser ");
    return result;
  }catch (e) {
    console.log(e);
  }
}

//Delete Projects per user
export async function deleteProjectId(pid) {
  try {  
    //Get Projects per user
    const response = await fetch(
      `${BASE_URL}/api/project/delete/${pid}`, 
      { method: 'DELETE'}
    );
    const result = await response.json();
    //console.log(result, " getProjectById ");
    return result;
  }catch (e) {
    console.log(e);
  }
}