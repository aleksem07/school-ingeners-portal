'use client';
import BasicTabs from '@/components/material/tabs/tabs';
import Link from 'next/link';
import BoxSystemProps from '@/components/material/box/box';
const NetworkSetting = () => {
  return (
    <>
      <BoxSystemProps
        data={
          <>
            <BasicTabs />
            <Link href={'/'}>Подробнее</Link>
          </>
        }
      />
    </>
  );
};

export default NetworkSetting;
