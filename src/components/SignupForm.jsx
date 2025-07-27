import { useState } from 'react';
import './SignupForm.css';

export default function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full Name is required';
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (form.password.length < 6) errs.password = 'Password must be ≥ 6 characters';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      console.log('Submitted:', form);
    }
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>
      <label>
        Full Name
        <input name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
        {errors.name && <small className="error">{errors.name}</small>}
      </label>
      <label>
        Email Address
        <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
        {errors.email && <small className="error">{errors.email}</small>}
      </label>
      <label>
        Password
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••" />
        {errors.password && <small className="error">{errors.password}</small>}
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
