import React from 'react';
import { ooo, description } from "./constants";
import "./footer.sass";

export const Footer: React.FC = ( ): JSX.Element=>  
{

    return (
        <footer className="footer">
            <p className="footer_ooo">
                {ooo}
            </p>
            <p className="footer_description">
                {description}
            </p>
        </footer>
    )
}