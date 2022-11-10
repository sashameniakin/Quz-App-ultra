import "./form.css";

export default function Form() {
  return (
    <form class="form" data-js="form__submit-question">
      <label for="question">Your question:</label>
      <textarea
        name="question"
        data-js="form__textarea-questions"
        id="question"
        cols="30"
        rows="10"
        maxlength="150"
      ></textarea>
      <div
        class="form__character-count"
        data-js="form__character-count-questions"
      >
        150 characters left
      </div>
      <label for="answer">Your answer:</label>
      <textarea
        name="answer"
        data-js="form__textarea-answers"
        id="answer"
        cols="30"
        rows="10"
        maxlength="150"
      ></textarea>
      <div
        class="form__character-count"
        data-js="form__character-count-answers"
      >
        150 characters left
      </div>
      <label for="tag">Tag:</label>
      <input type="text" id="tag" name="tag" />
      <button type="submit" class="form__button-submit">
        Submit
      </button>
    </form>
  );
}
