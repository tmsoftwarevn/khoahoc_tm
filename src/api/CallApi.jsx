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

export const call_list_blog = async () => {
  const apiUrl = "https://tmaccademia.tmsoftware.vn/api/getBlogList";

  try {
    const response = await fetch(apiUrl);

    const result = await response.json();

    return result?.data; 

  } catch (error) {
    console.error("Failed to fetch course categories:", error);
    return null; 
  }
};

export const call_about = async () => {
  const apiUrl = "https://tmaccademia.tmsoftware.vn/api/getPageAbout";

  try {
    const response = await fetch(apiUrl);

    const result = await response.json();

    return result?.data; 

  } catch (error) {
    console.error("Failed to fetch course categories:", error);
    return null; 
  }
};

export const call_detail_course = async (slug) => {
  const apiUrl = `https://tmaccademia.tmsoftware.vn/api/getCourseView/${slug}`;

  try {
    const response = await fetch(apiUrl);

    const result = await response.json();

    return result; 

  } catch (error) {
    console.error("Failed to fetch course categories:", error)
    return null; 
  }
}