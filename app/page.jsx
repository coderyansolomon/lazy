'use client'

import SlowComponent from './components/SlowComponent';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Home Page</h2>
      <SlowComponent />
    </main>
  );
}
