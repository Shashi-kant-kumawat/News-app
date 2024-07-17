import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Loading from '../Loading'
import InfiniteScroll from 'react-infinite-scroll-component'

export default class News extends Component {

    
        constructor(){
            super()
            this.state={
                articles:[],
                loading:false,
                page:1
            }
        }
        async Updatenews(){
          this.props.setprogress(0)
            this.setState({loading:true})
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7c707480a5a04a2cb20f59c88b1e79be&page=${this.state.page}&pageSize=10`
            let data=await fetch(url)
            let vrg=await data.json()
            this.setState({articles:vrg.articles,
                totalResults:vrg.totalResult,
                loading:false
            })
            this.props.setprogress(100)
        }
        async componentDidMount(){
          this.Updatenews()
        }
        async Previous(){
          this.Updatenews()
          this.setState({
            page:this.state.page -1 
          })
        }
        async Next(){
          this.Updatenews()
          this.setState({
            page:this.state.page +1
          })
        }
        async fetchMoreData(){
          let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7c707480a5a04a2cb20f59c88b1e79be&page=${this.state.page}&pageSize=10`
          let data=await fetch(url)
          let vrg=await data.json()
          this.setState({articles:this.state.articles.concat(vrg.articles),
              totalResults:vrg.totalResult,
              page:this.state.page + 1
              
          })
        }

       
  render() {
    return (
        <div>
           
            <h2>News Headlines</h2>
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.totalResult}
          loader={<Loading/>}>
        {this.state.articles.map((value)=>{
           return  <div key={value.url}>
            <Newsitems title={value.title?value.title:"that is ok"} description={value.description} image={value.urlToImage} userid={value.url}/>
            </div>
        })}
        </InfiniteScroll>
        <div>
            <button onClick={this.Previous} disabled={this.state.page<=1}>Previous</button>
            <button onClick={this.Next} disabled={this.state.page +1 >Math.ceil(this.state.totalResults/10)}>Next</button>
        </div>
        </div>
        
        
    )
  }
}
