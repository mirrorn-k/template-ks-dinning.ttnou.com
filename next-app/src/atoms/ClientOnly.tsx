'use client';

import { useEffect, useState } from 'react';

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // 初回のSSRでは何も描画しない

  return <>{children}</>;
}
