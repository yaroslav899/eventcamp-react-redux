import React, { PureComponent, Fragment } from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFilterCategory } from '../../redux/actions/eventActions';
import { updateActivePage } from '../../redux/actions/paginationActions';
import { fetchEventList } from '../../api';
import { categories } from '../../fixtures';
import { filterRecources } from '../../resources';
import { getHistoryUrl } from '../../helper';

class CategoryField extends PureComponent {
  changeCategory = (selection) => {
    const params = !selection ? { ['categories']: '' } : { [selection.type] : selection ? selection.value : '' };
    const { defaultPage, updateCategory, updateActivePage, fetchEventList } = this.props;

    return new Promise((resolve) => resolve(this.changeHistory(selection)))
      .then(() => updateCategory(params.categories))
      .then(() => updateActivePage(defaultPage))
      .then(() => fetchEventList(params));
  };

  changeHistory = (selection) => {
    const { history } = this.props;
    const url = getHistoryUrl('categories', selection, '');

    history.push(url);
  }

  render() {
    const { categoryValue, fieldLabel } = this.props;

    return (
      <Fragment>
        <Select
          name="form-field-category"
          label="categories"
          placeholder={fieldLabel}
          options={categories.map(category => ({
            label: category.name,
            value: category.id,
            type: 'categories',
          }))}
          value={categoryValue}
          onChange={this.changeCategory}
        />
      </Fragment>
    );
  }
}

function mapStateToProps(store) {
  return { categoryValue: store.eventState.categories };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCategory: categories => dispatch(updateFilterCategory(categories)),
    updateActivePage: page => dispatch(updateActivePage(page)),
    fetchEventList: params => dispatch(fetchEventList(params)),
  };
}

CategoryField.defaultProps = {
  defaultPage: '1',
  fieldLabel: filterRecources.category,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryField));
