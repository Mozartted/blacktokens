import * as React from 'react';
import Card from "../commonComponents/card"
import {Col, Grid, Row} from "../commonComponents/grid"

interface IListProps {
    data: object[]
}
const List : React.FC<IListProps> = ({ data }) => {
    
    return (
        <div className="container">
            <Grid>
                <Row>
                    {data.map((item:any, index: any) => 
                    <Col key={index} dataSize={3} dataCollapse="xs">
                        <Card background="#383838">
                            <Row centered={true}>
                                <img className="text-center" src={`https://ui-avatars.com/api/?rounded=true&background=1A1A1A&color=ffffff&name=${item.assetSymbol}`} /> 
                            </Row>
                            <Row centered={true}>
                                <h3 className="text-center mt-2"> {item.assetName} </h3>
                            </Row>
                            <Row>
                                <Col dataSize={5}>
                                    <span>Current supply</span>
                                    <p>{item.currentSupply || "N/A"}</p>
                                </Col>
                                <Col dataSize={5}>
                                    <span>Total Supply</span>
                                    <p>{item.totalSupply || "N/A"}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col dataSize={5}>
                                    <span>Asset type</span>
                                    <p>{item.assetType || "N/A"}</p>
                                </Col>
                                <Col dataSize={5}>
                                    <span>Market cap</span>
                                    <p>{item.marketCap || "N/A"}</p>
                                </Col>
                            </Row>
                        </Card>
                    </Col>)}
                </Row>
            </Grid>
        </div>
    )
}

export default List