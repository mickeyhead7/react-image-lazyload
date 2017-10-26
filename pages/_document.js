import { css } from 'glamor'
import { renderStatic } from 'glamor/server';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const page = renderPage();
        const styles = renderStatic(() => page.html);

        return { ...page, ...styles }
    }

    render() {
        const bodyStyles = css({
            margin: '0',
            minWidth: '20em',
            padding: 0,
        });

        return (
            <html>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
                </Head>
                <body className={bodyStyles}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}