import React, { Component } from 'react';
import Checkbox from 'rc-checkbox';
import PropTypes from 'prop-types';

class CheckboxList extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    className: PropTypes.string,
  };

  render() {
    const { title, list } = this.props;

    return (
      <div>
        <h2>{title}</h2>
        <div>
          {list.map(({ id, name }, index) => {
            return (
                <label key={"name"+index}>
                    <Checkbox key={id}>{name}</Checkbox>
                    {name}
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CheckboxList;
