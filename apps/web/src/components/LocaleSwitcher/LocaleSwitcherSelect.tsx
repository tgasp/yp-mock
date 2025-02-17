'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {Pathnames, usePathname, useRouter} from '@/i18n/routing';
import { ChevronDown } from "lucide-react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Pathnames;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label
      className={clsx(
        'relative rounded-md',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <div className="relative">
        <select
          className="h-9 w-[80px] appearance-none rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 opacity-50" />
      </div>
    </label>
  );
}