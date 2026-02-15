'use client';

import { Button } from '@/components/ui/button';
import { HeroTag } from '@/pag/main/hero-section/hero-tag';

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20 pb-10">
      <div className="animate-in fade-in slide-in-from-bottom-8 relative z-10 flex w-full max-w-4xl flex-col items-start gap-8 duration-1000 ease-out">
        <HeroTag />

        <h1 className="text-5xl leading-[1.05] font-black tracking-tighter text-white uppercase select-none md:text-8xl">
          Створюй <br />
          <span className="inline-block transition-colors duration-300 hover:text-green-400">
            проєкти.
          </span>{' '}
          <br />
          навчайся. <br />
          заробляй <br />
          <span className="text-[#00FF85] drop-shadow-[0_0_20px_rgba(0,255,133,0.4)] transition-all duration-500 hover:drop-shadow-[0_0_30px_rgba(0,255,133,0.6)]">
            токени.
          </span>
        </h1>

        <p className="max-w-xl text-lg leading-relaxed font-medium text-zinc-400 md:text-xl">
          Платформа для втілення ідей через команду, навчання та справедливу винагороду. Збирайте
          команди, керуйте проєктами в професійному таск-менеджері та отримуйте токени за кожне
          виконане завдання.
        </p>
        <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
          <Button>Створити проєкт</Button>

          <Button>Переглянути проєкти</Button>
        </div>
      </div>
    </section>
  );
};
