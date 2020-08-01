import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresInciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInciais);

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,
    })
  }
  function handleChange(eventInfo) {
    setValue(eventInfo.target.getAttribute('name'), eventInfo.target.value);
  }

  return (
    <PageDefault>
      <h1> Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(eventoInfo) {
          eventoInfo.preventDefault();
          setCategorias([...categorias, values]);
          setValue(valoresInciais)
        }}
      >

        <FormField
          label = 'Nome da Categoria:'
          value = {values.nome}
          name = 'nome'
          type = 'text'
          onChange={handleChange}
        />
          <FormField
          label = 'Descição:'
          value = {values.cor}
          name = 'nome'
          type = 'textarea'
          onChange={handleChange}
        />

        <FormField
          label = 'Cor:'
          value = {values.cor}
          name = 'nome'
          type = 'color'
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>
                   {categoria.nome}
                </li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
