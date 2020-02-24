import React, { PureComponent } from 'react';
import { withTranslation } from 'react-multi-lang';

class CallBackForm extends PureComponent {
  state = {
    firstname: '',
    email: '',
    textDescription: '',
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { firstname, email, textDescription } = this.state;
    const { t } = this.props;

    return (
      <form id="contactForm" method="post">
        <div className="form-row form-group">
          <label className="col-sm-4" htmlFor="firstname">
            {t('profile.field.label.firstname')} *
          </label>
          <input id="firstname" type="text" className="form-control col-sm-7" name="firstname" value={firstname} onChange={this.onChange} />
        </div>
        <div className="form-row form-group">
          <label className="col-sm-4" htmlFor="email">
            {t('profile.field.label.email')} *
          </label>
          <input id="email" type="email" className="form-control col-sm-7" name="email" value={email} onChange={this.onChange} />
        </div>
        <div className="form-row form-group">
          <label className="col-sm-4" htmlFor="textDescription">
            {t('pdp.description')} *
          </label>
          <textarea id="textDescription" className="form-control col-sm-7" cols="33" name="textDescription" rows="5" onChange={this.onChange} value={textDescription} />
        </div>
        <button className="btn btn-secondary submit" type="submit">
          {t('global.button.send')}
        </button>
      </form>
    );
  }
}

export default withTranslation(CallBackForm);
