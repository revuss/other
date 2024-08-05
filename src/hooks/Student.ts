import axios from "axios";

export interface Student {
  id: string;
  image?: string;
  firstName: string;
  lastName: string;
  emailId: string;
  attended?: boolean;
  attendance?: number;
  mobileNumber?: string;
}

export async function getStudents(): Promise<Student[]> {
  try {
    const response = await axios.get(
      "https://studentmgmtapi.vercel.app/api/allStudents"
    );
    console.log("data fetched", response.data);
    if (
      response.data.message === "success" &&
      Array.isArray(response.data.students)
    ) {
      return response.data.students;
    } else {
      return [];
    }
  } catch (err) {
    console.error("failed to fetch students", err);
    return [];
  }
}

export async function createStudent(
  student: Student
): Promise<{ message: string }> {
  try {
    console.log("Sending data:", student);
    const response = await fetch(
      "https://studentmgmtapi.vercel.app/api/createStudent",
      {
        method: "POST",
        body: JSON.stringify(student),
      }
    );

    console.log("Response status:", response.status);

    const serverData = await response.json();
    console.log("Response data:", serverData);

    return serverData;
  } catch (error) {
    console.error("Failed to create student:", error);
    throw error;
  }
}

export async function deleteStudent(
  emailId: string
): Promise<{ message: string }> {
  try {
    const response = await fetch(
      "https://studentmgmtapi.vercel.app/api/deleteStudent",
      {
        method: "POST",
        body: JSON.stringify({ emailId }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const serverData = await response.json();
    return serverData;
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
}
