import React, { Component } from 'react';
import Checkbox from 'rc-checkbox';
import PropTypes from 'prop-types';
import {ColumnTitle, CheckboxContainer} from '../../styles/CheckboxListStyles';
import { GridCol, CousineList} from '../../styles/HeaderStyles';

class CheckboxList extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    className: PropTypes.string,
  };

  render() {
    const { title, list, isColumnLayout, toggleSelect } = this.props;

    return (
      <GridCol>
        <ColumnTitle>{title}</ColumnTitle>
        {
        isColumnLayout && <CousineList>
          {list.map(({ id, name }, index) => {
            return (
              <CheckboxContainer>
                  <label key={`name`+index}>
                      <Checkbox key={id}  onClick={() => toggleSelect(id)}>{name}</Checkbox>
                      {name}
                </label>
                </CheckboxContainer>
            );
          })}
        </CousineList>
        }
         {
        !isColumnLayout && <GridCol>
          {list.map(({ id, name }, index) => {
            return (
              <div>
                  <label key={`nameid`+index}>
                      <Checkbox key={id}  onClick={() => toggleSelect(id)}>{name}</Checkbox>
                      {name}
                </label>
                </div>
            );
          })}
        </GridCol>
        }

      </GridCol>
    );
  }
}

export default CheckboxList;
