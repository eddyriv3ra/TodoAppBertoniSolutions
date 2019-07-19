import React from 'react';
import classNames from 'classnames';
import "./items.scss";

 class Items extends React.Component {

  state = {
    isPressed: false,
  }

  handleDelete = () => {
    const { handleDelete, id } = this.props;
    handleDelete(id)
  }

  onClick = () => {
    this.setState(state => {
      return { isPressed: !state.isPressed }
    });
  }

  render() {
    const { item } = this.props;
    let btnClass = classNames({
      'pressed': this.state.isPressed,
      '': !this.state.isPressed
    });
    return (
      <div className="items">
        <div className="item">
          <div className={btnClass} onClick={this.onClick}>
            {item}
          </div>
        </div>
        <button className="button" onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}


export default Items;
