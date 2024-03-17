type User = {
  email: string;
  password: string;
  password_confirmation?: string;
};

const API_URL = 'http://localhost:3000'; // replace with your Rails server URL
const getCsrfToken = (): string | null => {
  return document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
};
const csrfToken = getCsrfToken();


const AuthService = {
  login: async (user: User) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken ? csrfToken : '',
      },
      body: JSON.stringify({
          email: user.email,
          password: user.password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.user) {
      localStorage.setItem('user', JSON.stringify(data));
    }

    return data;
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  register: async (user: User) => {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken ? csrfToken : '',
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  },
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
};

export default AuthService;
