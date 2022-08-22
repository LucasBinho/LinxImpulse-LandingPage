import React from "react";
import "../css/Form.css";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Dados enviados:", data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="inputName">Seu nome:</label>
        <input
          {...register("nome", {
            required: "Por favor, preencha com seu nome",
            minLength: {
              value: 3,
              message: "Seu nome deve conter no mínimo 3 caracteres.",
            },
          })}
          id="inputName"
          type="text"
        />
        <span className="formError">{errors.nome?.message}</span>
        <label htmlFor="inputEmail">E-mail:</label>
        <input
          {...register("email", {
            required: "Por favor, preencha com seu e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Por favor, insira um e-mail válido.",
            },
          })}
          id="inputEmail"
          type="text"
        />
        <span className="formError">{errors.email?.message}</span>
        <label htmlFor="inputCPF">CPF:</label>
        <input
          {...register("cpf", {
            required: "Por favor, preencha com seu CPF",
            pattern: {
              value: /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/,
              message: "Por favor, insira um CPF válido",
            },
          })}
          id="inputCPF"
          type="text"
        />
        <span className="formError">{errors.cpf?.message}</span>
        <div className="radioForm">
          <input type="radio" id="Masculino" name="gender" value="Masculino" />
          <label htmlFor="Masculino">Masculino</label>
          <br />
          <input type="radio" id="Feminino" name="gender" value="Feminino" />
          <label htmlFor="Feminino">Feminino</label>
          <br />
        </div>
        <button className="formButton" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
