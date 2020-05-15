import * as React from 'react';
import Card from "../commonComponents/card"
import {Col, Grid, Row} from "../commonComponents/grid"
import {formatModifier} from "../utils/helper"

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
                                    <span className="font-lighter">Current supply</span>
                                    <p>{ formatModifier(item.currentSupply) || "N/A"}</p>
                                </Col>
                                <Col dataSize={5}>
                                    <span className="font-lighter">Total Supply</span>
                                    <p>{formatModifier(item.totalSupply) || "N/A"}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col dataSize={5}>
                                    <span className="font-lighter">Asset type</span>
                                    <p>{ formatModifier(item.assetType) || "N/A"}</p>
                                </Col>
                                <Col dataSize={5}>
                                    <span className="font-lighter">Market cap</span>
                                    <p>{ formatModifier(item.marketCap) || "N/A"}</p>
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