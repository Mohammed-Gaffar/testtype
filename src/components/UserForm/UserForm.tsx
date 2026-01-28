import { useState } from "react";
import { Header } from "..";
import { UserFormData } from "../../interfaces/UserInterface";
import { toast, ToastContainer } from "react-toastify";

export function UserForm() {
  const notify = () => toast.success("Product added!");

  
  const [form, setForm] = useState<UserFormData>({
    username: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) || "" : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Form submitted:", form);
  };

  return (
    <>
      <Header/>


 <div>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>


      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "450px",
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          rows={3}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
