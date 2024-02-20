import Header from "./header";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-14">
      <Header />

      <div className="container mx-auto flex flex-col justify-between w-full items-left left-0 m-64">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          CAMPEÕES SÃO MOLDADOS < br/><h2 className="text text-red-600">NO TATAME
            </h2>
            </h1>
        <span className="font-bold w-3/6">Nossa missão sempre foi formar campeões, não somente
          para competição, mas sim para a vida, o que você aprender
          no Jiu Jitsu fará parte do seu ser.</span>
          
        
        </div>
        <Image
          src="/mestre.png"
          alt="Imagem Mestre Bassam"
          width="863"
          height="588"
          className="mr-8"
        >

        </Image>
      </div>

  );
}
