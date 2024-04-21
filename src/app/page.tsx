export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import HomePage from '@/components/pages/HomePage';

const Home = () => {
  return (
    <>
      <header></header>
      <main className="py-6 flex-[1_0_auto]">
        <HomePage />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
