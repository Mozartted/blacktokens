import * as React from 'react';

interface IListProps {
    data: object[]
}
const List : React.FC<IListProps> = ({ data }) => {
    
    return (
        <>
            {data.map((item:any, index: any) => <div key={index}>{item.assetName} </div>)}
        </>
    )
}

export default List