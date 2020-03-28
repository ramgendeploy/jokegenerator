import React from 'react';

const Jokes = ({ text }) => {
  const updateClipboard = (newClip) => {
    navigator.clipboard.writeText(newClip).then(function () {
      /* clipboard successfully set */
    }, function () {
      /* clipboard write failed */
    });
  }
  const copyJoke = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
      if (result.state == "granted" || result.state == "prompt") {
        updateClipboard(text);
      }
    });
  }

  return (<div className="jokeBox">
    {text}
    <div className="copyBtn" onClick={copyJoke}><i class="far fa-copy"></i></div>
  </div>)
}

export default Jokes;