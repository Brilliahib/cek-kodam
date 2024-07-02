"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import PatungUndip from "@/public/img/patung-undip.png";
import { ListKhodam } from "@/lib/constant";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [result, setResult] = useState<{
    name: string;
    khodam: string;
    desc: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setResult({ name: "", khodam: "Isi nama dulu dips!", desc: "" });
      return;
    }

    const randomIndex = Math.floor(Math.random() * ListKhodam.length);
    console.log(randomIndex);

    const randomKhodam = ListKhodam[randomIndex];

    setResult({ name, khodam: randomKhodam.name, desc: randomKhodam.desc });
  };
  return (
    <main className="pad-x flex md:min-h-screen h-screen items-center justify-center">
      <div className="space-y-4 md:max-w-xl w-full">
        <div className="text-center space-y-2">
          <h1 className="md:text-5xl text-4xl font-extrabold">Cek Kodam</h1>
          <h1 className="md:text-5xl text-4xl font-extrabold text-purple-400">
            Anak Undip
          </h1>
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <Image
              src={PatungUndip}
              alt="Patung Undip"
              className="md:max-w-[250px] max-w-[180px]"
              width={364}
              height={463}
            ></Image>
          </div>
          <div className="text-center space-y-1 mt-8 w-full">
            {result && (
              <>
                <h1 className="text-xl font-extrabold underline mb-2">
                  {result.name}
                </h1>
                <h3 className="md:text-xl text-lg font-extrabold mb-4">
                  {result.khodam}
                </h3>
                <div className="md:text-md text-sm font-semibold">
                  <p className=" flex justify-center text-center">
                    {result.desc}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Masukkan namamu disini dips!"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Input>
            <Button
              type="submit"
              className="bg-violet-700 w-full font-extrabold text-lg hover:bg-violet-700/60"
            >
              Cek Kodam
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
