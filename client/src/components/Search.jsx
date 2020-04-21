import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
    <div className="search-container">
      <Form inline>
        <FormControl type="text" placeholder="Enter a github handle" className="mr-sm-2" value={this.state.terms} onChange={this.onChange}/>
        <Button variant="outline-info" onClick={this.search}>Add Repos</Button>
      </Form>
    </div>
    )
  }
}

export default Search;