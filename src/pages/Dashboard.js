import React, { Fragment, useState } from 'react';

import FormInput from '../components/FormInput';
import WordList from '../components/WordList';

const Dashboard = () => {
    const [ wordBank, setWordBank ] = useState([]);

    const growWordBank = ({ english, german }) => {
        console.log(`data Dashboard: ${english} : ${german}`);
        setWordBank([...wordBank, { english, german }]);
        console.log(`data Dashboard: ${wordBank}`);
    };
    return(
        <Fragment>
             <FormInput growWordBank={growWordBank} />
             <WordList wordBank={wordBank} />
         </Fragment>
    );
};

export default Dashboard;
