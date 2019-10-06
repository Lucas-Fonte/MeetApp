import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    padding: 15px;
    margin: 50px auto;

    form{
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input{
            background: rgba(0, 0 , 0, 0.3);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder{
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #ff5c5c;
            align-self: flex-start;
            margin: 0 0  10px;
            font-weight: bold;
        }

        hr {
            border: 0;
            height: 0.2px;
            background: rgba(255, 255, 255, 0.1);
            margin: 10px 0 20px;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #ff5c5c;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.05, '#ff5c5c')}
            }
        }

        a {
            color: #FFF;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }
        }
    }

    > button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #ff5c5c;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.05, '#ff5c5c')}
        }
    }
`;
