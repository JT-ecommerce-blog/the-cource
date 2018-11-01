import React, { Component } from 'react';

class TestForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: '',
      comment: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState ({
      [event.target.name]: event.target.value
    });
    console.log(this.state.author);
  }

  //posting to database
  submitForm = async e => {
    e.preventDefault();
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        comment: this.state.comment,
        author: this.state.author
      }),
    });
  }

  render() {
    return <form>
        <div className="form">
          <label htmlFor="author">Author</label>
          <input value={this.state.author} onChange={this.onInputChange} type="text" id="author" name="author" />
        </div>
        <div className="form">
          <label htmlFor="comment">Comment</label>
        <input value={this.state.comment} onChange={this.onInputChange} type="text" id="comment" name="comment" />
        </div>
        <div className="form">
        <button type="submit" value="submit" onClick={this.submitForm}>
            New Data
          </button>
        </div>
      </form>;
  }
}

export default TestForm;