import React from 'react';
import styled from 'styled-components';

const ContactStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    color: var(--white);
    h1 {
        color: var(--glow);
        text-shadow: var(--text-shadow);
        font-size: 3rem;
    }
    .container {
        p {
            text-align: center;

        }
        h2 {
            margin-top: 2rem;
            padding-bottom: .5rem;
            position: relative;
        }
        h2:after {
            position: absolute;
            content: ' ⤵';
            font-size: 2rem;
            color: var(--glow);
            text-shadow: var(--text-shadow);
            top: 5px;
            animation: blink 10s linear infinite;
        }
        width: 50%;
        max-width: 80%;
        margin-top: 3rem;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.6);
        padding: 2rem;
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .inputBlock {
                width: 100%;
            }
            input, textarea {
                display: block;
                width: 100%;
                background: rgba(0, 0, 0, 0.7);
                color: var(--white);
                border-radius: 5px;
            }
            button {
                background: rgba(0, 0, 0, 0.7);
                color: var(--glow);
                text-shadow: var(--text-shadow);
                cursor: pointer;
                width: 50%;
                margin-top: 1rem;
            }
        }
    }
`;

const contact = () => {
    return (
        <ContactStyles>
            <h1>Contact Me!</h1>
            <div className="container">
                <p>Feel free to inquire about anything here, or just say hi!</p>
                <h2>Your Info</h2>
                <form
                    name="Contact Form"
                    action="/thanks"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="Contact Form" />
                    <div className="inputBlock">
                        <label htmlFor="email">Email </label>
                        <input type="email" name="email" />

                        <label htmlFor="name">Name </label>
                        <input type="text" name="name" />
                    </div>

                    <label htmlFor="message">Message</label>
                    <textarea name="message" cols="30" rows="10"></textarea>

                    <button type="submit">Send</button>

                </form>
            </div>
        </ContactStyles>
    )
};

export default contact;
