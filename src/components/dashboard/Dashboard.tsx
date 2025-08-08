'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "@/styles/dashboard/dashboard.module.scss"

export default function Dashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.replace('/auth');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to the Dashboard</h1>
    </div>
  );
}
