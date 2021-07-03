import React, { Component} from 'react';
import Pdf from '../Blake-Johnson-Resume .pdf';

class Download extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank" rel="noreferrer">Resume Pdf</a>
        </div>
    );

  }
}

export default Download;