import Image from 'next/image';

export default function BlogListingCard(props) {

    const formattedDate = new Date(props.blogPost.attributes.Date).toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })

    return (
        <div>

            <div className="byline-date">
                <h2>{props.blogPost.attributes.Title}</h2>
                <p>{props.blogPost.attributes.blog_authors.data[0].attributes.AuthorName} | {formattedDate}</p>
            </div>

            {props.blogPost.attributes.ListingCardImage.data &&
                props.blogPost.attributes.ListingCardImage.data.attributes.url ?
                <Image
                    src={props.blogPost.attributes.ListingCardImage.data.attributes.url}
                    alt={props.blogPost.attributes.ListingCardImage.data.attributes.caption}
                    layout="responsive"
                    width="500"
                    height="500"
                />
                :
                <div className="no-pic">

                    <Image
                        src="/pic-not-available.gif"
                        alt="Image not Available"
                        layout="responsive"
                        width="500"
                        height="500"
                    />
                </div>}

            <div className="text-snippet">
                <p>{props.blogPost.attributes.TextPreviewSnippet} <u>Read More...</u></p>
            </div>

        </div>
    );
}
