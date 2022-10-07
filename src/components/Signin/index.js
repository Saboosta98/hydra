import React from 'react';
import { Container, 
        FormWrap, 
        Icon, 
        FormContent, 
        Form, 
        FormH1, 
        FormLabel, 
        FormInput, 
        FormButton, 
        Text 
        } from './SigninElements';

const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to="/">Hydra42</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Anmeldung</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Passwort</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Anmelden</FormButton>
                        <Text>Passwort vergessen</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>
    )
}

export default SignIn
