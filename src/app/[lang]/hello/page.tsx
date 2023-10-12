import Link from 'next/link';

import { getDictionaries } from '@/dictionaries';

export default async function Page({ params }: { params: { lang: string } }) {
  const dict = await getDictionaries(params.lang);

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <div className='flex gap-8'>
        <Link href='/ja/hello'>日本語</Link>
        <Link href='/en/hello'>英語</Link>
      </div>
      <div className='flex flex-col items-center justify-center'>
        {/* dict.hello.titleでjsonに定義した値を表示 */}
        <h1>{dict.hello.title}</h1>
        <p>{dict.hello.text}</p>
      </div>
    </main>
  );
}
