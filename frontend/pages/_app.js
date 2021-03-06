import React from "react";
import App from "next/app";
import Link from "next/link";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

import "react-quill/dist/quill.snow.css";
import "../public/style.css";

Router.events.on("routeChangeStart", url => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Component {...pageProps} />
            </>
        );
    }
}
