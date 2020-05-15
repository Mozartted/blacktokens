import * as React from 'react';
import Input from "../commonComponents/input"

interface ISearchProps {
    onload: (e: any) => void
}
const Search : React.FC<ISearchProps> = ({onload}) => {
    return (
        <div className="container">
            <div className="search-bar">
                <Input type="text" onChange={onload} />
                <div className="search" placeholder="Search for tokens" />
            </div>
        </div>
    )
}

export default Search