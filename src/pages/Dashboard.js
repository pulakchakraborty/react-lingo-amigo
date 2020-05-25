import React, { Fragment, useState } from 'react';

import FormInput from '../components/FormInput';
import WordList from '../components/WordList';

const Dashboard = () => {
    const [ wordBank, setWordBank ] = useState([]);

    /* This function adds a new pair of words in the word-list */
    const growWordBank = ({ english, german }) => {
        console.log(`data Dashboard: ${english} : ${german}`);
        setWordBank([...wordBank, { english, german }]);
        console.log(`data Dashboard: ${wordBank}`);
    };

    /* This function removes a specific pair of words from the word-list */
    const deleteWord = (index) => {
        const temp = [...wordBank];
        temp.splice(index, 1);
        setWordBank(temp);
    };

    return(
        <Fragment>
             <FormInput growWordBank={growWordBank} />
             <WordList wordBank={wordBank} deleteWord={deleteWord} />
         </Fragment>
    );
};

export default Dashboard;
