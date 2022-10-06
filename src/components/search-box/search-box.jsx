import React from "react";

const SearchBox = ({ className, placeholder, onChange }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default SearchBox;

/* export default class SearchBox extends Component {
  render() {

    return (
      <div>
        <input 
        className={this.props.className}
        type="search" 
        placeholder={this.props.placeholder} 
        onChange={this.props.onChange} />
      </div>
    )
  }
}
 */
