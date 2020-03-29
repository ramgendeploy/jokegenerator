import React from 'react';

const Jokes = ({ text }) => {
  const updateClipboard = (newClip) => {
    navigator.clipboard.writeText(newClip).then(function () {
      console.log('Success')
    }, function () {
      console.log('Failed to have access to clipboard')

    });
  }
  const copyJoke = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
      if (result.state == "granted" || result.state == "prompt") {
        updateClipboard(text);
      }
    });
  }
  const parse = (txt) => {
    let textarr = txt.split('xxbos');
    console.log(textarr)

    return textarr[0];

  }
  return (<div className="jokeBox">
    {
      parse(text)
    }
    <div className="copyBtn" onClick={copyJoke}><i className="far fa-copy"></i></div>
  </div>)
}

export default Jokes;