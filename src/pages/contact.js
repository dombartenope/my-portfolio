import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const variants = {
    initial: { opacity: 0, x: -1000 },
    animate: {
        opacity: 1, x: 0, transition: {
            delay: 0.5
        }
    },
    exit: { opacity: 0 }
}

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
        width: 80%;
        max-width: 80%;
        margin-top: 3rem;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.6);
        padding: 2rem;
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
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .inputBlock {
                margin-bottom: 2rem;
                width: 100%
            }
            input, textarea {
                display: block;
                width: 100%;
                background: rgba(0, 0, 0, 0.7);
                color: var(--white);
                border-radius: 5px;
            }
            .err {
                cursor: not-allowed;
            }
            button {
                background: rgba(0, 0, 0, 0.7);
                color: var(--glow);
                text-shadow: var(--text-shadow);
                cursor: pointer;
                width: 50%;
                margin-top: 1rem;
                position: relative;
            }
        }
    @media (max-width: 800px) {
        width: 80%;
    }
}
`;

const Contact = () => {
    const [localName, setLocalName] = useState('');
    const [localEmail, setLocalEmail] = useState('');

    return (
        <ContactStyles>
            <SEO title={"Contact Me"} />
            <motion.h1
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >Contact Me!</motion.h1>
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
                        <input
                            type="email"
                            name="email"
                            value={localEmail}
                            onChange={e => setLocalEmail(e.target.value)}
                        />

                        <label htmlFor="name">Name </label>
                        <input
                            type="text"
                            name="name"
                            value={localName}
                            onChange={e => setLocalName(e.target.value)}
                        />
                    </div>

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={!localName || !localEmail}
                        className={!localName || !localEmail ? 'err' : ''}
                    >
                        {!localName || !localEmail ? 'Please Enter Your Info' : 'Send'}
                    </button>

                </form>
            </div>
        </ContactStyles >
    )
};

export default Contact;
