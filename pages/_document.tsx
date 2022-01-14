import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* Webfont */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
          {/* stylesheet */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
