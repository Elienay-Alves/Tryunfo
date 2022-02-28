import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <textarea
            name="description"
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>

        <label htmlFor="attr1-input">
          <input
            type="number"
            name="firstAtribute"
            id="attr1-input"
            data-testid="attr1-input"
          />
        </label>

        <label htmlFor="attr2-input">
          <input
            type="number"
            name="secondAtribute"
            id="attr2-input"
            data-testid="attr2-input"
          />
        </label>

        <label htmlFor="attr3-input">
          <input
            type="number"
            name="thirdAtribute"
            id="attr3-input"
            data-testid="attr3-input"
          />
        </label>

        <label htmlFor="image-input">
          <input
            type="text"
            name="imageURL"
            id="image-input"
            data-testid="image-input"
          />
        </label>

        <label htmlFor="rareOfCard">
          Raridade
          <select
            type="select"
            name="rareOfCard"
            id="rareOfCard"
            data-testid="rare-input"
          >
            <option name="rareOfCard" value="normal">
              Normal
            </option>
            <option name="rareOfCard" value="raro">
              Raro
            </option>
            <option name="rareOfCard" value="muito raro">
              Muito Raro
            </option>
          </select>
        </label>

        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfoInput"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>

        <button
          name="save-button"
          type="button"
          id="save-button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
