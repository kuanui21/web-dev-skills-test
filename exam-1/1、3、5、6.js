// 1.
/**
There is an array, each item has such format:
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, ‘engineer’ or ‘systemAnalytics’.
**/

let user = [
    { firstName: "Chris", lastName: "Wang", customerID: "001", note: "xxx", profession: "productOwner" },
    { firstName: "Able", lastName: "Wang", customerID: "002", note: "xxx", profession: "student" },
    { firstName: "Chris", lastName: "", customerID: "003", note: "xxx", profession: "freelancer" },
    { firstName: "David", lastName: "", customerID: "004", note: "xxx", profession: "systemAnalytics" },
    { firstName: "Bee", lastName: "Lee", customerID: "005", note: "xxx", profession: "engineer" }
];

/**
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.
**/
function sortUserName(user) {
    user.sort((a, b) => {
        const keyA = a.firstName + a.lastName + a.customerID;
        const keyB = b.firstName + b.lastName + b.customerID;
        return keyA.localeCompare(keyB); // 使用 localeCompare 進行字串排序
    });
    console.log(user);
}
sortUserName(user)

/**
Q2. Please sort by ‘profession’ to follow the principle.
(‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’)
**/

function sortByType(user) {
    const professionOrder = {
        systemAnalytics: 0,
        engineer: 1,
        productOwner: 2,
        freelancer: 3,
        student: 4,
    };

    user.sort((a, b) => {
        const orderA = professionOrder[a.profession] ?? 999;
        const orderB = professionOrder[b.profession] ?? 999;
        return orderA - orderB;
    });

    console.table(user);
}
sortByType(user)


// 3.
/**
Please write down a function is used to create an array of unique values.
Example:
let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];
output: [1, 5, 2, 3, 4, 7, 8, 9, 0, 6]
**/

let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];

function getUniqueNumber(items) {
    const uniqueItems = [...new Set(items)];
    console.log(uniqueItems)
}
getUniqueNumber(items)



// 5.
/** Can you explain the problem with the following code, and how to fix it. **/
import React from 'react';
import ReactDOM from 'react-dom/client';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.handleAddCount = this.handleAddCount.bind(this);
    }

    handleAddCount() {
        /* explain：setState is asynchronous. To update state based on the previous state, use the function form of setState.*/

        // fixed
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.setState((prevState) => ({ count: prevState.count + 1 }));
        this.setState((prevState) => ({ count: prevState.count + 1 }));

        /* original
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        this.setState({ count: this.state.count + 1 });
        */
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleAddCount}>Add</button>
            </div>
        );
    }
}
ReactDOM.render(
    <Count />,
    document.getElementById('root')
);


// 6.
/** Please write the sample code to debounce handleOnChange (Do not use any 3th party libs other than react) **/
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

const SearchBox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);

    handleOnChange = (event) => {
        // make ajax call
        const value = event.target.value;
        setSearchTerm(value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('AJAX call with:', searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    return <input type="search" name="p" onChange={handleOnChange} ref={inputRef} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SearchBox />);