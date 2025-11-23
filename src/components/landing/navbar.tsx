"use client";

import PillNav from "@/components/ui/pill-nav";

export function Navbar() {
  return (
    <PillNav
      logoText="Body Cart"
      items={[
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Demos', href: '#demos' },
        { label: 'FAQ', href: '#faq' },
      ]}
      baseColor="#ffffff"
      pillColor="#000000"
      hoveredPillTextColor="#000000"
      pillTextColor="#ffffff"
      ease="power2.easeOut"
    />
  );
}
