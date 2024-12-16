export const call_list_course = async () => {
  const apiUrl = "https://tmaccademia.tmsoftware.vn/api/getCourseList";

  try {
    const response = await fetch(apiUrl);

    const result = await response.json();
    
    return result?.courses?.data; 

  } catch (error) {
    console.error("Failed to fetch course categories:", error);
    return null; 
  }
};
