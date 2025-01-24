import Image from "next/image";
import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Hoshizora - Home',
  description: 'Hoshizora',
  icons: {
    icon: '/favicon.ico',
  },
};


  
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4 sm:px-6 lg:px-8">
      <div className={styles.textContainer}>
        <h1 className={`text-4xl sm:text-6xl lg:text-8xl font-bold text-center ${styles.starryText}`}>
          HOSHIZORA
        </h1>
        <p className={`mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg font-mono text-center ${styles.codeText}`}>
          &lt; Dream. Code. Inspire. /&gt;
        </p>
      </div>
    </div>
  );
}
