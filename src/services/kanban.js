// kanban.js
const API_URL = "https://wedev-api.sky.pro/api/kanban";

export const getTasks = async (token) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка загрузки задач");
    }

    const tasks = await response.json();
    return tasks;
  } catch (error) {
    throw new Error(error.message || "Ошибка сети");
  }
};

export const createTask = async (taskData, token) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Ошибка создания задачи");
    }

    const newTask = await response.json();
    return newTask;
  } catch (error) {
    throw new Error(error.message || "Ошибка сети");
  }
};

// Алиас для обратной совместимости
export const addTask = createTask;

export const updateTask = async (taskId, taskData, token) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Ошибка обновления задачи");
    }

    const updatedTask = await response.json();
    return updatedTask;
  } catch (error) {
    throw new Error(error.message || "Ошибка сети");
  }
};

export const deleteTask = async (taskId, token) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка удаления задачи");
    }

    return true;
  } catch (error) {
    throw new Error(error.message || "Ошибка сети");
  }
};
