import React from "react"
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';

// ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body);

const FooterStyle = styled.footer`
footer {
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    margin: 1%;
    font-size: 1rem;
}
`



export default function Footer (props){
    return (
        <FooterStyle>       
            <SocialIcon class="icon" url="http://instagram.com"/>
            <SocialIcon class="icon" url="http://facebook.com"/>
            <SocialIcon class="icon" url="http://pinterest.com"/>  
            <SocialIcon class="icon" url="http://twitter.com"/>
        </FooterStyle>
    )
}