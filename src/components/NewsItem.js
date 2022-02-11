import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgurl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card bg-dark text-light border border-light">
                <div style={{ right: '0', zIndex: '1', display: 'flex', justifyContent: 'flex-end', position: 'absolute' }}>
                    <span className="badge rounded-pill bg-info">
                        {source}
                    </span>
                </div>
                <img src={!imgurl ? "https://abc17news.b-cdn.net/abc17news.com/2019/10/News-web-1024x576.jpg" : imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title border-bottom pb-3">{title}</h5>
                    <p className='card-text'><small className='text-muted'>By {!author ? "unknown" : author} <br /> {new Date(date).toGMTString()}</small></p>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-info text-light">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
