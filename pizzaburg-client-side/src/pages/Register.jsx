import React, { useEffect } from 'react'
import RegisterForm from '../components/RegisterForm'
import useTabTitleChanger from '../components/useTabTitleChanger';

const Register = () => {
     useTabTitleChanger();
  useEffect(() => {
    document.title = "Home | Pizzaburg 🍕";
  }, []);
  useEffect(() => {
    document.title = "Register | Pizzaburg 🍕";
  }, []);
  return (
    <div>
      <RegisterForm />
    </div>
  )
}

export default Register;
