import React, { PureComponent } from 'react';
import Select from 'react-select';
import { getLanguage } from 'react-multi-lang';
import { languages } from '../../resources/langswitcher';

class LanguageSwitcher extends PureComponent {
  state = { language: '' }

  componentDidMount() {
    const language = getLanguage();

    this.setState({ language });
  }

  changeLanguage = (option) => {
    const { value, url } = option;
    const { language } = this.state;

    if (value === language) {
      return true;
    }

    this.setState({ language: value });

    window.location = url;
  }

  render() {
    const { language } = this.state;

    return (
      <Select
        name="language-switcher"
        label="lang"
        placeholder={language}
        options={languages.map(lang => ({
          label: lang.label,
          value: lang.code,
          type: 'language',
          url: lang.url,
          className: `language-${lang.code}`,
        }))}
        clearable={false}
        value={language}
        onChange={this.changeLanguage}
      />
    );
  }
}

export default LanguageSwitcher;