import React from 'react';
import './sign-up.stykes.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = e => {
        const {name, value} = e.target;

        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h1 className='title'>I do not have an account</h1>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        label='Display name'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        label='Email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        label='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        label='Confirm password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>               
                </form>
            </div>
        )
    }
}

export default SignUp;