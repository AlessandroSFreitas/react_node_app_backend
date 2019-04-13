import React, { Component } from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import { MdInsertDriveFile } from 'react-icons/md';
import api from '../../services/api';

export default class Box extends Component {
  state = {
    box: {}
  }
  async componentDidMount() {
    const box = this.props.match.params.id;
    const response = await api.get(`boxes/${box}`);

    this.setState({ box: response.data });
  }

  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt=""/>
          <h1>{this.state.box.title}</h1>
        </header>

        <ul>
          { this.state.box.files && this.state.box.files.map(file => (
            <li>
              <a className="fileInfo" href={file.url} target="_blank" rel="noopener noreferrer">
                <MdInsertDriveFile size={24} color="#ASCfff" />
                <strong>{file.title}</strong>
              </a>

              <span>{file.createdAt}</span>
            </li>
          )) }
        </ul>
      </div>
    );
  }
}
