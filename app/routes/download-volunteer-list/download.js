import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './download.css'
import Dropzone from 'react-dropzone'
import {getExcelSheet} from '../../actions/runtime'
import path from 'path'

class download extends React.Component {

  state = {
    downloaded: false,
    link: ''
  }

  constructor(props) {
    super(props)

    this.onDrop = this.onDrop.bind(this)
    this.downloadFile = this.downloadFile.bind(this)
  }

  onDrop(acceptedFiles, rejectedFiles) {
    let file = acceptedFiles[0]
    if (file.type === 'application/json') {
      getExcelSheet(file).then(e => {
        this.setState({downloaded: true})
        this.downloadFile()

      })
    }
  }

  downloadFile(){
    document.getElementsByClassName('link')[0].click()
  }

  render() {
    return (
      <div>
        <div style={{'text-align':'center'}}><img alt='upload something' style={{
        visibility: `${this.state.downloaded
          ? 'visible'
          : 'hidden'}`
      }} src='https://media2.giphy.com/media/MvZqtn0p3DVUQ/200w.gif#26' alt=''/>
          <Dropzone className={s.dropzones} onDrop={this.onDrop}>
            <div className={s.drop}>DROP OR CLICK TO UPLOAD THE JSON FILE HERE</div>
          </Dropzone>
          {this.state.downloaded
            ? (
              <a className={`${s.link} link`} href="/socialworks.csv" download>Click Here to Download File (It should be downloaded automatically)</a>
            )
            : ''}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(download)
