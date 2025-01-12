import { Fragment, type PropsWithChildren } from 'react';

import MainNavigation from './MainNavigation.tsx';

type LayoutProps = PropsWithChildren;

export default function Layout(props: LayoutProps) {
  return (
    <Fragment>
      <MainNavigation />
      <main className='w-[90%] mx-auto my-8 max-w-[50rem]'>{props.children}</main>
    </Fragment>
  );
}