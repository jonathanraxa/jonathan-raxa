import React from 'react';
import '../../css/styles.css';
import '../../js/Portfolio.js';


export const ModalItem = ({ item }) => {


    return (
        <div className="modal-body">

            {videdu.extra_resource}

            <div className="modal-works">
                {videdu.languages.map(lang => (<span>{lang + " "}</span>))}
            </div>
            <p><strong>Website:&nbsp;</strong><a href={videdu.website_link}>{videdu.website_title}</a></p>
            <p><strong>Source Code:&nbsp;</strong><a href={videdu.source_code_link}>{videdu.source_code_title}</a></p>
            <p><strong>Documentation:&nbsp;</strong><a href={videdu.documentation_link}>{videdu.documentation_title}</a></p>
            <p><strong>Contribution:&nbsp;</strong>{videdu.contribution}</p>
        </div>
                
    );
}
