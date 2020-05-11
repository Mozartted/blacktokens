import * as React from 'react';

interface ISearchProps {
    onload: (e: any) => void
}
const Search : React.FC<ISearchProps> = ({onload}) => {
    return (
        <>
            <input type="text" onChange={onload} />
        </>
    )
}

export default Search