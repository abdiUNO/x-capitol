import { Fragment } from 'react';
import config from '../../lib/config';
import { NextSeo } from 'next-seo';

export default function BasicMeta({
  title,
  description,
  keywords,
  image,
  url,
  type: contentType = 'website',
  publishedTime,
}) {
  return (
    <>
      <NextSeo
        title={title ? [title, config.site_title].join(' | ') : ''}
        description={description ? description : config.site_description}
        canonical={config.base_url + url}
        language="English"
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords
              ? keywords.join(',')
              : config.site_keywords.map((it) => it.keyword).join(','),
          },
        ]}
        openGraph={{
          type: contentType,
          url: 'https://xcapitalfunding.net/',
          site_name: config.site_title,
          description: description ? description : config.site_description,
          images: [
            image
              ? image
              : {
                  url: config.base_url + '/assets/images/x-capitol-cover.jpeg',
                  alt: 'Og Image Alt',
                },
          ],
          article:
            contentType === 'article'
              ? {
                  publishedTime: publishedTime,
                  tags: keywords && keywords.length > 0 ? keywords : null,
                }
              : null,
        }}
        twitter={{
          site: 'X Capitol',
          cardType: 'summary_large_image',
        }}
      />
    </>
  );
}
