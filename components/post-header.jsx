import Head from 'next/head'
import dayjs from 'dayjs'

const PostTitle = ({ title, sub_title, update_at, keywords, origin, cover_img, _id }) => {
  const formatTitle = `${title} - wuh.site`
  const formatDate = dayjs(update_at).format('YYYY-MM-DD HH:MM:ss')
  const keywordsStr = keywords?.toString() ?? title
  return (<>
    <div className='b__post-header'>
      <Head>
        <title>{formatTitle}</title>
        <meta name='description' content={sub_title} />
        <meta name='author' content='shadow, wuh131420@foxmail.com' />
        <meta keywords={keywordsStr} />
        <meta name='renderer' content='webkit' />
        <meta httpEquiv="cache-control" content="no-cache"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wuh131420" />
        <meta name="twitter:creator" content="@wuh131420" />
        <meta name='twitter:image' content={cover_img} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={sub_title} />
        <meta name='twitter:image:alt' content='图片太大了,没办法了' />

        <meta property='og:type' content='article' />
        <meta property='og:title' content={`${title} -- wuh.site`} />
        <meta property='og:url' content={`https://wuh.site/post/${_id}`} />
        <meta property='og:description' content={sub_title} />
        <meta property='og:image' content={cover_img} />

        <script  type='application/ld+json' dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://wuh.site/post/${_id}"
            },
            "headline": "${formatTitle}",
            "author": "吴尒红 Shadow",
            "image": [
              "${cover_img}"
            ],
            "dateModified": "${update_at}",
            "datePublished": "${update_at}"
          }`
        }} />

          <script type='application/ld+json' dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "集合",
                "item": "https://wuh.site"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": ${title},
                "item": "https://wuh.site/post/"+${_id}
              }]
            }`
          }} />
      </Head>

      <h1 className='b__post-header--title'>{title}</h1>
      <p className='b__post-header--head'>
        <time>{formatDate}</time>&nbsp;&nbsp;
        <span>发布于 <strong>{origin}</strong></span>
      </p>
    </div>
    <style jsx>{`
      .b__post-header {
        width: 100%;
        margin-bottom: calc(var(--margin-base) * 2);
        display: flex;
        flex-direction: column;
      }
      .b__post-header--title {
        margin: 0;
        padding-bottom: var(--padding-base);
        font-size: 28px;
        color: var(--color-base-10);
        font-weight: var(--font-weight-large);
        line-height: 36px;
      }
      .b__post-header--head {
        margin: 0;
        font-size: 14px;
        line-height: 22px;
        color: var(--color-base-6);
      }
    `}</style>
  </>)
}

export default PostTitle