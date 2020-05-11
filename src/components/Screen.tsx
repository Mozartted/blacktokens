import {useLazyQuery} from '@apollo/react-hooks'
import gql from "graphql-tag"
import * as React from 'react';
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
      totalSupply
    }
  }
`


const Screen = () => {

    const [state, updateState] = React.useState({
        data: [],
        limit: 90,
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
            limit: 90,
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
            limit: state.limit + 90,
            skip: state.skip + 90
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
            <Search onload={onLoad}/>
          {
            loading ? 
              <div>Loading...</div> 
            : 
              <>
                {/* {data.} */}
                <List data={state.data}/>
                <button onClick={updateList}>Get more tokens</button>
              </>
          }
          {
            error ? 
              <div>{error}</div> 
            : 
              null
          }
        </>
    )
}

export default Screen