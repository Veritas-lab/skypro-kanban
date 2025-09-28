// src/services/api.js
import axios from "axios";

const USER_API_URL = "https://wedev-api.sky.pro/api/user";
const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";

// Функции для авторизации
export async function signIn({ login, password }) {
  try {
    console.log("Отправка запроса на:", `${USER_API_URL}/login`);
    console.log("Данные:", { login, password });

    const response = await axios.post(`${USER_API_URL}/login`, {
      login,
      password,
    });

    console.log("Успешный ответ:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка API:", error.response?.data || error.message);

    if (error.response) {
      const errorMessage =
        error.response.data.message ||
        error.response.data.error ||
        "Ошибка при входе";
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error("Сервер не отвечает. Проверьте интернет-соединение.");
    } else {
      throw new Error("Ошибка при отправке запроса");
    }
  }
}

export async function signUp({ name, login, password }) {
  try {
    console.log("Отправка запроса на:", USER_API_URL);
    console.log("Данные:", { name, login, password });

    const response = await axios.post(USER_API_URL, {
      name,
      login,
      password,
    });

    console.log("Успешный ответ:", response.data);
    return response.data;
  } catch (error) {
    console.error("Ошибка API:", error.response?.data || error.message);

    if (error.response) {
      const errorMessage =
        error.response.data.message ||
        error.response.data.error ||
        "Ошибка при регистрации";
      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error("Сервер не отвечает. Проверьте интернет-соединение.");
    } else {
      throw new Error("Ошибка при отправке запроса");
    }
  }
}

// Функции для работы с задачами
export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(KANBAN_API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function postTask({ token, task }) {
  try {
    const response = await axios.post(KANBAN_API_URL, task, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function editTask({ token, id, task }) {
  try {
    const response = await axios.patch(`${KANBAN_API_URL}/${id}`, task, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function deleteTask({ token, id }) {
  try {
    const response = await axios.delete(`${KANBAN_API_URL}/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || error.message);
  }
}
