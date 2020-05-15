import * as React from 'react';
import Input from "../commonComponents/input"

interface ISearchProps {
    onload: (e: any) => void
}
const Search : React.FC<ISearchProps> = ({onload}) => {
    return (
        <div className="container">
            <div className="search-bar">
                <Input type="text" onChange={onload} placeholder="Search for tokens"/>
                <div className="search"  />
            </div>
        </div>
    )
}

export default Search