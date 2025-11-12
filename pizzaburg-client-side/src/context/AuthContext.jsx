// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Mock users database
const MOCK_USERS = [
  {
    id: 1,
    email: 'admin@pizzaburg.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: 2,
    email: 'user@example.com',
    password: 'user123',
    name: 'John Doe',
    role: 'user'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('pizzaburg_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;
      
      setUser(userWithoutPassword);
      localStorage.setItem('pizzaburg_user', JSON.stringify(userWithoutPassword));
      localStorage.setItem('pizzaburg_token', `mock_token_${foundUser.id}`);
      
      toast.success(`Welcome back, ${foundUser.name}!`, {
        position: "top-right",
        autoClose: 3000
      });
      
      return { success: true, user: userWithoutPassword };
    }
    
    toast.error('Invalid email or password', {
      position: "top-right",
      autoClose: 3000
    });
    
    return { success: false, error: 'Invalid credentials' };
  };

  const register = (name, email, password) => {
    const existingUser = MOCK_USERS.find((u) => u.email === email);
    
    if (existingUser) {
      toast.error('Email already registered', {
        position: "top-right",
        autoClose: 3000
      });
      return { success: false, error: 'Email already exists' };
    }

    const newUser = {
      id: MOCK_USERS.length + 1,
      email,
      name,
      role: 'user'
    };

    MOCK_USERS.push({ ...newUser, password });
    
    setUser(newUser);
    localStorage.setItem('pizzaburg_user', JSON.stringify(newUser));
    localStorage.setItem('pizzaburg_token', `mock_token_${newUser.id}`);
    
    toast.success('Registration successful!', {
      position: "top-right",
      autoClose: 3000
    });
    
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pizzaburg_user');
    localStorage.removeItem('pizzaburg_token');
    
    toast.info('Logged out successfully', {
      position: "top-right",
      autoClose: 2000
    });
  };

  const isAdmin = () => {
    return user?.role === 'admin';
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAdmin,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};