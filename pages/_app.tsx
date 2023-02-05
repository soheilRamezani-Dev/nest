import { AppProps } from "next/app";
import "../styles/globals.scss";
import MainLayout from "../components/layout/mainLayout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

type PropsWithLayout = AppProps & { Component: NextPageWithLayout };

export default function MyApp({ Component, pageProps }: PropsWithLayout) {
  const layout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return layout(<Component {...pageProps} />);
}
