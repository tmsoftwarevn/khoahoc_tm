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

export const call_detail_video_withId = async (id) => {
  const apiUrl = `https://tmaccademia.tmsoftware.vn/api/getLectureDetails/${id}`;
  const token = sessionStorage.getItem('token'); // Replace this with your actual Bearer token
  
  try {
    const response = await fetch(apiUrl, {
      method: "GET", 
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result?.data;

  } catch (error) {
    console.error("Failed to fetch course categories:", error);
    return null;
  }
};


export const call_login = async (email, password) => {
  const apiUrl = `https://tmaccademia.tmsoftware.vn/api/login`;
  try {
    const response = await fetch(apiUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ email, password }), 
    });

    const result = await response.json();

    return result;

  } catch (error) {
    console.error("Failed to log in:", error); // Updated error message
    return null;
  }
};
