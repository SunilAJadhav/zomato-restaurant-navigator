import React, { Component } from 'react';
import Checkbox from 'rc-checkbox';
import PropTypes from 'prop-types';
import {ColumnTitle, CheckboxContainer, CousineListGrid} from '../../styles/CheckboxListStyles';

class CheckboxList extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    className: PropTypes.string,
  };

  render() {
    const { title, list, isColumnLayout } = this.props;


    return (
      <div>
        <ColumnTitle>{title}</ColumnTitle>
        {
        isColumnLayout && <CousineListGrid>
          {list.map(({ id, name }, index) => {
            return (
              <CheckboxContainer>
                  <label key={"name"+index}>
                      <Checkbox key={id}>{name}</Checkbox>
                      {name}
                </label>
                </CheckboxContainer>
            );
          })}
        </CousineListGrid>
        }
         {
        !isColumnLayout && <div>
          {list.map(({ id, name }, index) => {
            return (
              <CheckboxContainer>
                  <label key={"name"+index}>
                      <Checkbox key={id}>{name}</Checkbox>
                      {name}
                </label>
                </CheckboxContainer>
            );
          })}
        </div>
        }

      </div>
    );
  }
}

export default CheckboxList;
