import React from 'react';
import { ooo } from "./constants";
import "./footer.sass";

export const Footer: React.FC = ( ): JSX.Element=>  
{

    return (
        <footer className="footer">
            <p className="footer_ooo">
                {ooo}
            </p>
        </footer>
    )
}