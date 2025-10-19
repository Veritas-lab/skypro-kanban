const USER_API_URL = "https://wedev-api.sky.pro/api/user";
const KANBAN_API_URL = "https://wedev-api.sky.pro/api/kanban";

// Функции для авторизации
export async function signIn({ login, password }) {
  try {
    console.log("Отправка запроса на:", `${USER_API_URL}/login`);
    console.log("Данные:", { login, password });

    const response = await fetch(`${USER_API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({ login, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || errorData.error || "Ошибка при входе"
      );
    }

    const data = await response.json();
    console.log("Успешный ответ:", data);
    return data;
  } catch (error) {
    console.error("Ошибка API:", error.message);
    throw new Error(error.message || "Произошла ошибка при входе");
  }
}

export async function signUp({ name, login, password }) {
  try {
    console.log("Отправка запроса на:", USER_API_URL);
    console.log("Данные:", { name, login, password });

    const response = await fetch(USER_API_URL, {
      method: "POST",
      body: JSON.stringify({ name, login, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message || errorData.error || "Ошибка при регистрации"
      );
    }

    const data = await response.json();
    console.log("Успешный ответ:", data);
    return data;
  } catch (error) {
    console.error("Ошибка API:", error.message);
    throw new Error(error.message || "Произошла ошибка при регистрации");
  }
}

// Функции для работы с задачами
export async function fetchTasks({ token }) {
  try {
    const response = await fetch(KANBAN_API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка при загрузке задач");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postTask({ token, task }) {
  try {
    const response = await fetch(KANBAN_API_URL, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Ошибка при создании задачи");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function editTask({ token, id, task }) {
  try {
    const response = await fetch(`${KANBAN_API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      throw new Error("Ошибка при обновлении задачи");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function deleteTask({ token, id }) {
  try {
    const response = await fetch(`${KANBAN_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка при удалении задачи");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
