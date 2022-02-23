import React from "react";
import { Form } from "../../components";
import { render } from "@testing-library/react";


describe("<Form/>", () => {
    it("renders <Form/>", () => {
        const { container, getByText } = render(
            <Form>
                <Form.Title>Sign In</Form.Title>
                <Form.Base>
                    <Form.InputWrapper >
                        <Form.Input
                            type="email"
                            value={"email"}
                            error={"error"}
                            onChange={() => {}}
                        />
                        <Form.Placeholder
                            htmlFor="emailInput"
                        >
                            Email or phone number
                        </Form.Placeholder>
                    </Form.InputWrapper>
                    <Form.InputWrapper>
                        <Form.Input
                            error={"error"}
                            value={"password"}
                            type="password"
                            onChange={() => {}}
                        />
                        <Form.Placeholder
                            htmlFor="passwordInput"
                        >
                            Password
                        </Form.Placeholder>
                    </Form.InputWrapper>
                    <Form.Button
                        type="submit"
                    >
                    </Form.Button>
                    <Form.RememberMe>
                        <div>
                            <Form.Checkbox type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Remember Me</label>
                        </div>
                        <span>Need help?</span>
                    </Form.RememberMe>
                </Form.Base>
                <Form.FacebookLogin
                >
                    <img src="/images/icons/facebook.png"
                        alt="Facebook Logo"
                    />
                    Login with Facebook
                </Form.FacebookLogin>
                <Form.Error>Some error occured.</Form.Error>
                <Form.CaptchaText>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span></Form.CaptchaText>
            </Form>
        )

        expect(getByText("Sign In")).toBeTruthy()
        expect(getByText("Email or phone number")).toBeTruthy()
        expect(getByText("Password")).toBeTruthy()
        expect(getByText("Remember Me")).toBeTruthy()
        expect(getByText("Need help?")).toBeTruthy()
        expect(getByText("Login with Facebook")).toBeTruthy()
        expect(getByText("Some error occured.")).toBeTruthy()
        expect(getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot.")).toBeTruthy()
    })
})