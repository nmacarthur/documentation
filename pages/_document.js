import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import theme from '../theme';

export default class MyCustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }; // return styles collected
  }

  render() {
    return (
      <html>
        <Head>
          <title>My Page Title</title>
          {this.props.styleTags}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
            key="google-font-roboto"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <body>
            <Main />
            <NextScript />
          </body>
        </ThemeProvider>
      </html>
    );
  }
}
