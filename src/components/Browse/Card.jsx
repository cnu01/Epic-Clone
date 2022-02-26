export function Card({src,title,price})
{
    return <div className="card">
                <div className="poster">
                    <img src={src} />
                </div>
                <div className="content">
                    <p>{title}</p>
                    <p>{price==0?"Free":<a>&#8377; {price}</a>} </p>
                </div>
        </div>
}