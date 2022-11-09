import "./profile.css";

export default function Profile() {
  return (
    <section>
      <div className="container-flex__fotoname">
        <div className="user-foto"></div>
        <div className="user-name">Max Musterman</div>
      </div>
      <div className="container-about">
        <h2>About me</h2>
        <p className="question-card__answer">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
          eligendi quos voluptatibus tempore, ratione at culpa aliquid illo!
          Eius, harum quasi nesciunt ea soluta sapiente aliquam veniam aperiam
          molestiae nisi.
        </p>
      </div>
      <div className="container-flex__counterbookmarks">
        <div className="container for_counters">
          <img
            src="/images/question.png"
            alt="question"
            width="30px"
            height="30px"
          />
          <output className="output">1</output>
        </div>
        <div className="container for_counters">
          <img
            src="/images/bookmark.png"
            alt="bookmarks"
            width="32px"
            height="32px"
          />
          <output className="output">1</output>
        </div>
      </div>
    </section>
  );
}
