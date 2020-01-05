import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { submitUserAction } from '../actions/user/UserActions';

const form = (props) => {
    const {handleSubmit} = props;
    const submit = (fields, submitUserAction) => {
        submitUserAction(fields);
    };
    return (
        <form onSubmit={handleSubmit((fields) => submit(fields,submitUserAction))}>
            <label>
                Name
            </label>
            <Field
                type="text"
                component="input"
                name="username"
            />
            <label>
                Email
            </label>
            <Field
                type="text"
                component="input"
                name="email"
            />
            <label>
                Password
            </label>
            <Field
                type="text"
                component="input"
                name="password"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
const UserForm = (reduxForm({
    form: 'formUser'
}))(form);

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, submitUserAction)(UserForm);
