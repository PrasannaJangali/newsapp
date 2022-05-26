import React ,{useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const history=useHistory();
  document.title=`Newsmonkey- ${props.category}`;
  const updatenews=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles( parsedata.articles);
    settotalResults(parsedata.totalResults);
    setloading(false);
  }
  useEffect(() => {
    console.log('useeffect');
    updatenews();
  }, [history.location.pathname]);

  const fetchMoreData = async () => {
    setpage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setarticles( articles.concat(parsedata.articles));
    settotalResults(parsedata.totalResults);
    setloading(false);
  };
 
    return (
      <>
        <h1 className="text-center">NewsPiegion - Top {props.category} Headlines</h1>
        <h3 className='text-center'>{props.category}</h3>
        {/* {this.state.loading && <Spinner />} */}
            <InfiniteScroll
              dataLength={articles ? articles.length: 0}
              next={fetchMoreData}
              hasMore={totalResults!==articles && articles.length}
              loader={loading && <Spinner />}
              >
                <div className='container'>
                <div className='row'>
                {articles && articles.map((e) => {
                  return <div className='col-md-4' key={e.url}>
                    <Newsitem title={e.title ? e.title:'Breaking News'} source={e.source} url={e.url} author={e.author} imageUrl={e.urlToImage} date={e.publishedAt} description={e.description ? e.description:'Checkout Now!'} />
                  </div>
                })}
                </div>
                </div>
            </InfiniteScroll>
        {/* {
          !this.state.loading && <div className="btn-group-toggle" style={{ height: '100px', }} data-toggle="buttons">
            <button type="button" style={{ display: this.state.page === 1 ? 'none' : 'block' }} onClick={this.Prevpage} className="btn btn-info float-left my-3"> &lt;-Previous</button>
            <button type="button" style={{ display: this.state.page === Math.ceil(this.state.totalResults / (this.props.pagesize)) ? 'none' : 'block' }} onClick={this.Nextpage} className="btn btn-info float-right my-3">Next- &gt;</button>
          </div>
        } */}
      
      </>
    )
  
}
News.propTypes ={
  category:PropTypes.string.isRequired,
  apikey: PropTypes.string,
  pagesize: PropTypes.number,
}
News.defaultprops={
  category:'general',
  apikey:'ac082221daa8495abfcc8cd6083780b1',
  pagesize:9,
}
export default News;
