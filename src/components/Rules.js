const Rules = () => {
  return (
    <div className="rules">
      <h2>How to play</h2>
      <div className="rule-list">
        <ol>
          <li>You will have only <span>15 seconds</span> per each question.</li>
          <li>Choose the category you want to answer</li>
          <li>Once you select your answer, you can't reselect.</li>
          <li>You can't select any option once time goes off.</li>
          <li>You will get the results at the end of the quiz</li>
        </ol>
      </div>
      <div className="button">
        <button className="start-quiz-btn"><a className="play-btn" href="/">Start</a></button>
      </div>
    </div>
  );
}
 
export default Rules;