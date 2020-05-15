import {useLazyQuery} from '@apollo/react-hooks'
import gql from "graphql-tag"
import * as React from 'react';
import {Button, Container} from "../commonComponents/grid"
import List from "./List"
import Search from "./Search"


const GET_COINS = gql`
  query assetsFlow($skip: Int, $limit: Int ){
    assets (
        page: {
            skip: $skip,
            limit: $limit
        }
    ){
      marketCap
      assetName
      assetSymbol
      currentSupply
      totalSupply
    }
  }
`

const GET_COINS_BITS = gql`
  query assetsFlow($like: String ){
    assets (
        filter: { 
            assetName: { _like: $like } 
        }
    ){
      marketCap
      assetName
      assetSymbol
      currentSupply
      assetType
      totalSupply
    }
  }
`


const Screen = () => {

    const [state, updateState] = React.useState({
        data: [],
        limit: 20,
        skip: 0
    })

    const [loadTokens, {loading, error}] = useLazyQuery(GET_COINS, {onCompleted: async (result) => {
        // tslint:disable-next-line: no-console
        updateState({
            ...state,
            data: state.data.concat(result.assets)
        })
    }})

    const [loadTokensLike] = useLazyQuery(GET_COINS_BITS, {onCompleted: async (result) => {
        // tslint:disable-next-line: no-console
        console.log(result.assets)
        updateState({
            ...state,
            data: result.assets,
            limit: 20,
            skip: 0,
        })
    }, onError: (e) =>{
        // tslint:disable-next-line: no-console
        console.log(e)
    } })

    React.useEffect(() => {
        loadTokens({
            variables: {
                limit: state.limit,
                skip: state.skip
            }
        })
    },[])

    const updateList = () => {
        updateState({
            ...state,
            limit: state.limit + 20,
            skip: state.skip + 20
        })
        loadTokens({
            variables: {
                limit: state.limit,
                skip: state.skip
            }
        })
    }

    const onLoad = (e: any) => {
        const value = e.target.value
        if((value !== null) || (value !== "")) {
            loadTokensLike({
                variables: {
                   like: `${value}%`
                }
            })
        }else{
            loadTokens({
                variables: {
                    limit: state.limit,
                    skip: state.skip
                }
            })
        }
    }


    return (
        <>
            <Container className="margin-auto margin-top">
                <div className="text-center">
                    <img width="45" src={require('../../src/assets/img/Logo.png')} />
                    <h1 className="futura-lt text-white large-display">
                        BlackTokens
                    </h1>
                    <p className="futura-lt">a directory of crypto-tokens all over the world</p>
                </div>
                <Search onload={onLoad}/>
                <>
                    {/* {data.} */}
                    <List data={state.data}/>
                    {
                        loading ? 
                        <div>Loading...</div> 
                        : 
                        <Button onClick={updateList}>Get more tokens</Button>
                    }
                </>
                {
                    error ? 
                    <div>{error}</div> 
                    : 
                    null
                }
            </Container>
        </>
    )
}

export default Screen